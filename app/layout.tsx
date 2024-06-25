import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayeedia's Curtain Gallery",
  description: "Welcome to Sayeedia's Curtain Gallery, your premier destination for exquisite and custom-made curtains that transform any space into a stylish and comfortable haven. At Sayeedia's, we pride ourselves on offering an extensive collection of high-quality curtains in a variety of fabrics, colors, and designs to suit every taste and decor style.",
  icons: 'https://img.icons8.com/?size=100&id=b9KfikRokEtF&format=png&color=000000'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
