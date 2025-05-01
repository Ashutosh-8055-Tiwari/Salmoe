export const metadata = {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: "Terms of Use - Kashmir Trout",
    description: "Read the Terms of Use for Kashmir Trout to understand the guidelines and policies for using our website and services.",
    keywords: [
      "Kashmir Trout terms of use", "trout fish policies", "terms and conditions",
      "trout sellers regulations", "buy trout online policies", "Kashmir Trout user agreement",
      "website usage rules", "customer terms for trout purchase"
    ],
    openGraph: {
      title: "Terms of Use - Kashmir Trout",
      description: "Read the Terms of Use for Kashmir Trout to understand the guidelines and policies for using our website and services.",
      url: "https://www.kashmirtrout.com/terms",
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms of Use - Kashmir Trout",
      description: "Read the Terms of Use for Kashmir Trout to understand the guidelines and policies for using our website and services.",
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: "https://www.kashmirtrout.com/terms" },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
