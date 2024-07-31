import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as PostLoader } from "./pages/Home";

import AppLayout from "./ui/AppLayout";

import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: PostLoader,
      },

      {
        path: "/createPost",
        element: <CreatePost />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
