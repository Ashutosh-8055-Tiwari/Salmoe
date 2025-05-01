import RootLayout from "../components/Rootlayout"; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Best Rainbow Trout in Kashmir | Buy Fresh Trout Online",
  description: "Order the best fresh Rainbow Trout from Kashmir and get it delivered to your home.",
  keywords: ["buy trout online", "Kashmir trout", "fresh rainbow trout", "order trout fish"],
  openGraph: {
    title: "Best Rainbow Trout in Kashmir | Buy Fresh Trout Online",
    description: "Order the best fresh Rainbow Trout from Kashmir and get it delivered to your home.",
    url: "https://www.kashmirtrout.com/",
    siteName: "Kashmir Trout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Rainbow Trout in Kashmir | Buy Fresh Trout Online",
    description: "Order the best fresh Rainbow Trout from Kashmir and get it delivered to your home.",
    
  },

  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/" },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
         <ToastContainer key="toastContainer" bodyClassName={"toast-body"} className={"toastContainer"} toastClassName="toast-container-class" />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
