export const metadata = {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: "Find Your Nearest Outlet of Kashmir Trout",
    description: "We have outlets across J&K placed at Anantnag, Natipora, Rainawari, Soura, and Bemina.",
    keywords: [
      "buy trout online", "Kashmir trout outlets", "buy fresh trout", 
      "trout sellers in J&K", "nearest trout shop", "fresh rainbow trout locations", 
      "trout fish market"
    ],
    openGraph: {
      title: "Find Your Nearest Outlet of Kashmir Trout",
      description: "We have outlets across J&K placed at Anantnag, Natipora, Rainawari, Soura, and Bemina.",
      url: "https://www.kashmirtrout.com/nearest-outlet",
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Your Nearest Outlet of Kashmir Trout",
      description: "We have outlets across J&K placed at Anantnag, Natipora, Rainawari, Soura, and Bemina.",
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: "https://www.kashmirtrout.com/nearest-outlet" },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  