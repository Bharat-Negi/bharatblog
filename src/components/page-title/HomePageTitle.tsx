import Link from "next/link";
import React from "react";

export default function HomePageTitle(props:any) {
  return (
    <div className="container section-title">
      <div className="section-title-container d-flex align-items-center justify-content-between">
        <h2>{props.heading}</h2>
        <p>
          <Link href={props.link}>See All Culture</Link>
        </p>
      </div>
    </div>
  );
}
