import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const routes = ["/", "/about", "/departments", "/doctors", "/gallery", "/testimonials", "/book-appointment", "/contact"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
