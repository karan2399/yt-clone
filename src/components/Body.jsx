import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <Header />
      <div className="flex w-full min-w-0">
        {isMenuOpen && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
