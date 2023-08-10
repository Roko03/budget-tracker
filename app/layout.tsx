import "./globals.scss";
import type { Metadata } from "next";
import { poppins } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Budget Tracker created in Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
