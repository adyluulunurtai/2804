import React from "react";
import { NavLink } from "react-router-dom";
import ReduxExample from "../pages/ReduxExample/ReduxExample";
import ReducerExample from "../pages/ReducerExample/ReducerExample";
import ContextExample from "../pages/ContextExample/ContextExample";

function NAv(props) {
  return (
    <ul>
      <li>
        <NavLink to="/" exact>
          State Example
        </NavLink>
      </li>
      <li>
        <NavLink to="/reduxExample" component={ReduxExample}>
          Redux Example
        </NavLink>
      </li>
      <li>
        <NavLink to="/reducerExample" component={ReducerExample}>
          Reducer Example
        </NavLink>
      </li>
      <li>
        <NavLink to="/contextExample" component={ContextExample}>
          Context Example
        </NavLink>
      </li>
    </ul>
  );
}

export default NAv;
