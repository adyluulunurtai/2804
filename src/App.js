import React from "react";

import "./App.css";

import { Route } from "react-router-dom";
import StateExample from "./pages/StateExample/StateExample";
import ContextExample from "./pages/ContextExample/ContextExample";
import ReduxExample from "./pages/ReduxExample/ReduxExample";
import ReducerExample from "./pages/ReducerExample/ReducerExample";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={StateExample} />
      <Route path="/contextExample" component={ContextExample} />
      <Route path="/reduxExample" component={ReduxExample} />
      <Route path="/reducerExample" component={ReducerExample} />
    </div>
  );
}

export default App;
