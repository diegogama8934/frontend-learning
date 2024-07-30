import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const rubik = Barlow({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning FrontEnd",
  description: "Plataforma hecha por personas de Centro de Desarrollo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
