import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orlandocv0107",
  description: "Portafolios Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>
        <Theme accentColor="violet" grayColor="olive" radius="small">
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
