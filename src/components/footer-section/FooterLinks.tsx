"use client";
import React, { useContext } from "react";
import notesContext from "@/context/notes/notesContext";
import Link from "next/link";

// Format section name: usefulLinks → Useful Links
const formatTitle = (text: string) => {
  return text
    .replace(/_/g, " ") // replace _ with space
    .replace(/([a-z])([A-Z])/g, "$1 $2") // add space between camelCase
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function FooterLinks() {
  const { footerLink } = useContext(notesContext);
  return (
    <>
      {footerLink?.map((section: any, i: number) =>
        Object.entries(section).map(
          ([sectionName, links]: any, index: number) => (
            <div
              key={`${i}-${index}`}
              className="col-lg-2 col-md-3 footer-links"
            >
              <h4>{formatTitle(sectionName)}</h4>
              <ul>
                {links?.map((item: any, itemIndex: number) => (
                  <li key={itemIndex}>
                    <Link href={item.linkUrl}>{item.linkName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        )
      )}
    </>
  );
}
