"use client";
import LeftMenu from "@/components/dashboard/left-menu/LeftMenu";
import { useState } from "react";

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
      <LeftMenu sidebarClosed={sidebarClosed} toggleSidebar={toggleSidebar} />
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={toggleSidebar}></i>
        </div>
        {children}
      </section>
    </>
  );
}
