import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noahabela.com"),
  title: "Noah Abela | Kicker · Punter | Class of 2026",
  description:
    "Noah Abela — #33 Kicker Nationally (Kohl's), #4 Punter Nationally (Chris Sailer). 51-yard FG long, 81.6% touchback rate, 4.5 GPA. Dawson High School, Pearland, TX. Class of 2026.",
  openGraph: {
    title: "Noah Abela | Kicker · Punter | Class of 2026",
    description:
      "Noah Abela — #33 Kicker Nationally (Kohl's), #4 Punter Nationally (Chris Sailer). 51-yard FG long, 81.6% touchback rate, 4.5 GPA. Class of 2026.",
    url: "https://noahabela.com",
    siteName: "Noah Abela",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noah Abela — Kicker · Punter · Class of 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Abela | Kicker · Punter | Class of 2026",
    description:
      "Noah Abela — #33 Kicker Nationally (Kohl's), #4 Punter Nationally (Chris Sailer). 51-yard FG long, 81.6% touchback rate.",
    creator: "@Noah_Abela",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
