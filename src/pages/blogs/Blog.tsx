import BlogPostList from "@/components/blogs/BlogPostList";
import { posts } from "@/data/posts";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl md:text-2xl text-center md:text-left font-bold">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default Blog;
