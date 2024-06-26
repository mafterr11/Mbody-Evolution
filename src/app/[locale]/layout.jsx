import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  const messages = useMessages();
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-x-hidden bg-[#191919]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
