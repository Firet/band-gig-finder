import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/molecules/header/Header";
import Footer from "@/components/molecules/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gig",
  description: "Buscá recitales cerca tuyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="es">
			<body className={inter.className}>
				<Header />
				<main className="flex flex-col items-center">{children}</main>
				<Footer />
			</body>
		</html>
  );
}
