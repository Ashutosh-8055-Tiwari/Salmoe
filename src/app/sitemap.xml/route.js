import { NextResponse } from "next/server";
import api from "../../app/api/api";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.kashmirtrout.com";

  try {
    // Static Pages (from your provided XML)
    const staticPages = [
      "",
      "cart",
      "about",
      "our-farmer",
      "recipes",
      "trout-basic",
      "contact",
      "faqs",
      "notification",
      "blog",
      "career",
      "wishlist",
      "profile",
      "categories",
      "products",
      "terms",
      "checkout",
      "policy/Privacy_Policy",
      "policy/ReturnsAndExchangesPolicy",
      "policy/Cancellation_Policy",
    ];

    // Fetch product data from API
    const categoryIds = ["1", "2", "3"];
    const response = await api.getProductbyFilter(34.0836708, 74.7972825, { category: categoryIds });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    if (!products || !products.data || products.data.length === 0) {
      throw new Error("No products found.");
    }

    // Generate XML Sitemap
    const lastmod = new Date().toISOString();
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Static Pages -->
  ${staticPages.map((page) => `
    <url>
      <loc>${siteUrl}/${page}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${page === "" ? "1.00" : "0.80"}</priority>
    </url>`).join("\n")}

  <!-- Product Pages -->
  ${products.data.map((product) => `
    <url>
      <loc>${siteUrl}/products/${product.slug}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>0.80</priority>
    </url>`).join("\n")}

</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

  } catch (error) {
    console.error("Error generating sitemap:", error.message);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
