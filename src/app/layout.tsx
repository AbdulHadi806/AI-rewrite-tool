import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reescrever Texto Online",
  description: "Reescrever texto online: parafraseie textos facilmente com nossa poderosa ferramenta online. Melhore a clareza, evite o plágio e aprimore sua escrita em segundos.",
};
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="L6EEyUaVoEQSM3H5YP_HpJ6AgtHD3Sokbd1UUapVNnE"
        />
        <meta name="msvalidate.01" content="0C52F45B47F168C069ECFAB2935AAE69" />
        <meta name="ahrefs-site-verification" content="4b3d38a75a1c25786780b995ec6e85dbd23112445e3f2fc40ce5f5ce8a7cda83"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
