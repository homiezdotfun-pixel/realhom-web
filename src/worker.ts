const API_BACKEND = "https://tugboat-production.up.railway.app";
const ALLOWED_ORIGIN = "https://homiez.fun";
const MAX_API_PATHS = ["/api/stats", "/api/leaderboard"];

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // Proxy /api/* to the Railway backend
    if (url.pathname.startsWith("/api/")) {
      // Only allow known API paths
      if (!MAX_API_PATHS.includes(url.pathname)) {
        return new Response(JSON.stringify({ error: "Not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Only allow GET requests for read-only endpoints
      if (request.method !== "GET") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
          status: 405,
          headers: { "Content-Type": "application/json" },
        });
      }

      try {
        const backendUrl = `${API_BACKEND}${url.pathname}${url.search}`;
        const resp = await fetch(backendUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const contentType = resp.headers.get("Content-Type") || "application/json";
        const body = await resp.text();
        return new Response(body, {
          status: resp.status,
          headers: {
            "Content-Type": contentType,
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        });
      } catch {
        return new Response(JSON.stringify({ error: "Backend unavailable" }), {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          },
        });
      }
    }

    // Everything else falls through to static assets
    return new Response(null, { status: 404 });
  },
};
