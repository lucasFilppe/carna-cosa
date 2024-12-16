import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavBar";
import ButtonFloating from "./components/ButtonFloating";
import Informacoes from "./informacoes/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Defina as metatags de SEO
export const metadata: Metadata = {
  title: "Carnaval em Ouro Preto - Festas Universitárias e Tradição",
  description:
    "Conheça o Carnaval de Ouro Preto, com festas universitárias, blocos tradicionais e uma rica experiência cultural em Minas Gerais.",
  keywords:
    "Carnaval Ouro Preto, festas universitárias, blocos tradicionais, Minas Gerais, cultura",
  openGraph: {
    url: "https://carnacosa.vercel.app/",
    title: "Carnaval em Ouro Preto - Festas Universitárias e Tradição",
    description:
      "Conheça o Carnaval de Ouro Preto, com festas universitárias, blocos tradicionais e uma rica experiência cultural em Minas Gerais.",
    siteName: "Carnacosa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <ButtonFloating />
        <main className="flex-grow py-10">{children}</main>
        <Analytics />
        <Informacoes />
      </body>
    </html>
  );
}
