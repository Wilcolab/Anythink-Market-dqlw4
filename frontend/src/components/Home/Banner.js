import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ search, setSearch }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" className="mw-100" />
        <h2>
          A place to get
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search-box"
            placeholder="What is it that you truly desire?"
            style={{ fontSize: "small" }}
          />
          the cool stuff.
        </h2>
      </div>
    </div>
  );
};

export default Banner;
