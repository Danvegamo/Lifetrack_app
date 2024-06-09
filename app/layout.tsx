import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/Provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LifeTrack - Encuentra tu estilo de vida saludable en Bogotá",
  description:
    "Descubre cientos de actividades de bienestar para probar y nuevos productos de hábitos para llevar una vida saludable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <Providers>
          <Navbar />
          <main className="pb-16 md:pt-28 pt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
