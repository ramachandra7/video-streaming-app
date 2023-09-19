import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isHamBurgerOpen=useSelector((store)=>store.app.isToggleOpen);
  if(isHamBurgerOpen===false)return null;

  return (
    <div className="w-40 shadow-lg">
      <div className="p-5">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <hr />

      <div className="p-5">
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Watch Later</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <hr />

      <div className="p-5">
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
