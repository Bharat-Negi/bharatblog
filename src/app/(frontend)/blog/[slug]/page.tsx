"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import notesContext from "@/context/notes/notesContext";
import PageTitle from "@/components/page-title/PageTitle";
import BlogDetails from "@/components/blog-section/blog-details/BlogDetails";
import BlogComments from "@/components/blog-section/blog-comments/BlogComments";
import CommentForm from "@/components/blog-section/comment-form/CommentForm";
import { CategorySidebar } from "@/components/blog-section/category-sidebar/CategorySidebar";

export default function BlogSlugClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { blogList } = useContext(notesContext);

  // Log all available slugs for debugging
  const allSlugs = blogList.map((post: any) => ({
    title: post.postTitle,
    slug: post.blogUrl,
    url: post.blogUrl?.toLowerCase(),
  }));
  // console.log("All available slugs:", allSlugs);

  if (!slug) {
    return <div className="container py-5">Loading...</div>;
  }
  // console.log("Found link:", allSlugs.slug);

  const currentBlog = blogList.find(
    (post: any) => post?.blogUrl?.toLowerCase() === slug.toLowerCase()
  );
  // console.log("Found blog:", currentBlog);

  if (!currentBlog) {
    return (
      <div className="container py-5">
        <h2>Blog Not Found</h2>
        <p>
          Could not find blog with slug: <strong>{slug}</strong>
        </p>
      </div>
    );
  }

  function capitalizeFirstLetter(str:any) {
    if (str.length === 0) {
      return ""; // Handle empty strings
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <PageTitle title={capitalizeFirstLetter(slug)} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetails
              imageUrl={currentBlog.imgUrl}
              date={currentBlog.postDate}
              postTitle={currentBlog.postTitle}
              author={currentBlog.author}
              comments={currentBlog.comments}
            />
            <BlogComments
              comments={currentBlog.comments}
            />
            <CommentForm />
          </div>
          <div className="col-lg-4 sidebar">
            <CategorySidebar />
          </div>
        </div>
      </div>
    </>
  );
}