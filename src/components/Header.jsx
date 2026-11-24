import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/appSlice";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="sticky top-0 z-50 mx-2 mb-2 grid grid-flow-col grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K0sTVi2CEdoSSdU_ircZXLBD2QvdoUQzpUO-7yZ7ug&s=10"
          alt="Hamburger Logo"
        />

        <Link to="/" aria-label="Go to home" className="flex items-center">
          <img
            className="mx-2 h-8"
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/960px-YouTube_Logo_2017.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230929095411"
            alt="YT Logo"
          />
        </Link>
      </div>

      <div className="flex min-w-0 justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 min-w-0 rounded-l-full border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></input>
        <button className="rounded-r-full border border-slate-300 bg-slate-100 px-4 py-2 font-medium transition hover:bg-slate-200">
          Search
        </button>
      </div>

      <div className="flex justify-end">
        <img
          className="h-8 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEuVX1VtOECyLb-tpACXqDGz6HY-UJC8FtR06KlhzFA&s=10"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;
