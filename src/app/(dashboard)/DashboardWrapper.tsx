"use client";
import LeftMenu from "@/components/dashboard/left-menu/LeftMenu";
import { useState } from "react";
import NoteState from "@/context/notes/NoteState";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  return (
    <>
      <NoteState>
        <LeftMenu sidebarClosed={sidebarClosed} toggleSidebar={toggleSidebar} />
        <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu" onClick={toggleSidebar}></i>
          </div>
          {children}
        </section>
      </NoteState>
    </>
  );
}
