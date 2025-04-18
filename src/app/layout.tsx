// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Script from "next/script"; // ✅ Import Script

export const metadata: Metadata = {
  title: "Practo Trade",
  description: "An ML based Stock prediction Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* ✅ Cloudflare Web Analytics Script */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ec707fbbd78c41ff8b1d2c32ae5c75e2"}'
          strategy="afterInteractive"
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <nav className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </nav>
            <main className="mt-21">{children}</main>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
