import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ search, setSearch }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" className="mw-100" />
        <h2>
          A place to{" "}
          <span id="get-part" onClick={() => setVisible((i) => !i)}>
            get
          </span>
          &nbsp;
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search-box"
            placeholder="What is it that you truly desire?"
            style={{ fontSize: "small", display: visible ? undefined : "none" }}
          />
          the cool stuff.
        </h2>
      </div>
    </div>
  );
};

export default Banner;
