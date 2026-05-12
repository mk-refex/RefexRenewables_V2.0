import { getCitiesOfState, getStatesOfCountry } from "@countrystatecity/countries";

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

let indiaCitiesCache = {
  expiresAt: 0,
  cities: /** @type {string[] | null} */ (null),
};

async function buildIndiaCityList() {
  const states = await getStatesOfCountry("IN");
  if (!Array.isArray(states) || states.length === 0) {
    throw new Error("No states returned for India (IN)");
  }
  const unique = new Set();
  for (const state of states) {
    const stateName = String(state?.name ?? "").trim();
    const stateCode = String(state?.iso2 ?? "").trim();
    if (!stateName || !stateCode) continue;
    const cities = await getCitiesOfState("IN", stateCode);
    if (!Array.isArray(cities)) continue;
    for (const city of cities) {
      const cityName = String(city?.name ?? "").trim();
      if (!cityName) continue;
      unique.add(`${cityName}, ${stateName}`);
    }
  }
  return [...unique].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
}

/** GET /api/geo/india-cities — ODbL: CountryStateCity / @countrystatecity/countries */
export async function getIndiaCities(_req, res) {
  try {
    const now = Date.now();
    if (
      indiaCitiesCache.cities &&
      now < indiaCitiesCache.expiresAt
    ) {
      return res.status(200).json({
        success: true,
        cities: indiaCitiesCache.cities,
      });
    }

    const cities = await buildIndiaCityList();
    indiaCitiesCache = {
      expiresAt: now + CACHE_TTL_MS,
      cities,
    };

    return res.status(200).json({
      success: true,
      cities,
    });
  } catch (error) {
    console.error("getIndiaCities error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load India cities. Please try again later.",
    });
  }
}
