const API_BACKEND = "https://tugboat-production.up.railway.app";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Proxy /api/* to the Railway backend
    if (url.pathname.startsWith("/api/")) {
      const backendUrl = `${API_BACKEND}${url.pathname}${url.search}`;
      const resp = await fetch(backendUrl, {
        method: request.method,
        headers: { "Content-Type": "application/json" },
      });
      const body = await resp.text();
      return new Response(body, {
        status: resp.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Everything else falls through to static assets
    return new Response(null, { status: 404 });
  },
};
