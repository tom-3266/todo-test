import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Route, Switch, Link } from "react-router-dom";
import { MainContext } from "../../Context/Context";
import Create from "../Create/Create";
import List from "../Lists/List";

import "./Main.scss";

const Main = () => {
  const history = useHistory();
  const { tabActive, setTabActive } = useContext(MainContext);

  useEffect(() => {
    if (tabActive === "") {
      setTabActive("list");
      history.push("/List");
    } else if (tabActive === "edit") {
      setTabActive("");
    }
  }, []);

  const handleClick = (value) => {
    setTabActive(value);
  };

  const navComponent = () => {
    return (
      <ul>
        <li>
          <div class="logo">Todo</div>
        </li>
        <li>
          <Link
            to="/Create"
            className={tabActive === "create" ? `active` : null}
            onClick={() => handleClick("create")}
          >
            Create
          </Link>
        </li>
        <li>
          <Link
            to="/List"
            className={tabActive === "list" ? `active` : null}
            onClick={() => handleClick("list")}
          >
            List
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div>
      {navComponent()}
      <Switch>
        <Route path={"/List"}>
          <List />
        </Route>
        <Route path={"/Create"}>
          <Create />{" "}
        </Route>
        <Route path={"/Update/:id"}>
          <Create type={"edit"} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
