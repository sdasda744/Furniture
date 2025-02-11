import { Post } from "@/types";
import { Link } from "react-router-dom";

interface BlogPostListProps {
  posts: Post[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 mt-4">
      {posts.map((post) => (
        <div className="">
          <Link to={`/blogs/${post.id}`}>
            <img
              src={post.image}
              alt={post.title}
              className="rounded-2xl w-full mb-4"
            />
          </Link>
          <div className="">
            <h2 className="font-extrabold text-base md:text-lg mb-1.5 line-clamp-1">
              {post.title}
            </h2>
            <div className="text-sm">
              <p className=" font-[400] mb-1">{post.content}</p>
              <span>
                by <span className="font-semibold ">{post.author} </span>
              </span>
              <span>
                on{" "}
                <span className="font-semibold ">{post.updated_at}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
