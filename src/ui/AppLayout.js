import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "./../components/Loader";
import { usePosts } from "../contexts/PostsContext";
import Main from "./Main";

function AppLayout() {
  const { isLoading } = usePosts();
  return (
    <div className="h-screen relative grid grid-rows-[auto_1fr_auto] bg-slate-100">
      <Header />
      {isLoading && <Loader />}
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
