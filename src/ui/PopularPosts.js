import { usePosts } from "../contexts/PostsContext";
import PopularPost from "./PopularPost";

export default function PopularPosts() {
  const { getPopularPosts } = usePosts();
  const popularPosts = getPopularPosts();
  return (
    <div className="hidden md:flex md:flex-col md:gap-4">
      <p className="font-semibold">Popular Posts</p>
      {popularPosts &&
        popularPosts.map((popularPost) => (
          <PopularPost popularPost={popularPost} key={popularPost._id} />
        ))}
    </div>
  );
}
