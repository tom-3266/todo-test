import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

const MainProvider = (props) => {

  const [todoList, setTodoList] = useState([]);
  const [tabActive, setTabActive] = useState("");


  return (
    <MainContext.Provider
      value={{ todoList, setTodoList, tabActive, setTabActive }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
