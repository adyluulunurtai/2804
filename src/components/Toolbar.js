import React from "react";
import Theme from "./Theme";
import User from "./User";
import Nav from "./Nav";

function Toolbar(props) {
  return (
    <nav>
      <Nav />
      <Theme />
      <User />
    </nav>
  );
}

export default Toolbar;
