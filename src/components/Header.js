import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../redux/searchSlice";
const Header = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search.autocompleteResult);
  useEffect(() => {
    const getSuggestions = async () => {
      const data = await fetch(`${YOUTUBE_SEARCH_API}${searchText}`);
      const json = await data.json();
      dispatch(cacheResult({ [searchText]: json[1] }));
      setSuggestions(json[1]);
    };

    const timer = setTimeout(() => {
      if (cache.hasOwnProperty(searchText)) {
        // present in cache
        setSuggestions(cache[searchText]);
        // console.log(cache);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  const handleChange = async (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchItemClick = (item) => {
    console.log(item);
    setShowSuggestions(false);
    setSearchText(item);
  };

  return (
    <div className="grid grid-flow-col shadow-xl p-5 ">
      <div className="flex col-span-1">
        <img
          className="h-7 cursor-pointer"
          onClick={() => handleClick()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-7 ml-3 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </a>
      </div>
      <div className="col-span-10 h-8 ml-20">
        <div className=" flex text-center">
          <input
            type="text"
            className="w-[50%] border border-gray-400 pl-4 p-2 rounded-l-full text-black "
            onChange={handleChange}
            value={searchText}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <img
            className="border border-gray-400 w-10 p-2 rounded-r-full"
            src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
            alt="search"
          />
        </div>
        {/* TODO - change styles as it is causing issues */}
        <div
          className={
            showSuggestions == false
              ? "hidden"
              : "h-auto text-black w-[50%] px-2 m-2 z-100 sticky"
          }
        >
          {/* <div className="shadow-lg bg-red-50"> */}
          {suggestions.map((row) => (
            <div
              key={row}
              className="px-2 bg-white py-3 shadow-sm hover:bg-gray-100 selection:bg-gray-100"
              onClick={() => handleSearchItemClick(row)}

              // getSearchResultsPageList
            >
              {row}
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
      <div className="col-span-1 h-8 w-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
