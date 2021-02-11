import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [allData, setAllData] = useState([]);

  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [flat, setFlat] = useState("");
  const [prevUnit, setPrevUnit] = useState(0);
  const [currUnit, setCurrUnit] = useState(0);
  const [perUnitCost, setPerUnitCost] = useState(0);

  useEffect(() => {
    axios
      .get("https://current-unit.herokuapp.com/")
      .then((res) => setAllData(res.data));
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        allData,

        name,
        setName,
        flat,
        selectedDate,
        setSelectedDate,
        setFlat,
        prevUnit,
        setPrevUnit,
        currUnit,
        setCurrUnit,
        perUnitCost,
        setPerUnitCost
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
