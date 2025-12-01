"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import notesContext from "@/context/notes/notesContext";

// Type definitions
type SubmenuItem = {
  label: string;
  path: string;
};

type MenuItem = {
  label: string;
  path: string;
  icon: string;
  adminOnly?: boolean;
  submenu?: SubmenuItem[];
};

type UserData = {
  username: string;
  isAdmin: boolean;
  // Add other user properties as needed
};

type NotesContextType = {
  menuItems: MenuItem[];
  // Add other context properties as needed
};

type SidebarProps = {
  sidebarClosed: boolean;
  toggleSidebar: () => void;
};

export default function LeftMenu({
  sidebarClosed,
  toggleSidebar,
}: SidebarProps) {
  const { menuItems } = useContext(notesContext) as NotesContextType;
  const router = useRouter();
  const pathname = usePathname(); // Get current path for active link
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const toggleSubmenu = (index: number) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  // Check if a link is active
  const isLinkActive = (path: string): boolean => {
    return pathname === path;
  };

  // Check if a submenu link is active
  const isSubmenuActive = (submenuItems: SubmenuItem[]): boolean => {
    return submenuItems.some(item => isLinkActive(item.path));
  };

  // Logout function
  const logout = async (): Promise<void> => {
    localStorage.setItem("login_toast_shown", "");
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
      toast.success("You are logged out");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    async function loadUser(): Promise<void> {
      try {
        const response = await axios.post<{ data: UserData }>("/api/users/me");
        setUserData(response.data.data);
      } catch (error) {
        console.log("Error loading user data:", error);
      }
    }
    loadUser();
  }, []);

  const capitalize = (str: string = ""): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
      {/* Logo */}
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">CodingLab</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        {menuItems.map((item: MenuItem, index: number) => {
          // Hide admin items for normal users
          if (item.adminOnly && !userData?.isAdmin) return null;

          // Check if this menu item or its submenu is active
          const isActive = item.submenu 
            ? isSubmenuActive(item.submenu) || isLinkActive(item.path)
            : isLinkActive(item.path);

          // Normal menu item
          if (!item.submenu) {
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Link href={item.path} className={isActive ? "active-link" : ""}>
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
              className={`${submenuOpen === index ? "showMenu" : ""} ${isActive ? "active" : ""}`}
            >
              <div className="iocn-link">
                <Link 
                  href={item.path} 
                  className={isLinkActive(item.path) ? "active-link" : ""}
                >
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
                  <Link 
                    className={`link_name ${isLinkActive(item.path) ? "active-link" : ""}`} 
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </li>

                {item.submenu.map((sub: SubmenuItem, i: number) => (
                  <li key={i} className={isLinkActive(sub.path) ? "active" : ""}>
                    <Link 
                      href={sub.path} 
                      className={isLinkActive(sub.path) ? "active-link" : ""}
                    >
                      {sub.label}
                    </Link>
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
                {capitalize(userData?.username)}
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