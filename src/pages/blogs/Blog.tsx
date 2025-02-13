import BlogPostList from "@/components/blogs/BlogPostList";
import { posts } from "@/data/posts";
import Container from '@/components/layouts/Container';

const Blog = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl text-center md:text-left font-bold">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={posts} />
    </>
  );
};

export default Blog;
