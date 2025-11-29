"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import notesContext from "@/context/notes/notesContext";

type SidebarProps = {
  sidebarClosed: boolean;
  toggleSidebar: () => void;
};

export default function LeftMenu({
  sidebarClosed,
  toggleSidebar,
}: SidebarProps) {
  const { menuItems } = useContext(notesContext);
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState(null); // which menu is open
  const [userData, setUserData] = useState<any>();

  const toggleSubmenu = (index: any) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  // this code for logout
  const logout = async () => {
    localStorage.setItem("login_toast_shown", "");
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
      toast.success("You are logout");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await axios.post("/api/users/me");
        setUserData(response.data.data); // store in state
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
  }, []); // runs only once when dashboard page loads

  return (
    <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
      {/* Logo */}
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">CodingLab</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        {menuItems.map((item:any, index:number) => {
          // Hide admin items for normal users
          if (item.adminOnly && !userData?.isAdmin) return null;

          // Normal menu item
          if (!item.submenu) {
            return (
              <li key={index}>
                <Link href={item.path}>
                  <i className={item.icon}></i>
                  <span className="link_name">{item.label}</span>
                </Link>
              </li>
            );
          }

          // Submenu item (POSTS)
          return (
            <li
              key={index}
              className={`${submenuOpen === index ? "showMenu" : ""}`}
            >
              <div className="iocn-link">
                <Link href={item.path}>
                  <i className={item.icon}></i>
                  <span className="link_name">{item.label}</span>
                </Link>

                <i
                  className="bx bxs-chevron-down arrow"
                  onClick={() => toggleSubmenu(index)}
                ></i>
              </div>

              {/* Submenu */}
              <ul className="sub-menu">
                <li>
                  <Link className="link_name" href="#">
                    {item.label}
                  </Link>
                </li>

                {item.submenu.map((sub:any, i:number) => (
                  <li key={i}>
                    <Link href={sub.path}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}

        {/* Profile Section */}
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src="/images/profile.jpg" alt="profileImg" />
            </div>

            <div className="name-job">
              <div className="profile_name">
                {userData?.username?.charAt(0).toUpperCase() +
                  userData?.username?.slice(1)}
              </div>

              <div className="job">
                {userData?.isAdmin ? "Admin" : "User"}
              </div>
            </div>

            <i onClick={logout} className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
