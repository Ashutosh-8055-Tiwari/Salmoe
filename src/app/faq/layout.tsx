export const metadata = {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: "FAQs - Kashmir Trout | Frequently Asked Questions",
    description: "Find answers to common questions about Kashmir Trout, fresh trout purchases, delivery, quality assurance, and more.",
    keywords: [
      "Kashmir Trout FAQs", "trout fish FAQs", "fresh trout delivery questions",
      "how to buy trout online", "Kashmir Trout shipping", "trout fish nutrition",
      "Kashmir Trout quality assurance", "trout storage tips", "best way to cook trout",
      "trout farming in Kashmir", "wholesale trout purchase"
    ],
    openGraph: {
      title: "FAQs - Kashmir Trout | Frequently Asked Questions",
      description: "Find answers to common questions about Kashmir Trout, fresh trout purchases, delivery, quality assurance, and more.",
      url: "https://www.kashmirtrout.com/faq",
      siteName: "Kashmir Trout",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQs - Kashmir Trout | Frequently Asked Questions",
      description: "Find answers to common questions about Kashmir Trout, fresh trout purchases, delivery, quality assurance, and more.",
      
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://www.kashmirtrout.com/faq",
    },
  };
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  