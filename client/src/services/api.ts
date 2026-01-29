/** Server running by default (auth, CMS). Use '' for same-origin, or set VITE_API_URL for a specific backend. */
const SERVER_BASE_URL =
  (import.meta.env?.VITE_API_URL as string | undefined) ?? "";

/** External API base used only for Stock API to fetch stock details from external services. */
const EXTERNAL_STOCK_API_BASE_URL = "https://refex.co.in";

export const getApiBaseUrl = () => SERVER_BASE_URL;
export const getStockApiBaseUrl = () => EXTERNAL_STOCK_API_BASE_URL;

/** Stock price API response */
export interface StockPriceResponse {
  status: boolean;
  current_price: number;
  index: string;
  overall_index: string;
  exchange: string;
}

/** Fetch current stock price from refex-finance API */
export async function getCurrentStockPrice(): Promise<StockPriceResponse> {
  const response = await fetch(
    "https://refex-finance.lab2.sharajman.com/stock_current_price",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stock_name: "REFEXRENEW.BO" }),
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stock price");
  }
  return response.json() as Promise<StockPriceResponse>;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

/** Related Links CMS shape (categories → sections → items) */
export interface RelatedLinksCategory {
  id: number;
  name: string;
  order: number;
  /** If true, sections on the public page render as collapsible panels with section name. */
  collapsible?: boolean;
  sections: Array<{
    id: number;
    name: string;
    labelType?: "name" | "financialYear";
    financialYear?: string;
    order: number;
    items: Array<{
      id: number;
      name: string;
      publishDate?: string;
      pdfUrl?: string;
      imageUrl?: string;
      isStatic?: boolean;
      staticContent?: string;
      order: number;
    }>;
  }>;
}

/** Auth API – login returns { message, token, user } from server (no success/data wrapper) */
export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    email: string;
    username?: string;
    name?: string;
    role: string;
    permissions?: string[];
    lastActive?: string;
  };
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const base =
    SERVER_BASE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const response = await fetch(`${base}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const body = isJson
    ? await response.json()
    : { message: "Invalid response from server" };

  if (!response.ok) {
    throw new Error((body.message as string) || "Invalid email or password");
  }

  return body as LoginResponse;
}

const getServerBase = () =>
  SERVER_BASE_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

/** Resolve hero image URL for display: use as-is for https?; else prepend server base for /uploads/images/... or other relative paths. */
export function resolveImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  const base = getServerBase();
  return base + (url.startsWith("/") ? url : "/" + url);
}

/** Upload image to server (uploads/images/). Returns imageUrl like "/uploads/images/filename.ext". Requires auth. */
export async function uploadImage(file: File): Promise<string> {
  const token = localStorage.getItem("auth_token");
  const fd = new FormData();
  fd.append("image", file);
  const res = await fetch(`${getServerBase()}/api/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: fd,
  });
  if (!res.ok) {
    const j = await res.json().catch(() => ({}));
    throw new Error((j.message as string) || "Failed to upload image");
  }
  const j = (await res.json()) as { imageUrl?: string };
  return j.imageUrl ?? "";
}

/** Upload PDF to server (uploads/pdf/). Returns pdfUrl like "/uploads/pdf/filename.pdf". Requires auth. */
export async function uploadPdf(file: File): Promise<string> {
  const token = localStorage.getItem("auth_token");
  const fd = new FormData();
  fd.append("pdf", file);
  const res = await fetch(`${getServerBase()}/api/upload/pdf`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: fd,
  });
  if (!res.ok) {
    const j = await res.json().catch(() => ({}));
    throw new Error((j.message as string) || "Failed to upload PDF");
  }
  const j = (await res.json()) as { pdfUrl?: string };
  return j.pdfUrl ?? "";
}

/** Investor Relations CMS API – Hero and Related Links (uses server running by default) */
export const investorApi = {
  getHero: async () => {
    const res = await fetch(`${getServerBase()}/api/investor-hero`);
    if (!res.ok) throw new Error("Failed to fetch investor hero");
    return res.json() as Promise<{
      id?: number;
      imageUrl?: string | null;
      titleItems: Array<{ text: string; size: string; order: number }>;
    }>;
  },
  saveHero: async (data: {
    titleItems: Array<{ text: string; size: string; order: number }>;
    imageUrl?: string | null;
  }) => {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(`${getServerBase()}/api/investor-hero`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to save investor hero");
    return res.json();
  },
  /** Upload hero image to server; returns imageUrl like "/uploads/images/filename.ext". */
  uploadHeroImage: async (file: File): Promise<string> => {
    const token = localStorage.getItem("auth_token");
    const fd = new FormData();
    fd.append("image", file);
    const res = await fetch(`${getServerBase()}/api/investor-hero/upload`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: fd,
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error((j.message as string) || "Failed to upload image");
    }
    const j = (await res.json()) as { imageUrl?: string };
    return j.imageUrl ?? "";
  },
  getRelatedLinks: async () => {
    const res = await fetch(
      `${getServerBase()}/api/investor-content/related-links`,
    );
    if (!res.ok) throw new Error("Failed to fetch related links");
    const j = (await res.json()) as { categories?: unknown[] };
    return (j.categories ?? []) as RelatedLinksCategory[];
  },
  saveRelatedLinks: async (categories: unknown[]) => {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(
      `${getServerBase()}/api/investor-content/related-links`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ categories }),
      },
    );
    if (!res.ok) throw new Error("Failed to save related links");
    const j = (await res.json()) as { categories?: unknown[] };
    return j.categories ?? [];
  },
};

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = localStorage.getItem("auth_token");
  const base =
    SERVER_BASE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");

  try {
    const response = await fetch(`${base}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    });

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error(
        `Server returned non-JSON response: ${text.substring(0, 100)}`,
      );
    }

    const data: ApiResponse<T> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Request failed");
    }

    return data.data as T;
  } catch (error: any) {
    // If it's a network error (backend not available), re-throw it
    // so components can handle it with demo mode
    if (
      error.name === "TypeError" ||
      error.message.includes("fetch") ||
      error.message.includes("ERR_CONNECTION_REFUSED") ||
      error.message.includes("Failed to fetch") ||
      error.message.includes("NetworkError") ||
      error.message.includes("network")
    ) {
      throw new Error("Backend server not available");
    }
    // If it's a JSON parse error, provide better error message
    if (error.message.includes("JSON") || error.message.includes("<!DOCTYPE")) {
      throw new Error(
        "Server returned HTML instead of JSON. Check if the endpoint exists.",
      );
    }
    throw error;
  }
}

/** Stock API requests use external base URL for fetching stock details from external services. */
async function stockApiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = localStorage.getItem("auth_token");
  try {
    const response = await fetch(`${EXTERNAL_STOCK_API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options.headers as Record<string, string>),
      },
    });
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error(
        `Server returned non-JSON response: ${text.substring(0, 100)}`,
      );
    }
    const data: ApiResponse<T> = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Request failed");
    }
    return data.data as T;
  } catch (error: any) {
    if (
      error.name === "TypeError" ||
      error.message?.includes("fetch") ||
      error.message?.includes("Failed to fetch")
    ) {
      throw new Error("Stock service unavailable");
    }
    throw error;
  }
}

/** Admin/user management API types */
export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  createdAt: string;
  lastActive?: string | null;
}

export const usersApi = {
  list: async (): Promise<AdminUser[]> => {
    const token = localStorage.getItem("auth_token");
    const base =
      SERVER_BASE_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    const res = await fetch(`${base}/api/users`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Failed to load users");
    }
    return res.json() as Promise<AdminUser[]>;
  },
  create: async (payload: {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    status?: "active" | "inactive";
  }): Promise<AdminUser> => {
    const token = localStorage.getItem("auth_token");
    const base =
      SERVER_BASE_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    const res = await fetch(`${base}/api/users`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Failed to create user");
    }
    return res.json() as Promise<AdminUser>;
  },
  update: async (
    id: number,
    payload: Partial<{
      name: string;
      email: string;
      password: string;
      role: "admin" | "user";
      status: "active" | "inactive";
    }>,
  ): Promise<AdminUser> => {
    const token = localStorage.getItem("auth_token");
    const base =
      SERVER_BASE_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    const res = await fetch(`${base}/api/users/${id}`, {
      method: "PATCH",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Failed to update user");
    }
    return res.json() as Promise<AdminUser>;
  },
  delete: async (id: number): Promise<{ message: string }> => {
    const token = localStorage.getItem("auth_token");
    const base =
      SERVER_BASE_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    const res = await fetch(`${base}/api/users/${id}`, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Failed to delete user");
    }
    return res.json().catch(() => ({ message: "User deleted" })) as Promise<{
      message: string;
    }>;
  },
};

// // Home CMS API
// export const homeCmsApi = {
//   // Hero Slides
//   getSlides: () => apiRequest<any[]>('/api/cms/home/slides'),
//   createSlide: (slide: any) => apiRequest('/api/cms/home/slides', {
//     method: 'POST',
//     body: JSON.stringify(slide),
//   }),
//   updateSlide: (id: number, slide: any) => apiRequest(`/api/cms/home/slides/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(slide),
//   }),
//   deleteSlide: (id: number) => apiRequest(`/api/cms/home/slides/${id}`, {
//     method: 'DELETE',
//   }),
//   // Offerings (Business Section)
//   getOfferings: () => apiRequest<any[]>('/api/cms/home/offerings'),
//   createOffering: (offering: any) => apiRequest('/api/cms/home/offerings', {
//     method: 'POST',
//     body: JSON.stringify(offering),
//   }),
//   updateOffering: (id: number, offering: any) => apiRequest(`/api/cms/home/offerings/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(offering),
//   }),
//   deleteOffering: (id: number) => apiRequest(`/api/cms/home/offerings/${id}`, {
//     method: 'DELETE',
//   }),
//   // Statistics (At a Glance Section)
//   getStatistics: () => apiRequest<any[]>('/api/cms/home/statistics'),
//   createStatistic: (statistic: any) => apiRequest('/api/cms/home/statistics', {
//     method: 'POST',
//     body: JSON.stringify(statistic),
//   }),
//   updateStatistic: (id: number, statistic: any) => apiRequest(`/api/cms/home/statistics/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(statistic),
//   }),
//   deleteStatistic: (id: number) => apiRequest(`/api/cms/home/statistics/${id}`, {
//     method: 'DELETE',
//   }),
//   // Flip Cards
//   getFlipCards: () => apiRequest<any[]>('/api/cms/home/flip-cards'),
//   createFlipCard: (card: any) => apiRequest('/api/cms/home/flip-cards', {
//     method: 'POST',
//     body: JSON.stringify(card),
//   }),
//   updateFlipCard: (id: number, card: any) => apiRequest(`/api/cms/home/flip-cards/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(card),
//   }),
//   deleteFlipCard: (id: number) => apiRequest(`/api/cms/home/flip-cards/${id}`, {
//     method: 'DELETE',
//   }),
//   // News Items
//   getNewsItems: () => apiRequest<any[]>('/api/cms/home/news-items'),
//   createNewsItem: (item: any) => apiRequest('/api/cms/home/news-items', {
//     method: 'POST',
//     body: JSON.stringify(item),
//   }),
//   updateNewsItem: (id: number, item: any) => apiRequest(`/api/cms/home/news-items/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(item),
//   }),
//   deleteNewsItem: (id: number) => apiRequest(`/api/cms/home/news-items/${id}`, {
//     method: 'DELETE',
//   }),
//   // Awards
//   getAwards: () => apiRequest<any[]>('/api/cms/home/awards'),
//   createAward: (award: any) => apiRequest('/api/cms/home/awards', {
//     method: 'POST',
//     body: JSON.stringify(award),
//   }),
//   updateAward: (id: number, award: any) => apiRequest(`/api/cms/home/awards/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(award),
//   }),
//   deleteAward: (id: number) => apiRequest(`/api/cms/home/awards/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // About CMS API
// export const aboutCmsApi = {
//   // About Hero
//   getHero: () => apiRequest<any>('/api/cms/about/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/about/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // About Page Section
//   getAboutPageSection: () => apiRequest<any>('/api/cms/about/about-page-section'),
//   saveAboutPageSection: (section: any) => apiRequest('/api/cms/about/about-page-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Vision Mission
//   getVisionMission: () => apiRequest<any>('/api/cms/about/vision-mission'),
//   saveVisionMission: (vm: any) => apiRequest('/api/cms/about/vision-mission', {
//     method: 'PUT',
//     body: JSON.stringify(vm),
//   }),
//   // About Presence
//   getPresence: () => apiRequest<any>('/api/cms/about/presence'),
//   savePresence: (presence: any) => apiRequest('/api/cms/about/presence', {
//     method: 'PUT',
//     body: JSON.stringify(presence),
//   }),
//   // About Journey
//   getAboutJourney: () => apiRequest<any>('/api/cms/about/journey'),
//   saveAboutJourney: (journey: any) => apiRequest('/api/cms/about/journey', {
//     method: 'PUT',
//     body: JSON.stringify(journey),
//   }),
//   // Core Values
//   getValues: () => apiRequest<any[]>('/api/cms/about/values'),
//   createValue: (value: any) => apiRequest('/api/cms/about/values', {
//     method: 'POST',
//     body: JSON.stringify(value),
//   }),
//   updateValue: (id: number, value: any) => apiRequest(`/api/cms/about/values/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(value),
//   }),
//   deleteValue: (id: number) => apiRequest(`/api/cms/about/values/${id}`, {
//     method: 'DELETE',
//   }),
//   // Board Members (using LeadershipMember with category="Board Member")
//   getBoardMembers: () => apiRequest<any[]>('/api/cms/about/leadership').then((data: any[]) =>
//     (data || []).filter((item: any) => item.category === 'Board Member')
//   ),
//   createBoardMember: (member: any) => apiRequest('/api/cms/about/leadership', {
//     method: 'POST',
//     body: JSON.stringify({ ...member, category: 'Board Member' }),
//   }),
//   updateBoardMember: (id: number, member: any) => apiRequest(`/api/cms/about/leadership/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ ...member, category: 'Board Member' }),
//   }),
//   deleteBoardMember: (id: number) => apiRequest(`/api/cms/about/leadership/${id}`, {
//     method: 'DELETE',
//   }),
//   // Leadership Team (using LeadershipMember with category="Leadership Team")
//   getLeadershipTeam: () => apiRequest<any[]>('/api/cms/about/leadership').then((data: any[]) =>
//     (data || []).filter((item: any) => item.category === 'Leadership Team')
//   ),
//   createLeadershipMember: (member: any) => apiRequest('/api/cms/about/leadership', {
//     method: 'POST',
//     body: JSON.stringify({ ...member, category: 'Leadership Team' }),
//   }),
//   updateLeadershipMember: (id: number, member: any) => apiRequest(`/api/cms/about/leadership/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ ...member, category: 'Leadership Team' }),
//   }),
//   deleteLeadershipMember: (id: number) => apiRequest(`/api/cms/about/leadership/${id}`, {
//     method: 'DELETE',
//   }),
//   // About Sections (for home page about section)
//   getSections: () => apiRequest<any[]>('/api/cms/about/sections'),
//   createSection: (section: any) => apiRequest('/api/cms/about/sections', {
//     method: 'POST',
//     body: JSON.stringify(section),
//   }),
//   updateSection: (id: number, section: any) => apiRequest(`/api/cms/about/sections/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   deleteSection: (id: number) => apiRequest(`/api/cms/about/sections/${id}`, {
//     method: 'DELETE',
//   }),
//   // Sticky Nav Items
//   getStickyNavItems: () => apiRequest<any[]>('/api/cms/about/sticky-nav-items'),
//   createStickyNavItem: (item: any) => apiRequest('/api/cms/about/sticky-nav-items', {
//     method: 'POST',
//     body: JSON.stringify(item),
//   }),
//   updateStickyNavItem: (id: number, item: any) => apiRequest(`/api/cms/about/sticky-nav-items/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(item),
//   }),
//   deleteStickyNavItem: (id: number) => apiRequest(`/api/cms/about/sticky-nav-items/${id}`, {
//     method: 'DELETE',
//   }),
//   // Committees
//   getCommittees: () => apiRequest<any[]>('/api/cms/about/committees'),
//   createCommittee: (committee: any) => apiRequest('/api/cms/about/committees', {
//     method: 'POST',
//     body: JSON.stringify(committee),
//   }),
//   updateCommittee: (id: number, committee: any) => apiRequest(`/api/cms/about/committees/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(committee),
//   }),
//   deleteCommittee: (id: number) => apiRequest(`/api/cms/about/committees/${id}`, {
//     method: 'DELETE',
//   }),
//   // Get all about data
//   getAll: () => apiRequest('/api/cms/about'),
// };

// // Ash Utilization CMS API
// export const ashUtilizationCmsApi = {
//   // Hero
//   getHero: () => apiRequest<any>('/api/cms/ash-utilization/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/ash-utilization/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Who We Are
//   getWhoWeAre: () => apiRequest<any>('/api/cms/ash-utilization/who-we-are'),
//   saveWhoWeAre: (section: any) => apiRequest('/api/cms/ash-utilization/who-we-are', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Features (Why Choose Us)
//   getFeatures: () => apiRequest<any[]>('/api/cms/ash-utilization/features'),
//   createFeature: (feature: any) => apiRequest('/api/cms/ash-utilization/features', {
//     method: 'POST',
//     body: JSON.stringify(feature),
//   }),
//   updateFeature: (id: number, feature: any) => apiRequest(`/api/cms/ash-utilization/features/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(feature),
//   }),
//   deleteFeature: (id: number) => apiRequest(`/api/cms/ash-utilization/features/${id}`, {
//     method: 'DELETE',
//   }),
//   // Impacts (Our Impact)
//   getImpacts: () => apiRequest<any[]>('/api/cms/ash-utilization/impacts'),
//   createImpact: (impact: any) => apiRequest('/api/cms/ash-utilization/impacts', {
//     method: 'POST',
//     body: JSON.stringify(impact),
//   }),
//   updateImpact: (id: number, impact: any) => apiRequest(`/api/cms/ash-utilization/impacts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(impact),
//   }),
//   deleteImpact: (id: number) => apiRequest(`/api/cms/ash-utilization/impacts/${id}`, {
//     method: 'DELETE',
//   }),
//   // Services
//   getServices: () => apiRequest<any[]>('/api/cms/ash-utilization/services'),
//   createService: (service: any) => apiRequest('/api/cms/ash-utilization/services', {
//     method: 'POST',
//     body: JSON.stringify(service),
//   }),
//   updateService: (id: number, service: any) => apiRequest(`/api/cms/ash-utilization/services/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(service),
//   }),
//   deleteService: (id: number) => apiRequest(`/api/cms/ash-utilization/services/${id}`, {
//     method: 'DELETE',
//   }),
//   // Clients
//   getClients: () => apiRequest<any[]>('/api/cms/ash-utilization/clients'),
//   createClient: (client: any) => apiRequest('/api/cms/ash-utilization/clients', {
//     method: 'POST',
//     body: JSON.stringify(client),
//   }),
//   updateClient: (id: number, client: any) => apiRequest(`/api/cms/ash-utilization/clients/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(client),
//   }),
//   deleteClient: (id: number) => apiRequest(`/api/cms/ash-utilization/clients/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // Green Mobility CMS API
// export const greenMobilityCmsApi = {
//   // Hero
//   getHero: () => apiRequest<any>('/api/cms/green-mobility/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/green-mobility/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Who We Are
//   getWhoWeAre: () => apiRequest<any>('/api/cms/green-mobility/who-we-are'),
//   saveWhoWeAre: (section: any) => apiRequest('/api/cms/green-mobility/who-we-are', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Brand Values
//   getBrandValues: () => apiRequest<any[]>('/api/cms/green-mobility/brand-values'),
//   createBrandValue: (value: any) => apiRequest('/api/cms/green-mobility/brand-values', {
//     method: 'POST',
//     body: JSON.stringify(value),
//   }),
//   updateBrandValue: (id: number, value: any) => apiRequest(`/api/cms/green-mobility/brand-values/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(value),
//   }),
//   deleteBrandValue: (id: number) => apiRequest(`/api/cms/green-mobility/brand-values/${id}`, {
//     method: 'DELETE',
//   }),
//   // Why Choose Us
//   getWhyChooseUs: () => apiRequest<any[]>('/api/cms/green-mobility/why-choose-us'),
//   createWhyChooseUs: (feature: any) => apiRequest('/api/cms/green-mobility/why-choose-us', {
//     method: 'POST',
//     body: JSON.stringify(feature),
//   }),
//   updateWhyChooseUs: (id: number, feature: any) => apiRequest(`/api/cms/green-mobility/why-choose-us/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(feature),
//   }),
//   deleteWhyChooseUs: (id: number) => apiRequest(`/api/cms/green-mobility/why-choose-us/${id}`, {
//     method: 'DELETE',
//   }),
//   // Services
//   getServices: () => apiRequest<any[]>('/api/cms/green-mobility/services'),
//   createService: (service: any) => apiRequest('/api/cms/green-mobility/services', {
//     method: 'POST',
//     body: JSON.stringify(service),
//   }),
//   updateService: (id: number, service: any) => apiRequest(`/api/cms/green-mobility/services/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(service),
//   }),
//   deleteService: (id: number) => apiRequest(`/api/cms/green-mobility/services/${id}`, {
//     method: 'DELETE',
//   }),
//   // Impacts (Our Impact)
//   getImpacts: () => apiRequest<any[]>('/api/cms/green-mobility/impacts'),
//   createImpact: (impact: any) => apiRequest('/api/cms/green-mobility/impacts', {
//     method: 'POST',
//     body: JSON.stringify(impact),
//   }),
//   updateImpact: (id: number, impact: any) => apiRequest(`/api/cms/green-mobility/impacts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(impact),
//   }),
//   deleteImpact: (id: number) => apiRequest(`/api/cms/green-mobility/impacts/${id}`, {
//     method: 'DELETE',
//   }),
//   // Our Services
//   getOurServices: () => apiRequest<any[]>('/api/cms/green-mobility/our-services'),
//   createOurService: (service: any) => apiRequest('/api/cms/green-mobility/our-services', {
//     method: 'POST',
//     body: JSON.stringify(service),
//   }),
//   updateOurService: (id: number, service: any) => apiRequest(`/api/cms/green-mobility/our-services/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(service),
//   }),
//   deleteOurService: (id: number) => apiRequest(`/api/cms/green-mobility/our-services/${id}`, {
//     method: 'DELETE',
//   }),
//   // Clients
//   getClients: () => apiRequest<any[]>('/api/cms/green-mobility/clients'),
//   createClient: (client: any) => apiRequest('/api/cms/green-mobility/clients', {
//     method: 'POST',
//     body: JSON.stringify(client),
//   }),
//   updateClient: (id: number, client: any) => apiRequest(`/api/cms/green-mobility/clients/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(client),
//   }),
//   deleteClient: (id: number) => apiRequest(`/api/cms/green-mobility/clients/${id}`, {
//     method: 'DELETE',
//   }),
//   // Sustainability
//   getSustainability: () => apiRequest<any>('/api/cms/green-mobility/sustainability'),
//   saveSustainability: (sustainability: any) => apiRequest('/api/cms/green-mobility/sustainability', {
//     method: 'PUT',
//     body: JSON.stringify(sustainability),
//   }),
//   // Testimonials
//   getTestimonials: () => apiRequest<any[]>('/api/cms/green-mobility/testimonials'),
//   createTestimonial: (testimonial: any) => apiRequest('/api/cms/green-mobility/testimonials', {
//     method: 'POST',
//     body: JSON.stringify(testimonial),
//   }),
//   updateTestimonial: (id: number, testimonial: any) => apiRequest(`/api/cms/green-mobility/testimonials/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(testimonial),
//   }),
//   deleteTestimonial: (id: number) => apiRequest(`/api/cms/green-mobility/testimonials/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // VenwindRefex CMS API
// export const venwindRefexCmsApi = {
//   // Hero
//   getHero: () => apiRequest<any>('/api/cms/venwind-refex/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/venwind-refex/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Who We Are
//   getWhoWeAre: () => apiRequest<any>('/api/cms/venwind-refex/who-we-are'),
//   saveWhoWeAre: (section: any) => apiRequest('/api/cms/venwind-refex/who-we-are', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Why Choose Us
//   getWhyChooseUs: () => apiRequest<any[]>('/api/cms/venwind-refex/why-choose-us'),
//   createWhyChooseUs: (feature: any) => apiRequest('/api/cms/venwind-refex/why-choose-us', {
//     method: 'POST',
//     body: JSON.stringify(feature),
//   }),
//   updateWhyChooseUs: (id: number, feature: any) => apiRequest(`/api/cms/venwind-refex/why-choose-us/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(feature),
//   }),
//   deleteWhyChooseUs: (id: number) => apiRequest(`/api/cms/venwind-refex/why-choose-us/${id}`, {
//     method: 'DELETE',
//   }),
//   // Technical Specs
//   getTechnicalSpecs: () => apiRequest<any[]>('/api/cms/venwind-refex/technical-specs'),
//   createTechnicalSpec: (spec: any) => apiRequest('/api/cms/venwind-refex/technical-specs', {
//     method: 'POST',
//     body: JSON.stringify(spec),
//   }),
//   updateTechnicalSpec: (id: number, spec: any) => apiRequest(`/api/cms/venwind-refex/technical-specs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(spec),
//   }),
//   deleteTechnicalSpec: (id: number) => apiRequest(`/api/cms/venwind-refex/technical-specs/${id}`, {
//     method: 'DELETE',
//   }),
//   // Visit Website
//   getVisitWebsite: () => apiRequest<any>('/api/cms/venwind-refex/visit-website'),
//   saveVisitWebsite: (section: any) => apiRequest('/api/cms/venwind-refex/visit-website', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
// };

// // Refrigerant Gas CMS API
// export const refrigerantGasCmsApi = {
//   // Hero
//   getHero: () => apiRequest<any>('/api/cms/refrigerant-gas/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/refrigerant-gas/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Who We Are
//   getWhoWeAre: () => apiRequest<any>('/api/cms/refrigerant-gas/who-we-are'),
//   saveWhoWeAre: (section: any) => apiRequest('/api/cms/refrigerant-gas/who-we-are', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Why Choose Us
//   getWhyChooseUs: () => apiRequest<any[]>('/api/cms/refrigerant-gas/why-choose-us'),
//   createWhyChooseUs: (feature: any) => apiRequest('/api/cms/refrigerant-gas/why-choose-us', {
//     method: 'POST',
//     body: JSON.stringify(feature),
//   }),
//   updateWhyChooseUs: (id: number, feature: any) => apiRequest(`/api/cms/refrigerant-gas/why-choose-us/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(feature),
//   }),
//   deleteWhyChooseUs: (id: number) => apiRequest(`/api/cms/refrigerant-gas/why-choose-us/${id}`, {
//     method: 'DELETE',
//   }),
//   // Product Tabs
//   getProductTabs: () => apiRequest<any[]>('/api/cms/refrigerant-gas/product-tabs'),
//   createProductTab: (tab: any) => apiRequest('/api/cms/refrigerant-gas/product-tabs', {
//     method: 'POST',
//     body: JSON.stringify(tab),
//   }),
//   updateProductTab: (id: number, tab: any) => apiRequest(`/api/cms/refrigerant-gas/product-tabs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(tab),
//   }),
//   deleteProductTab: (id: number) => apiRequest(`/api/cms/refrigerant-gas/product-tabs/${id}`, {
//     method: 'DELETE',
//   }),
//   // Product Tab Points
//   getProductTabPoints: () => apiRequest<any[]>('/api/cms/refrigerant-gas/product-tab-points'),
//   createProductTabPoint: (point: any) => apiRequest('/api/cms/refrigerant-gas/product-tab-points', {
//     method: 'POST',
//     body: JSON.stringify(point),
//   }),
//   updateProductTabPoint: (id: number, point: any) => apiRequest(`/api/cms/refrigerant-gas/product-tab-points/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(point),
//   }),
//   deleteProductTabPoint: (id: number) => apiRequest(`/api/cms/refrigerant-gas/product-tab-points/${id}`, {
//     method: 'DELETE',
//   }),
//   // Our Impact
//   getImpacts: () => apiRequest<any[]>('/api/cms/refrigerant-gas/impacts'),
//   createImpact: (impact: any) => apiRequest('/api/cms/refrigerant-gas/impacts', {
//     method: 'POST',
//     body: JSON.stringify(impact),
//   }),
//   updateImpact: (id: number, impact: any) => apiRequest(`/api/cms/refrigerant-gas/impacts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(impact),
//   }),
//   deleteImpact: (id: number) => apiRequest(`/api/cms/refrigerant-gas/impacts/${id}`, {
//     method: 'DELETE',
//   }),
//   // Our Products
//   getProducts: () => apiRequest<any[]>('/api/cms/refrigerant-gas/products'),
//   createProduct: (product: any) => apiRequest('/api/cms/refrigerant-gas/products', {
//     method: 'POST',
//     body: JSON.stringify(product),
//   }),
//   updateProduct: (id: number, product: any) => apiRequest(`/api/cms/refrigerant-gas/products/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(product),
//   }),
//   deleteProduct: (id: number) => apiRequest(`/api/cms/refrigerant-gas/products/${id}`, {
//     method: 'DELETE',
//   }),
//   // Clients
//   getClients: () => apiRequest<any[]>('/api/cms/refrigerant-gas/clients'),
//   createClient: (client: any) => apiRequest('/api/cms/refrigerant-gas/clients', {
//     method: 'POST',
//     body: JSON.stringify(client),
//   }),
//   updateClient: (id: number, client: any) => apiRequest(`/api/cms/refrigerant-gas/clients/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(client),
//   }),
//   deleteClient: (id: number) => apiRequest(`/api/cms/refrigerant-gas/clients/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // ESG CMS API
// export const esgCmsApi = {
//   // Hero
//   getHero: () => apiRequest<any>('/api/cms/esg/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/esg/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Refex on ESG
//   getRefexOnEsg: () => apiRequest<any>('/api/cms/esg/refex-on-esg'),
//   saveRefexOnEsg: (section: any) => apiRequest('/api/cms/esg/refex-on-esg', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Sustainable Business
//   getSustainableBusiness: () => apiRequest<any>('/api/cms/esg/sustainable-business'),
//   saveSustainableBusiness: (section: any) => apiRequest('/api/cms/esg/sustainable-business', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Policies Section Header
//   getPoliciesSection: () => apiRequest<any>('/api/cms/esg/policies-section'),
//   savePoliciesSection: (section: any) => apiRequest('/api/cms/esg/policies-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Policies
//   getPolicies: () => apiRequest<any[]>('/api/cms/esg/policies'),
//   createPolicy: (policy: any) => apiRequest('/api/cms/esg/policies', {
//     method: 'POST',
//     body: JSON.stringify(policy),
//   }),
//   updatePolicy: (id: number, policy: any) => apiRequest(`/api/cms/esg/policies/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(policy),
//   }),
//   deletePolicy: (id: number) => apiRequest(`/api/cms/esg/policies/${id}`, {
//     method: 'DELETE',
//   }),
//   // Reports Section Header
//   getReportsSection: () => apiRequest<any>('/api/cms/esg/reports-section'),
//   saveReportsSection: (section: any) => apiRequest('/api/cms/esg/reports-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // Reports
//   getReports: () => apiRequest<any[]>('/api/cms/esg/reports'),
//   createReport: (report: any) => apiRequest('/api/cms/esg/reports', {
//     method: 'POST',
//     body: JSON.stringify(report),
//   }),
//   updateReport: (id: number, report: any) => apiRequest(`/api/cms/esg/reports/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(report),
//   }),
//   deleteReport: (id: number) => apiRequest(`/api/cms/esg/reports/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG Programs Section Header
//   getProgramsSection: () => apiRequest<any>('/api/cms/esg/programs-section'),
//   saveProgramsSection: (section: any) => apiRequest('/api/cms/esg/programs-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG Programs
//   getPrograms: () => apiRequest<any[]>('/api/cms/esg/programs'),
//   createProgram: (program: any) => apiRequest('/api/cms/esg/programs', {
//     method: 'POST',
//     body: JSON.stringify(program),
//   }),
//   updateProgram: (id: number, program: any) => apiRequest(`/api/cms/esg/programs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(program),
//   }),
//   deleteProgram: (id: number) => apiRequest(`/api/cms/esg/programs/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG SDG Section
//   getSdgSection: () => apiRequest<any>('/api/cms/esg/sdg-section'),
//   saveSdgSection: (section: any) => apiRequest('/api/cms/esg/sdg-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG UN SDG Actions Section Header
//   getUnsdgActionsSection: () => apiRequest<any>('/api/cms/esg/unsdg-actions-section'),
//   saveUnsdgActionsSection: (section: any) => apiRequest('/api/cms/esg/unsdg-actions-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG UN SDG Actions
//   getUnsdgActions: () => apiRequest<any[]>('/api/cms/esg/unsdg-actions'),
//   createUnsdgAction: (action: any) => apiRequest('/api/cms/esg/unsdg-actions', {
//     method: 'POST',
//     body: JSON.stringify(action),
//   }),
//   updateUnsdgAction: (id: number, action: any) => apiRequest(`/api/cms/esg/unsdg-actions/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(action),
//   }),
//   deleteUnsdgAction: (id: number) => apiRequest(`/api/cms/esg/unsdg-actions/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG Awards Section Header
//   getAwardsSection: () => apiRequest<any>('/api/cms/esg/awards-section'),
//   saveAwardsSection: (section: any) => apiRequest('/api/cms/esg/awards-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG Awards
//   getAwards: () => apiRequest<any[]>('/api/cms/esg/awards'),
//   createAward: (award: any) => apiRequest('/api/cms/esg/awards', {
//     method: 'POST',
//     body: JSON.stringify(award),
//   }),
//   updateAward: (id: number, award: any) => apiRequest(`/api/cms/esg/awards/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(award),
//   }),
//   deleteAward: (id: number) => apiRequest(`/api/cms/esg/awards/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG Collaboration Section Header
//   getCollaborationSection: () => apiRequest<any>('/api/cms/esg/collaboration-section'),
//   saveCollaborationSection: (section: any) => apiRequest('/api/cms/esg/collaboration-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG Main Collaboration
//   getMainCollaboration: () => apiRequest<any>('/api/cms/esg/main-collaboration'),
//   saveMainCollaboration: (collaboration: any) => apiRequest('/api/cms/esg/main-collaboration', {
//     method: 'PUT',
//     body: JSON.stringify(collaboration),
//   }),
//   // ESG Developmental Organizations Section Header
//   getDevelopmentalOrgsSection: () => apiRequest<any>('/api/cms/esg/developmental-orgs-section'),
//   saveDevelopmentalOrgsSection: (section: any) => apiRequest('/api/cms/esg/developmental-orgs-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG Developmental Organizations
//   getDevelopmentalOrgs: () => apiRequest<any[]>('/api/cms/esg/developmental-orgs'),
//   createDevelopmentalOrg: (org: any) => apiRequest('/api/cms/esg/developmental-orgs', {
//     method: 'POST',
//     body: JSON.stringify(org),
//   }),
//   updateDevelopmentalOrg: (id: number, org: any) => apiRequest(`/api/cms/esg/developmental-orgs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(org),
//   }),
//   deleteDevelopmentalOrg: (id: number) => apiRequest(`/api/cms/esg/developmental-orgs/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG Governance Section Header
//   getGovernanceSection: () => apiRequest<any>('/api/cms/esg/governance-section'),
//   saveGovernanceSection: (section: any) => apiRequest('/api/cms/esg/governance-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG Governance Items
//   getGovernanceItems: () => apiRequest<any[]>('/api/cms/esg/governance-items'),
//   createGovernanceItem: (item: any) => apiRequest('/api/cms/esg/governance-items', {
//     method: 'POST',
//     body: JSON.stringify(item),
//   }),
//   updateGovernanceItem: (id: number, item: any) => apiRequest(`/api/cms/esg/governance-items/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(item),
//   }),
//   deleteGovernanceItem: (id: number) => apiRequest(`/api/cms/esg/governance-items/${id}`, {
//     method: 'DELETE',
//   }),
//   // ESG HR Section Header
//   getHrSection: () => apiRequest<any>('/api/cms/esg/hr-section'),
//   saveHrSection: (section: any) => apiRequest('/api/cms/esg/hr-section', {
//     method: 'PUT',
//     body: JSON.stringify(section),
//   }),
//   // ESG HR Items
//   getHrItems: () => apiRequest<any[]>('/api/cms/esg/hr-items'),
//   createHrItem: (item: any) => apiRequest('/api/cms/esg/hr-items', {
//     method: 'POST',
//     body: JSON.stringify(item),
//   }),
//   updateHrItem: (id: number, item: any) => apiRequest(`/api/cms/esg/hr-items/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(item),
//   }),
//   deleteHrItem: (id: number) => apiRequest(`/api/cms/esg/hr-items/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // Newsroom CMS API
// export const newsroomCmsApi = {
//   getHero: () => apiRequest<any>('/api/cms/newsroom/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/newsroom/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Press Releases
//   getPressReleases: () => apiRequest<any[]>('/api/cms/newsroom/press-releases'),
//   createPressRelease: (release: any) => apiRequest('/api/cms/newsroom/press-releases', {
//     method: 'POST',
//     body: JSON.stringify(release),
//   }),
//   updatePressRelease: (id: number, release: any) => apiRequest(`/api/cms/newsroom/press-releases/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(release),
//   }),
//   deletePressRelease: (id: number) => apiRequest(`/api/cms/newsroom/press-releases/${id}`, {
//     method: 'DELETE',
//   }),
//   // Events
//   getEvents: () => apiRequest<any[]>('/api/cms/newsroom/events'),
//   createEvent: (event: any) => apiRequest('/api/cms/newsroom/events', {
//     method: 'POST',
//     body: JSON.stringify(event),
//   }),
//   updateEvent: (id: number, event: any) => apiRequest(`/api/cms/newsroom/events/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(event),
//   }),
//   deleteEvent: (id: number) => apiRequest(`/api/cms/newsroom/events/${id}`, {
//     method: 'DELETE',
//   }),
//   // Tabs
//   getTabs: () => apiRequest<any[]>('/api/cms/newsroom/tabs'),
//   createTab: (tab: any) => apiRequest('/api/cms/newsroom/tabs', {
//     method: 'POST',
//     body: JSON.stringify(tab),
//   }),
//   updateTab: (id: number, tab: any) => apiRequest(`/api/cms/newsroom/tabs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(tab),
//   }),
//   deleteTab: (id: number) => apiRequest(`/api/cms/newsroom/tabs/${id}`, {
//     method: 'DELETE',
//   }),
// };

// // Investors CMS API
// Investors CMS API — uses external Stock API base for stock/investors data from external services
export const investorsCmsApi = {
  getHero: () => stockApiRequest<any>("/api/cms/investors/hero"),
  saveHero: (hero: any) =>
    stockApiRequest("/api/cms/investors/hero", {
      method: "PUT",
      body: JSON.stringify(hero),
    }),
  getStockQuote: () => stockApiRequest<any>("/api/cms/investors/stock-quote"),
  saveStockQuote: (stockQuote: any) =>
    stockApiRequest("/api/cms/investors/stock-quote", {
      method: "PUT",
      body: JSON.stringify(stockQuote),
    }),
  getStockChart: () => stockApiRequest<any>("/api/cms/investors/stock-chart"),
  saveStockChart: (stockChart: any) =>
    stockApiRequest("/api/cms/investors/stock-chart", {
      method: "PUT",
      body: JSON.stringify(stockChart),
    }),
  getHistoricalStockQuote: () =>
    stockApiRequest<any>("/api/cms/investors/historical-stock-quote"),
  saveHistoricalStockQuote: (historicalStockQuote: any) =>
    stockApiRequest("/api/cms/investors/historical-stock-quote", {
      method: "PUT",
      body: JSON.stringify(historicalStockQuote),
    }),
  getRelatedLinksSection: () =>
    stockApiRequest<any>("/api/cms/investors/related-links/section"),
  saveRelatedLinksSection: (section: any) =>
    stockApiRequest("/api/cms/investors/related-links/section", {
      method: "PUT",
      body: JSON.stringify(section),
    }),
  getRelatedLinks: () =>
    stockApiRequest<any[]>("/api/cms/investors/related-links"),
  createRelatedLink: (link: any) =>
    stockApiRequest("/api/cms/investors/related-links", {
      method: "POST",
      body: JSON.stringify(link),
    }),
  updateRelatedLink: (id: number, link: any) =>
    stockApiRequest(`/api/cms/investors/related-links/${id}`, {
      method: "PUT",
      body: JSON.stringify(link),
    }),
  deleteRelatedLink: (id: number) =>
    stockApiRequest(`/api/cms/investors/related-links/${id}`, {
      method: "DELETE",
    }),
  getKeyPersonnel: () =>
    stockApiRequest<any[]>("/api/cms/investors/key-personnel"),
  createKeyPersonnel: (personnel: any) =>
    stockApiRequest("/api/cms/investors/key-personnel", {
      method: "POST",
      body: JSON.stringify(personnel),
    }),
  updateKeyPersonnel: (id: number, personnel: any) =>
    stockApiRequest(`/api/cms/investors/key-personnel/${id}`, {
      method: "PUT",
      body: JSON.stringify(personnel),
    }),
  deleteKeyPersonnel: (id: number) =>
    stockApiRequest(`/api/cms/investors/key-personnel/${id}`, {
      method: "DELETE",
    }),
  getAllPageContent: () =>
    stockApiRequest<any[]>("/api/cms/investors/page-content"),
  getPageContentBySlug: (slug: string) =>
    stockApiRequest<any>(`/api/cms/investors/page-content/slug/${slug}`),
  createPageContent: (pageContent: any) =>
    stockApiRequest("/api/cms/investors/page-content", {
      method: "POST",
      body: JSON.stringify(pageContent),
    }),
  updatePageContent: (id: number, pageContent: any) =>
    stockApiRequest(`/api/cms/investors/page-content/${id}`, {
      method: "PUT",
      body: JSON.stringify(pageContent),
    }),
  deletePageContent: (id: number) =>
    stockApiRequest(`/api/cms/investors/page-content/${id}`, {
      method: "DELETE",
    }),
  downloadAndSavePdf: (url: string, pageType: string) =>
    stockApiRequest("/api/cms/investors/download-pdf", {
      method: "POST",
      body: JSON.stringify({ url, pageType }),
    }),
};

// // Contact CMS API
// export const contactCmsApi = {
//   getHero: () => apiRequest<any>('/api/cms/contact/hero'),
//   saveHero: (hero: any) => apiRequest('/api/cms/contact/hero', {
//     method: 'PUT',
//     body: JSON.stringify(hero),
//   }),
//   // Office Addresses
//   getOfficeAddresses: () => apiRequest<any[]>('/api/cms/contact/office-addresses'),
//   createOfficeAddress: (address: any) => apiRequest('/api/cms/contact/office-addresses', {
//     method: 'POST',
//     body: JSON.stringify(address),
//   }),
//   updateOfficeAddress: (id: number, address: any) => apiRequest(`/api/cms/contact/office-addresses/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(address),
//   }),
//   deleteOfficeAddress: (id: number) => apiRequest(`/api/cms/contact/office-addresses/${id}`, {
//     method: 'DELETE',
//   }),
//   // Contact Form
//   getForm: () => apiRequest<any>('/api/cms/contact/form'),
//   saveForm: (form: any) => apiRequest('/api/cms/contact/form', {
//     method: 'PUT',
//     body: JSON.stringify(form),
//   }),
// };

// // Header CMS API
// export const headerCmsApi = {
//   get: () => apiRequest<any>('/api/cms/header'),
//   save: (header: any) => apiRequest('/api/cms/header', {
//     method: 'PUT',
//     body: JSON.stringify(header),
//   }),
// };

// // Footer CMS API
// export const footerCmsApi = {
//   get: () => apiRequest<any>('/api/cms/footer'),
//   save: (footer: any) => apiRequest('/api/cms/footer', {
//     method: 'PUT',
//     body: JSON.stringify(footer),
//   }),
// };

// Stock Price API — uses external API base URL for getting stock details from external services
export const stockApi = {
  getStockPrice: () => stockApiRequest<any>("/api/stock"),
  updateHeaderStockPrice: () =>
    stockApiRequest("/api/stock/update-header", {
      method: "POST",
    }),
  getStockPriceFromExternal: () =>
    stockApiRequest<any>("/api/stock/external", {
      method: "POST",
    }),
  getStockQuoteValue: (stockName: string) =>
    stockApiRequest<any>("/api/stock/quote-value", {
      method: "POST",
      body: JSON.stringify({ stock_name: stockName }),
    }),
  getStockChartData: (params: {
    action: string;
    stock_name: string;
    start_date?: string;
    end_date?: string;
    nonce?: string;
  }) => {
    const formData = new URLSearchParams();
    formData.append("action", params.action);
    formData.append("stock_name", params.stock_name);
    if (params.start_date) formData.append("start_date", params.start_date);
    if (params.end_date) formData.append("end_date", params.end_date);
    if (params.nonce) formData.append("nonce", params.nonce);

    return stockApiRequest<any>("/api/stock/chart-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
  },
  getIntradayChartData: (stockName: string, date?: string) =>
    stockApiRequest<any>("/api/stock/intraday-chart", {
      method: "POST",
      body: JSON.stringify({ stock_name: stockName, date: date || "" }),
    }),
  getChartByApi: (stockName: string, startDate?: string, endDate?: string) =>
    stockApiRequest<any>("/api/stock/chart-by-api", {
      method: "POST",
      body: JSON.stringify({
        stock_name: stockName,
        start_date: startDate || "",
        end_date: endDate || "",
      }),
    }),
  getHistoricalData: async (params: {
    page?: number;
    limit?: number;
    search?: string;
    startDate?: string;
    endDate?: string;
    exchange?: string;
  }) => {
    const queryParams = new URLSearchParams();
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    if (params.startDate) queryParams.append("start_date", params.startDate);
    if (params.endDate) queryParams.append("end_date", params.endDate);
    if (params.exchange) queryParams.append("exchange", params.exchange);

    const queryString = queryParams.toString();
    const url = `${EXTERNAL_STOCK_API_BASE_URL}/api/refexrenew-historical${queryString ? `?${queryString}` : ""}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Error fetching historical data:", error);
      throw error;
    }
  },
};

export default apiRequest;
