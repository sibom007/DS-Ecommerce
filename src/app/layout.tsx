import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "@/providers/Providers";

export const metadata: Metadata = {
  title: "DS Ecommerce ",
  description: "Comming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
