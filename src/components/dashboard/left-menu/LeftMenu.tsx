import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type SidebarProps = {
  sidebarClosed: boolean;
  toggleSidebar: () => void;
};

export default function LeftMenu({sidebarClosed, toggleSidebar}: SidebarProps) {
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

  // user per first word Capitalize
  const capitalize = (str?: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">CodingLab</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
        </li>
        {userData?.isAdmin ? (
          <li>
            <a href="#">
              <i className="bx bx-collection"></i>
              <span className="link_name">Users</span>
            </a>
          </li>
        ) : (
          ""
        )}
        <li className={`${submenuOpen === 1 ? "showMenu" : ""}`}>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="link_name">Posts</span>
            </a>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={() => toggleSubmenu(1)}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Posts
              </a>
            </li>
            <li>
              <a href="#">News Post</a>
            </li>
            <li>
              <a href="#">New Post</a>
            </li>
            <li>
              <a href="#">Old Post</a>
            </li>
          </ul>
        </li>

        {/* profile section */}
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src="/images/profile.jpg" alt="profileImg" />
            </div>
            <div className="name-job">
              <div className="profile_name">
                {capitalize(userData?.username)}
              </div>
              <div className="job">{userData?.isAdmin ? "Admin" : "User"}</div>
            </div>
            <i onClick={logout} className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
