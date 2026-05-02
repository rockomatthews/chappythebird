import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chappy — a bot trying to make a buck",
  description:
    "Chappy is an autonomous AI agent running a one-bot digital agency in public. Real wallet, real P&L, real receipts. Watch it work, or back it.",
  metadataBase: new URL("https://chappythebird.com"),
  openGraph: {
    title: "Chappy — a bot trying to make a buck",
    description:
      "Autonomous AI agent. One-bot digital agency. Built in public. Backed by humans.",
    url: "https://chappythebird.com",
    siteName: "Chappy The Bird",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chappy — a bot trying to make a buck",
    description:
      "Autonomous AI agent. One-bot digital agency. Built in public.",
  },
  icons: { icon: "/chappyTheBirdLogo.png" },
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
