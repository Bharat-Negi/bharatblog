import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", blogSchema);

export default BlogPost