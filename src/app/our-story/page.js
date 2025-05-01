import React from 'react';
import About from "../../components/aboutus/aboutus"

export const metadata = {
    metadataBase: new URL("https://www.kashmirtrout.com/"),
    title: "About Kashmir Trout - J&K Largest Rainbow Trout Sellers",
    description: "We are J&K Largest Rainbow Trout Sellers and do deliver across Srinagar, Budgam, Pampore and Anantnag.",
    keywords: [" buy trout ","about Kashmir Trout", "J&K trout sellers", "rainbow trout suppliers", "fresh trout fish", "trout farming in Kashmir"],
    openGraph: {
        title: "About Kashmir Trout - J&K Largest Rainbow Trout Sellers",
        description: "We are J&K Largest Rainbow Trout Sellers and do deliver across Srinagar, Budgam, Pampore and Anantnag.",
      url: "https://www.kashmirtrout.com/our-story",
      siteName: "Kashmir Trout",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Kashmir Trout - J&K Largest Rainbow Trout Sellers",
      description: "We are J&K Largest Rainbow Trout Sellers and do deliver across Srinagar, Budgam, Pampore and Anantnag.",
    },
    icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
    alternates: { canonical: "https://www.kashmirtrout.com/our-story" },
};

const AboutPage = () => {
    return <About />;
};

export default AboutPage;
