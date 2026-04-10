function pad(value) {
  return String(value).padStart(2, "0");
}

export function phoneToDigitsOnly(phone) {
  return String(phone ?? "").replace(/\D/g, "");
}

export function parseUserAgent(ua) {
  const input = String(ua || "");
  const lower = input.toLowerCase();

  let deviceType = "Desktop";
  if (/mobile|iphone|android.*mobile|windows phone/i.test(input)) {
    deviceType = "Mobile";
  } else if (/ipad|tablet|android(?!.*mobile)/i.test(input)) {
    deviceType = "Tablet";
  }

  let browser = "Unknown";
  if (lower.includes("edg/")) browser = "Edge";
  else if (lower.includes("chrome/") && !lower.includes("edg/"))
    browser = "Chrome";
  else if (lower.includes("safari/") && !lower.includes("chrome/"))
    browser = "Safari";
  else if (lower.includes("firefox/")) browser = "Firefox";
  else if (lower.includes("opr/") || lower.includes("opera/")) browser = "Opera";

  return { deviceType, browser };
}

export function getRequestMeta(req) {
  const now = new Date();
  const timestamp = now.getTime();
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const dateTime = `${date} ${time}`;

  const forwardedFor = String(req.headers["x-forwarded-for"] || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean)[0];
  const ipAddress = forwardedFor || req.ip || req.socket?.remoteAddress || "";

  const userAgent = String(req.headers["user-agent"] || "");
  const { deviceType, browser } = parseUserAgent(userAgent);
  const countryCode = String(
    req.headers["cf-ipcountry"] ||
      req.headers["x-country-code"] ||
      req.headers["x-vercel-ip-country"] ||
      "",
  ).toUpperCase();
  const referer = String(req.headers.referer || req.headers.referrer || "");
  const source = referer || "direct";

  return {
    timestamp,
    dateTime,
    date,
    time,
    ipAddress,
    userAgent,
    deviceType,
    browser,
    countryCode,
    referer,
    source,
  };
}
