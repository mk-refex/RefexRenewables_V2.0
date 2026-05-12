/** Prefer these metros first when the search box is empty (must match "City, State" labels). */
const MAJOR_CITY_ORDER = [
  'Mumbai',
  'Delhi',
  'New Delhi',
  'Bengaluru',
  'Bangalore',
  'Chennai',
  'Hyderabad',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Kanpur',
  'Nagpur',
  'Indore',
  'Thane',
  'Bhopal',
  'Visakhapatnam',
  'Patna',
  'Vadodara',
  'Ghaziabad',
  'Ludhiana',
  'Coimbatore',
  'Kochi',
  'Gurgaon',
  'Noida',
];

function cityPart(line: string): string {
  return line.split(',')[0]?.trim() ?? '';
}

function scoreLine(line: string, q: string): number {
  const low = line.toLowerCase();
  if (!q) {
    const city = cityPart(line);
    const idx = MAJOR_CITY_ORDER.findIndex(
      (m) => city === m || city.startsWith(`${m} `),
    );
    return idx >= 0 ? 2000 - idx : 0;
  }
  if (low.startsWith(q)) return 120 + Math.min(q.length, 20);
  if (low.includes(q)) return 80;
  let qi = 0;
  for (let i = 0; i < low.length && qi < q.length; i += 1) {
    if (low[i] === q[qi]) qi += 1;
  }
  if (qi === q.length) return 40;
  return 0;
}

/** Prefix + contains + subsequence ranking; caps results for performance. */
export function filterIndiaCities(
  all: string[],
  query: string,
  limit = 250,
): string[] {
  const q = query.trim().toLowerCase();
  const ranked = all
    .map((line) => ({ line, score: scoreLine(line, q) }))
    .filter((x) => (q ? x.score > 0 : true))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.line.localeCompare(b.line, undefined, { sensitivity: 'base' });
    });
  return ranked.slice(0, limit).map((x) => x.line);
}
