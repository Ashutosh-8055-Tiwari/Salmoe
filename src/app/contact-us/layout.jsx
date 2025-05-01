export const metadata = {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: "Contact Us - Kashmir Trout | Get in Touch",
    description: "Reach out to Kashmir Trout for inquiries, fresh trout orders, wholesale deals, or partnership opportunities. We are here to help!",
    keywords: [
      "contact Kashmir Trout", "Kashmir Trout customer service", "trout fish suppliers",
      "buy fresh trout online", "Kashmir Trout wholesale", "fresh trout sellers",
      "order trout online", "best trout fish in Kashmir", "Kashmir seafood suppliers"
    ],
    openGraph: {
      title: "Contact Us - Kashmir Trout | Get in Touch",
      description: "Reach out to Kashmir Trout for inquiries, fresh trout orders, wholesale deals, or partnership opportunities. We are here to help!",
      url: "https://www.kashmirtrout.com/contact-us",
      siteName: "Kashmir Trout",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us - Kashmir Trout | Get in Touch",
      description: "Reach out to Kashmir Trout for inquiries, fresh trout orders, wholesale deals, or partnership opportunities. We are here to help!",
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://www.kashmirtrout.com/contact-us",
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  