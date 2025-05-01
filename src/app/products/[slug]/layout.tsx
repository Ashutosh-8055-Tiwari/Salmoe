
export async function generateMetadata({ params }) {
  const product = decodeURIComponent(params?.slug ?? '');

  return {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: `Buy ${product} Online - Kashmir Trout`,
    description: `Get the best quality ${product} delivered fresh from Kashmir Trout. Order now and enjoy premium seafood in J&K.`,
    keywords: [
      `buy ${product} online`, `fresh ${product} in J&K`, `best ${product} price`,
      `${product} suppliers`, `order ${product} from Kashmir Trout`, `premium ${product} seafood`
    ],
    openGraph: {
      title: `Buy ${product} Online - Kashmir Trout`,
      description: `Get the best quality ${product} delivered fresh from Kashmir Trout. Order now and enjoy premium seafood in J&K.`,
      url: `https://www.kashmirtrout.com/products/${product}`,
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Buy ${product} Online - Kashmir Trout`,
      description: `Get the best quality ${product} delivered fresh from Kashmir Trout. Order now and enjoy premium seafood in J&K.`,
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: `https://www.kashmirtrout.com/products/${product}` },
  };
}

export default function Layout({ children, params }) {
  return <>{children}</>;
}