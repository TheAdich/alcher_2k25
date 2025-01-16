"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import info from "./data";
import titledata from "./title";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    setInput(value);
    setSelectedCategory("");
    const filtered = info.filter(
      (item) =>
        item.tags.toLowerCase().includes(value.toLowerCase()) ||
        item.comp_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setInput("");
    const filtered = info.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(info);
  }, []);

  const selectRef = useRef(null);

  return (
    <div className="bgsett">
      <div className="search-bar">
        <div className="dropdown-wrapper">
          <select
            ref={selectRef}
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">
              <p>All Modules</p>
            </option>
            {titledata.map((title) => (
              <option
                key={title.id}
                value={title.category}
                className="optionsss"
              >
                {title.category}
              </option>
            ))}
          </select>
        </div>

        <div className="input-wrapper">
          <input
            placeholder="Type here to search"
            value={input}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="searchdiv">
            <img src="./searchIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="results">
        {filteredData.map((item) => (
          <div className="compCard">
            <div className="cardImg">
              <img src="./compCard.png" alt="" />
            </div>

            <div className="compTitle">{item.comp_name}</div>

            <div className="compDetails">
              <p>{item.type}</p>
              <p>{item.one_liner}</p>
            </div>

            {/* uncomment if needed venue, date, time */}

            {/* <div className="compVanueTime">
              <div className="compVanue">
                <div className="locIconComp">
                  <img src="./Location.png" alt="" />
                </div>
                <p> Main Auditorium</p>
              </div>
              <div className="compTime">
                <div className="timeIconComp">
                  <img src="./Time_light@2x.png" alt="" />
                </div>
                <p>14 Sept,</p>
                <p>4:30 pm</p>
              </div>
            </div> */}
            <div className="cardBtns">
              <div className="registerBtnComp">
                <Link href={item.url}>
                  <p>Register</p>
                </Link>
                <div className="mapCompIcon">
                  <img src="./External.png" alt="" />
                </div>
              </div>
              <div className="registerBtnComp">
                <p>Google Maps</p>
                <div className="mapCompIcon">
                  <img src="./Maps.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
