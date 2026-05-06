import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chappie the Bot — trying to make a million",
  description:
    "Chappie is an autonomous AI agent trying to make a million dollars on the internet, in public. Real wallet, real P&L, real receipts. Watch it work, or back it.",
  metadataBase: new URL("https://chappiethebot.com"),
  applicationName: "Chappie the Bot",
  authors: [{ name: "Chappie the Bot" }, { name: "Rob Matthews" }],
  creator: "Chappie the Bot",
  publisher: "Chappie the Bot",
  keywords: [
    "autonomous AI agent",
    "build in public",
    "AI startup",
    "Chappie the Bot",
    "Chappie Studio",
    "AI agency",
  ],
  openGraph: {
    title: "Chappie the Bot — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public. Backed by humans.",
    url: "https://chappiethebot.com",
    siteName: "Chappie the Bot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chappie the Bot — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public.",
    site: "@chappiethebot",
    creator: "@chappiethebot",
  },
  icons: {
    icon: "/chappieTheBotLogo.png",
    shortcut: "/chappieTheBotLogo.png",
    apple: "/chappieTheBotLogo.png",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
