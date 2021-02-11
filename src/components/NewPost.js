import React, { useContext } from "react";
import axios from "axios";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import { ContextProvider } from "../context/Context";

const NewPost = () => {
  const {
    name,
    setName,
    setFlat,
    flat,
    prevUnit,
    setPrevUnit,
    currUnit,
    setCurrUnit,
    selectedDate,
    setSelectedDate,
    perUnitCost,
    setPerUnitCost
  } = useContext(ContextProvider);

  const addData = (e) => {
    e.preventDefault();
    axios.post("https://currentbill.herokuapp.com/add", {
      name: name,
      flat: flat,
      previousUnit: prevUnit,
      currentUnit: currUnit,
      perUnitCost: perUnitCost,
      selectedDate: selectedDate
    });

    alert("added");
  };

  return (
    <div className="section">
      <div className="formContainer">
        <form className="form" onSubmit={addData}>
          <h2>Add Data</h2>
          <TextField
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="inputField"
            label="Date"
            variant="outlined"
          />

          <TextField
            value={flat}
            onChange={(e) => setFlat(e.target.value)}
            className="inputField"
            label="Flat"
            variant="outlined"
          />
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputField"
            label="Name"
            variant="outlined"
          />

          <TextField
            value={currUnit}
            onChange={(e) => setCurrUnit(e.target.value)}
            className="inputField"
            type="number"
            label="Current Unit"
            variant="outlined"
          />
          <TextField
            value={prevUnit}
            onChange={(e) => setPrevUnit(e.target.value)}
            className="inputField"
            type="number"
            label="Previous Unit"
            variant="outlined"
          />
          <TextField
            value={perUnitCost}
            onChange={(e) => setPerUnitCost(e.target.value)}
            className="inputField"
            type="number"
            label="Per Unit Cost"
            variant="outlined"
          />

          <Button
            type="submit"
            className="inputField btn"
            variant="contained"
            color="primary"
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
