import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchlistItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

// Capitalized Component Name
const WatchlistItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown? (
            <KeyboardArrowDown className= "down"/>
          ):(
             <KeyboardArrowUp className= "up"/>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name}></WatchListActions>}
    </li>
  );
};

const WatchListActions = ({uid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip title ="Bye (B)"  placement="top" arrow TransitionComponent={Grow} >
          <button className="buy">Bye</button>
        </Tooltip>
        <Tooltip title ="Sell (S)"  placement="top" arrow TransitionComponent={Grow} >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title ="Analytics (A)"  placement="top" arrow TransitionComponent={Grow} >
          <button>
             <BarChartOutlined className="icon"></BarChartOutlined>
          </button>
        </Tooltip>
        <Tooltip title ="More"  placement="top" arrow TransitionComponent={Grow} >
           <button>
             <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}