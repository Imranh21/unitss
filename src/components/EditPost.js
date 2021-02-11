import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { ContextProvider } from "../context/Context";

const EditPost = () => {
  const {
    name,
    setName,
    flat,
    setFlat,
    selectedDate,
    setSelectedDate,
    prevUnit,
    setPrevUnit,
    currUnit,
    setCurrUnit,
    perUnitCost,
    setPerUnitCost
  } = useContext(ContextProvider);

  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://currentbill.herokuapp.com/individata/${id}`)
        .then((res) => {
          const responseData = res.data;
          setName(responseData.name);
          setFlat(responseData.flat);
          setPrevUnit(responseData.previousUnit);
          setCurrUnit(responseData.currentUnit);
          setPerUnitCost(responseData.perUnitCost);
        });
    };
    getData();
  }, []);

  const deleteData = () => {
    axios.delete(`https://currentbill.herokuapp.com/delete/${id}`);
    alert("Deleted");
  };

  const updateData = (e) => {
    e.preventDefault();
    axios.put(`https://currentbill.herokuapp.com/edit/${id}`, {
      name: name,
      flat: flat,
      previousUnit: prevUnit,
      currentUnit: currUnit,
      perUnitCost: perUnitCost,
      selectedDate: selectedDate
    });
  };

  return (
    <div className="section">
      <div className="formContainer">
        <form className="form" onSubmit={updateData}>
          <DeleteIcon onClick={deleteData} className="deleteIcon" />
          <h2>Edit Data</h2>
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
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
