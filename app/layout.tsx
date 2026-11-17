import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { hospital } from "@/data/site";
import "./globals.css";
import "./v2.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: hospital.name,
    template: `%s | ${hospital.name}`
  },
  description:
    "Explore doctors, departments and appointment enquiries at Dr. Surjit Singh Super Specialty Hospital in Landran, Mohali.",
  openGraph: {
    title: hospital.name,
    description:
      "Explore doctors, departments and appointment enquiries at Dr. Surjit Singh Super Specialty Hospital in Landran, Mohali.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: hospital.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: hospital.address,
                addressLocality: hospital.city,
                addressCountry: "IN"
              },
              telephone: hospital.phone,
              openingHours: "Mo-Su 00:00-24:00"
            })
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
