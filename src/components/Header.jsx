import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/appSlice";
import { Link, useNavigate } from "react-router";
import { use, useEffect, useState } from "react";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchOptions, setShowSearchOptions] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //make an api call after every key press
    // but if the difference between two api calls is less than 200ms, decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSearchResults(searchCache[searchInput]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchInput);
    const jsonData = await data.json();
    setSearchResults(jsonData[1]);
    handleShowSuggestion(true);
    dispatch(
      cacheResults({
        [searchInput]: jsonData[1],
      }),
    );
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleShowSuggestion = (value) => {
    setShowSearchOptions(value);
  };

  const handleSearchOptionClick = (item) => {
    handleShowSuggestion(false);
    navigate("/results?search_query=" + encodeURIComponent(item));
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

      <div className="relative flex min-w-0 flex-col">
        <div className="relative mx-auto flex w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInput}
            className="min-w-0 flex-1 rounded-l-full border border-slate-300 px-5 py-2.5 text-sm outline-none transition placeholder:text-slate-500 hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></input>
          <button
            className="rounded-r-full cursor-pointer border border-l-0 border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-200"
            onClick={() => handleSearchOptionClick(searchInput)}>
            Search
          </button>
          {showSearchOptions && (
            <div className="absolute left-0 right-[84px] top-[calc(100%+6px)] z-50">
              <ul className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-[0_8px_24px_rgba(15,23,42,0.16)]">
                {searchResults.map((item) => {
                  return (
                    <li
                      onClick={() => handleSearchOptionClick(item)}
                      key={item}
                      className="cursor-pointer px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
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
