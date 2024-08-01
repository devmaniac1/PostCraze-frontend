import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="overflow-x-hidden overflow-y-scroll">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
