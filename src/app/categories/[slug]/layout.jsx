

export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params?.slug ?? ''); 

  return {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: `Kashmir Trout ${category} Products`,
    description: `Now its Hassel free, you can order your ${category} products from Kashmir Trout freshly made.`,
    keywords: [`buy ${category} online`, `best ${category}`, `fresh ${category} in J&K`],
    openGraph: {
        title: `Kashmir Trout ${category} Products`,
        description: `Now its Hassel free, you can order your ${category} products from Kashmir Trout freshly made.`,
      url: `https://www.kashmirtrout.com/categories/${category}`,
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Kashmir Trout ${category} Products`,
      description: `Now its Hassel free, you can order your ${category} products from Kashmir Trout freshly made.`,
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: `https://www.kashmirtrout.com/categories/${category}` },
  };
}

export default function Layout({ children, params }) {
  return <>{children}</>;
}