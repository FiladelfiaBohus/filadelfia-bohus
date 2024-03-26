import { Lato, Montserrat, Oswald } from "next/font/google";
import "./globals.css";

import { Footer, Header } from "@/libs/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const fonts = [lato.variable, montserrat.variable, oswald.variable].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
