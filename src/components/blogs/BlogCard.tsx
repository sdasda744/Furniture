import { Post } from "@/types";
import { Link } from "react-router-dom";

interface PostProps {
  posts: Post[];
}

const BlogCard = ({ posts }: PostProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blogs/${post.id}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-4"
            />
          </Link>
          <div className="ml-3">
            <h2 className="mb-1.5 font-bold">{post.title}</h2>
            <div className="text-sm">
              <span>
                by <span className="font-semibold">{post.author} </span>
              </span>
              <span>
                on{" "}
                <span className="font-semibold">{post.updated_at}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
