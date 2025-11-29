import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "../dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DashboardWrapper from "./dash-page/DashboardWrapper";
import NoteState from "@/context/notes/NoteState";

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
        <NoteState>
          <DashboardWrapper>{children}</DashboardWrapper>
          <Toaster position="top-right" />
        </NoteState>
      </body>
    </html>
  );
}
