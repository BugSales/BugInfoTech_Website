import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bug Infotech | B2B Technology & Digital Solutions Partner",
  description: "Bug Infotech builds premium digital solutions for businesses. We are your one technology partner for Website Development, Web Apps, Mobile Apps, Custom Software, Ecommerce, Cloud, and Cybersecurity.",
  keywords: [
    "website development",
    "web applications",
    "mobile applications",
    "custom software",
    "ecommerce solutions",
    "cloud services",
    "IT support",
    "cybersecurity",
    "digital marketing",
    "B2B technology solutions"
  ],
  authors: [{ name: "Bug Infotech" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
