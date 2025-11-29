import Link from "next/link";
import React from "react";

export default function BlogList(props: any) {
  return (
    <div className="col-lg-6">
      <article className="position-relative h-100">
        <div className="post-img position-relative overflow-hidden">
          <img src={props.imageUrl} className="img-fluid" alt="" />
          <span className="post-date">{props.date}</span>
        </div>
        <div className="post-content d-flex flex-column">
          <h3 className="post-title">
            {props.postTitle}
          </h3>
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person"></i>
              <span className="ps-2">{props.authorName}</span>
            </div>
            <span className="px-3 text-black-50">/</span>
            <div className="d-flex align-items-center">
              <i className="bi bi-folder2"></i>
              <span className="ps-2">{props.newsField}</span>
            </div>
          </div>
          <p>
            {props.note}
          </p>
          <hr />
          <Link href={props.blogUrl} className="readmore stretched-link">
            <span>Read More</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </article>
    </div>
  );
}
