import React from "react";
import BlogPagination from "@/components/blog-section/blog-pagination/BlogPagination";
import BlogPosts from "@/components/blog-section/blog-posts/BlogPosts";
import { CategorySidebar } from "@/components/blog-section/category-sidebar/CategorySidebar";
import FirstTitle from "@/components/page-title/FirstTitle";

export default function page() {
  return (
    <>
      <FirstTitle title="Category" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogPosts />
            <BlogPagination />
          </div>
          <div className="col-lg-4 sidebar">
            <CategorySidebar />
          </div>
        </div>
      </div>
    </>
  );
}
