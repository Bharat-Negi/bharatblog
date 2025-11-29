"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const mobileMenuOpen = () => {
    setActive(!active);
    // Toggle class on body
    document.body.classList.toggle("mobile-nav-active");
  };

  return (
    <nav className="navmenu">
      <ul>
        <li>
          <Link href="/" className={`${pathname === "/" ? "active" : " "}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${pathname === "/about" ? "active" : " "}`}
          >
            About
          </Link>
        </li>
        {/* <li>
          <Link href="/blog" className={`${pathname === '/blog' ? 'active' : ' '}`}>Post Page</Link>
        </li> */}
        <li>
          <Link
            href="/category"
            className={`${pathname === "/category" ? "active" : " "}`}
          >
            Categories
          </Link>
        </li>
        {/* <li className="dropdown">
          <Link href="/category">
            <span>Categories</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </Link>
          <ul>
            <li>
              <Link href="/category">Category 1</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>Deep Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="/">Deep Dropdown 1</Link>
                </li>
                <li>
                  <Link href="/">Deep Dropdown 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
        <li>
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "active" : " "}`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className={`${pathname === "/contact" ? "active" : " "}`}
          >
            login
          </Link>
        </li>
      </ul>
      <i
        onClick={mobileMenuOpen}
        className={`mobile-nav-toggle d-xl-none bi ${active ? "bi-x" : "bi-list"}`}
        style={{ cursor: "pointer" }}
      ></i>
    </nav>
  );
}
