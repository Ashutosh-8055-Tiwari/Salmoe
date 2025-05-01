import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Trout Basics - Storage, Freshness & Cooking | Kashmir Trout",
  description: "Learn how to store, cook, and check the freshness of trout. Get expert tips on proper trout doneness and safe storage practices from Kashmir Trout.",
  keywords: [
    "Trout storage guide", "how to store trout", "fresh trout tips",
    "cooking trout temperature", "trout doneness guide", "trout freshness check",
    "best way to store trout", "order fresh trout online"
  ],
  openGraph: {
    title: "Trout Basics - Storage, Freshness & Cooking | Kashmir Trout",
    description: "Learn how to store, cook, and check the freshness of trout. Get expert tips on proper trout doneness and safe storage practices from Kashmir Trout.",
    url: "https://www.kashmirtrout.com/trout-basics",
    siteName: "Kashmir Trout",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trout Basics - Storage, Freshness & Cooking | Kashmir Trout",
    description: "Learn how to store, cook, and check the freshness of trout. Get expert tips on proper trout doneness and safe storage practices from Kashmir Trout.",
  },
 
  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/trout-basics" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
