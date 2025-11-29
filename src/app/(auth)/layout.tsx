import type { Metadata } from "next";
import "../login.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Bharat Blog",
  description: "Blog Website",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <Toaster position="top-right" />   {/* 👈 required */}
      </body>
    </html>
  );
}
