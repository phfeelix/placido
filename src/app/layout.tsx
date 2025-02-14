import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./@components/Footer";
import Navbar from "./@components/Navbar";
import "./globals.css";

const getInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meio de Pagamento",
  description: "Aceite pagamentos online com segurança, rapidez e integração fácil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${getInter.className} antialiased`}
      >
        <Navbar />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
