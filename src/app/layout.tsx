import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar, Footer } from "@/components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BeBabyShop",
  description: "BeBabyShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
