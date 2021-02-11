import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { ContextProvider } from "../context/Context";

const CardComponent = ({ data }) => {
  const {
    _id,
    name,
    date,
    selectedDate,
    flat,
    previousUnit,
    currentUnit,
    perUnitCost
  } = data;

  const total = currentUnit - previousUnit;

  return (
    <div className="card">
      <NavLink to={`/edit/${_id}`}>
        <EditIcon className="edit" />
      </NavLink>
      <p className="date">{new Date(date).toDateString()}</p>
      <p>{selectedDate}</p>
      <p className="flat">{flat}</p>
      <p className="name">{name}</p>

      <div className="currUnit">
        <p>Current Unit</p>
        <p>{currentUnit}</p>
      </div>
      <div className="prevUnit">
        <p>Previous Unit</p>
        <p>{previousUnit}</p>
      </div>

      <hr />
      <div className="totalUnit">
        <p>Used Unit</p>
        <p>{total}</p>
      </div>
      <div className="selectOption">
        <p>Unit Cost</p>

        <p className="baseUnitCost">x{perUnitCost}</p>
      </div>
      <hr />
      <div className="totalCost">
        <p>Total Cost</p>
        <p>{total * perUnitCost}</p>
      </div>
    </div>
  );
};

export default CardComponent;
