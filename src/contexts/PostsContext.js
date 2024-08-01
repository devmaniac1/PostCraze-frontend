import React, { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  posts: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "getPosts":
      return { ...state, isLoading: true };
    case "loadPosts":
      return { ...state, posts: action.payload, isLoading: false };
    default:
      throw new Error("Action Type not defined");
  }
}

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [{ posts, isLoading }, dispatch] = useReducer(reducer, initialState);

  // const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      dispatch({ type: "getPosts" });
      const res = await fetch("https://postcraze.vercel.app/posts/getPosts");
      const data = await res.json();
      dispatch({ type: "loadPosts", payload: data });
    } catch (error) {
      console.err(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function updatePost() {
    await fetchPosts();
  }

  return (
    <PostsContext.Provider value={{ posts, updatePost, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
