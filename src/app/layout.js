import Navbar from "@/components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarico = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Website AnimeList Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarico.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
