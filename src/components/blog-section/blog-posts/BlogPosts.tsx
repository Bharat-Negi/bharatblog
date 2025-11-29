"use client"
import { useContext } from "react";
import BlogList from "./BlogList";
import notesContext from "@/context/notes/notesContext";

export default function BlogPosts() {
  const { blogList } = useContext(notesContext);
  
  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container">
        <div className="row gy-4">
          {blogList.map((post: any, index:number) => (
            <BlogList 
                key={index}
                date={post.postDate}
                imageUrl={post.imgUrl}
                postTitle={post.postTitle}
                authorName={post.author}
                newsField={post.newType}
                note={post.shortNote}
                blogUrl={`/blog/${post.blogUrl}`}
            />
          ))}          
        </div>
      </div>
    </section>
  );
}
