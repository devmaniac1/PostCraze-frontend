import PostCard from "../ui/PostCard";
import Button from "../components/Button";
import { usePosts } from "../contexts/PostsContext";
import { useState } from "react";
import Search from "../components/Search";
import PopularPosts from "../ui/PopularPosts";

function Home() {
  const { posts } = usePosts();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    //   md:w-6/12
    <div className="w-9/12 md:w-full md:grid grid-cols-[1fr_2fr_1fr] my-6 mx-auto gap-x-3 px-4">
      <div className="hidden md:block"></div>
      <div>
        <Button to="/createPost">Create Post</Button>
        <div className="mt-4 flex flex-col gap-4">
          {filteredPosts
            .slice()
            .reverse()
            .map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
        </div>
      </div>
      <div className="relative  ">
        <div className="fixed flex-col gap-4 hidden md:flex">
          {posts.length!==0 && <><Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <PopularPosts /></>}
        </div>
      </div>
    </div>
  );
}

export default Home;
