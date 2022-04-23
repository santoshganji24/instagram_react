import React from "react";
import Navlinks from "./Navlinks";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="instagram-logo">
          <a href="#">
            <img
              className="logoimage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            />
          </a>
        </div>

        <div className="searchbox">
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search"
          />
          {/* <input className="search-input" type="text" name="search"/> */}
          <div class="button">
            <div>
              {/* <svg aria-label="Search" style="margin-right: 6px;" class="_8-yf5 " color="#8e8e8e" fill="#8E8E8E" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg> */}
              <svg
                aria-label="Search"
                class="_8-yf5 "
                color="#8e8e8e"
                fill="#8E8E8E"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            </div>
            {/* <div style="color: #8E8E8E;"> */}
            {/* <div className="inline-search">Search</div> */}
          </div>
        </div>
        <div className="navlinksdesktop">
          <Navlinks />
        </div>
      </header>
      <div className="nav-mob">
        <div>
          <svg
            aria-label="Back"
            transform="rotate(270)"
            class="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
          </svg>
        </div>
        <div className="nav-text">santoshrks</div>
      </div>
    </div>
  );
}
