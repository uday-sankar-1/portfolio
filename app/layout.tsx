import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Sankar Obbu | Full Stack .NET Developer",
  description:
    "Full Stack .NET Developer with 3.5+ years of experience building scalable enterprise applications using C#, .NET Core, Angular and React.",
  keywords: [
    "Uday Sankar Obbu", "Full Stack Developer", ".NET Developer",
    "Angular Developer", "React Developer", "C# Developer",
    "Software Engineer", "Bengaluru",
  ],
  authors: [{ name: "Uday Sankar Obbu" }],
  creator: "Uday Sankar Obbu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udaysankarobbu.dev",
    title: "Uday Sankar Obbu | Full Stack .NET Developer",
    description:
      "Full Stack .NET Developer with 3.5+ years of experience building scalable enterprise applications using C#, .NET Core, Angular and React.",
    siteName: "Uday Sankar Obbu Portfolio",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Uday Sankar Obbu - Full Stack .NET Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Sankar Obbu | Full Stack .NET Developer",
    description: "Full Stack .NET Developer with 3.5+ years of experience building scalable enterprise applications.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
