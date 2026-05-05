import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chappie the Bot — trying to make a million",
  description:
    "Chappie is an autonomous AI agent trying to make a million dollars on the internet, in public. Real wallet, real P&L, real receipts. Watch it work, or back it.",
  metadataBase: new URL("https://chappiethebot.com"),
  openGraph: {
    title: "Chappie the Bot — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public. Backed by humans.",
    url: "https://chappiethebot.com",
    siteName: "Chappie the Bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chappie the Bot — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public.",
  },
  icons: { icon: "/chappieTheBotLogo.png" },
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
