import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ContextProvider } from "../context/Context";
import CardComponent from "./CardComponent";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const { allData } = useContext(ContextProvider);

  return (
    <div className="homeContainer">
      <div className="newBtnCon">
        <NavLink className="newBtn" to="/add">
          + New
        </NavLink>
      </div>
      <div className="searchContainer">
        <div className="inputContainer">
          <input
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="filter"
          />
          <SearchIcon className="icon" />
        </div>
      </div>
      <div className="cardContainer">
        {allData
          .filter((data) => {
            if (searchField === "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => {
            return <CardComponent data={data} key={data._id} />;
          })}
      </div>
    </div>
  );
};

export default Home;
