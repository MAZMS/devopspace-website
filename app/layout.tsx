import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "DevOpSpace is a cloud & DevOps consultancy. We plan, build, secure and run AWS and Azure so your team can focus on the product — managed services, DevOps automation and 24/7 support since 2008.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${company.domain}`),
  title: {
    default: "DevOpSpace — Cloud & DevOps, handled end to end",
    template: "%s · DevOpSpace",
  },
  description,
  keywords: [
    "DevOps",
    "AWS managed services",
    "Azure managed services",
    "cloud consulting",
    "Kubernetes",
    "cloud migration",
    "managed cloud",
    "Bangalore",
  ],
  authors: [{ name: "DevOpSpace" }],
  openGraph: {
    type: "website",
    url: `https://www.${company.domain}`,
    title: "DevOpSpace — Cloud & DevOps, handled end to end",
    description,
    siteName: "DevOpSpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOpSpace — Cloud & DevOps, handled end to end",
    description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-ink-950 text-slate-300 antialiased">{children}</body>
    </html>
  );
}
