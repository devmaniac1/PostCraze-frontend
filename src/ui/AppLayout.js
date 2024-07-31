import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="applayout">
      {/* {isLoading && <Loader />} */}
      <Header />
      <div className="mainoutletContainer">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
