import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/Store/StoreProvider";

const cairo = Cairo({
  variable: "--cairo--sans",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "الرئيسية - زين التنموية",
  description: "للتجارة و المقاولات العامة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} antialiased text-4xl dark:bg-blackColor/10 relative overflow-x-hidden`}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
