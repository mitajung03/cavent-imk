import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({display: "swap", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cavent",
  description: "Campus Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased w-full flex items-center justify-center`}
      >
        <div className="w-full max-w-[393px]">
          {children}
        </div>
      </body>
    </html>
  );
}
