import PostCard from "../ui/PostCard";
import Button from "../components/Button";
import { usePosts } from "../contexts/PostsContext";

function Home() {
  const { posts } = usePosts();

  return (
    <div className="w-9/12 my-6 mx-auto md:w-6/12">
      <Button to="/createPost">Create Post</Button>
      <div className="mt-4 flex flex-col gap-4">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
