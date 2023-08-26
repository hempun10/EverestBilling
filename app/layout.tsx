import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Maven_Pro } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Maven_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--text-font",
});

export const metadata: Metadata = {
  title: "Everest Billing System",
  description: "Your CRM for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
