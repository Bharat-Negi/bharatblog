import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import "../dashboard.css";

export const metadata: Metadata = {
  title: "DashBoard Page",
  description: "Dash Board",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <Toaster position="top-right" />
        
      </body>
    </html>
  );
}
