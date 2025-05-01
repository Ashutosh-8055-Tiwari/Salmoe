export async function generateMetadata({ params }) {
  const policyType = decodeURIComponent(params?.policy_type ?? "");

  const policyMap = {
    "returns-and-exchanges-policy": {
      title: "Returns & Exchanges Policy - Kashmir Trout",
      description:
        "Learn about Kashmir Trout’s returns and exchanges policy. Hassle-free returns and easy exchanges for fresh trout and seafood products.",
    },
    "shipping-policy": {
      title: "Shipping Policy - Kashmir Trout",
      description:
        "Get details on Kashmir Trout’s shipping policy, including delivery times, charges, and regions we serve across India.",
    },
    "cancellation-policy": {
      title: "Cancellation Policy - Kashmir Trout",
      description:
        "Understand Kashmir Trout’s cancellation policy, including order cancellation procedures, refund timelines, and terms.",
    },
    "privacy-policy": {
      title: "Privacy Policy - Kashmir Trout",
      description:
        "Read Kashmir Trout’s privacy policy to understand how we collect, use, and protect your personal information.",
    },
    default: {
      title: "Policy - Kashmir Trout",
      description:
        "Read our policies related to shipping, returns, exchanges, and privacy at Kashmir Trout.",
    },
  };

  const policyMeta = policyMap[policyType] || policyMap.default;

  return {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: policyMeta.title,
    description: policyMeta.description,
    keywords: [
      `Kashmir Trout ${policyType.replace(/-/g, " ")}`,
      "Kashmir Trout policies",
      "trout shipping policy",
      "returns and exchanges policy",
      "privacy and security policy",
      "cancellation and refund policy",
    ],
    openGraph: {
      title: policyMeta.title,
      description: policyMeta.description,
      url: `https://www.kashmirtrout.com/policy/${policyType}`,
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: policyMeta.title,
      description: policyMeta.description,
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: `https://www.kashmirtrout.com/policy/${policyType}` },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
