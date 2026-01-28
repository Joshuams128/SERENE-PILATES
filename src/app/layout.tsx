import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import SkipToContent from "@/components/SkipToContent";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Serene Pilates | Transform Your Body & Mind",
    template: "%s | Serene Pilates"
  },
  description: "Your path to wellness and strength in Scarborough, Ontario. Experience transformative Pilates in a serene environment.",
  keywords: ["pilates", "fitness", "wellness", "yoga", "exercise", "health", "studio", "scarborough", "ontario"],
  authors: [{ name: "Serene Pilates" }],
  openGraph: {
    title: "Serene Pilates | Transform Your Body & Mind",
    description: "Your path to wellness and strength in Scarborough, Ontario.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '1650x1650', type: 'image/png' },
      { url: '/icon.png', sizes: '1650x1650', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for faster initial page load */}
        <link 
          rel="preload" 
          as="image" 
          href="/assets/images/reformer.png"
          // @ts-ignore
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/assets/images/yoga-meditation.png"
          // @ts-ignore
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/assets/images/yoga-chakra.png"
          // @ts-ignore
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <div className="min-h-screen flex flex-col bg-[#FEFAE0]">
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster 
          position="top-right" 
          richColors 
          expand={false}
          closeButton
        />
      </body>
    </html>
  );
}
