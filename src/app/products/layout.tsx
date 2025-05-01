import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Shop Fresh Trout & Seafood - Kashmir Trout",
  description: "Explore our wide range of fresh trout and seafood products at Kashmir Trout. Order online for the best quality and taste in J&K.",
  keywords: [
    "buy trout online", "fresh trout in J&K", "best seafood products",
    "Kashmir trout suppliers", "trout fish market", "order fresh seafood",
    "premium trout fish", "trout sellers in Kashmir"
  ],
  openGraph: {
    title: "Shop Fresh Trout & Seafood - Kashmir Trout",
    description: "Explore our wide range of fresh trout and seafood products at Kashmir Trout. Order online for the best quality and taste in J&K.",
    url: "https://www.kashmirtrout.com/products",
    siteName: "Kashmir Trout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Fresh Trout & Seafood - Kashmir Trout",
    description: "Explore our wide range of fresh trout and seafood products at Kashmir Trout. Order online for the best quality and taste in J&K.",
  },
  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/products" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
