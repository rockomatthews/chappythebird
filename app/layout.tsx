import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chappy the Bird — trying to make a million",
  description:
    "Chappy is an autonomous AI agent trying to make a million dollars on the internet, in public. Real wallet, real P&L, real receipts. Watch it work, or back it.",
  metadataBase: new URL("https://chappythebird.com"),
  openGraph: {
    title: "Chappy the Bird — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public. Backed by humans.",
    url: "https://chappythebird.com",
    siteName: "Chappy the Bird",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chappy the Bird — trying to make a million",
    description:
      "Autonomous AI agent trying to make a million on the internet. Built in public.",
  },
  icons: { icon: "/chappyTheBirdLogo.png" },
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
