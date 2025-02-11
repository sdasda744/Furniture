import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/Icon";
import { posts } from "@/data/posts";
import RichTextRender from "@/components/RichTextRender";

const BlogDetail = () => {
  const { postId } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, [postId]);
  const post = posts.find((post) => post.id === postId);
  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:gap-16 lg:flex-row justify-between">
        <section className="w-3/4">
          <Button variant="outline" asChild>
            <Link to="/blogs">
              <Icons.arrowLeft /> All Posts
            </Link>
          </Button>
          {post ? (
            <div className="mt-20">
              <h2 className="font-extrabold text-lg md:text-2xl lg:text-3xl mb-1.5">
                {post.title}
              </h2>
              <div className="text-sm">
                <span>
                  by <span className="font-semibold ">{post.author} </span>
                </span>
                <span>
                  on <span className="font-semibold ">{post.updated_at}</span>
                </span>
                <p className=" font-[400] my-6 text-base">{post.content}</p>
              </div>
              <img src={post.image} alt="" className="w-full rounded-xl" />
              <RichTextRender content={post.body} className="py-8" />
              <div className="flex items-center gap-4">
                {post.tags.map((tag) => (
                  <Button variant="outline">{tag}</Button>
                ))}
              </div>
            </div>
          ) : (
            <p className=" md:ml-[650px] mb-16 mt-24 justify-self-center text-center font-bold text-xl ">
              Post not found
            </p>
          )}
        </section>
        <section className="w-full lg:w-1/4 mt-16 lg:mt-32">
          <div className="flex items-center gap-2 mb-8">
            <Icons.layerIcons />
            <h2>Other Blog Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link to={`/blogs/${post.id}`} key={post.id}>
                <div className="flex gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-1/4 rounded-lg mb-6"
                  />

                  <div className="space-y-2">
                    <div className="line-clamp-2 text-sm">{post.content}</div>
                    <div className="text-xs">
                      ... <i>see more</i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default BlogDetail;
