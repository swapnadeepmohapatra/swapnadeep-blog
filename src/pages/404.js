import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <>
    <h1 style={{ color: "#ffffff" }}>Hmmm... can't seem to find that page.</h1>
    <Link to="/" style={{ color: "#c1c1c1" }}>
      Take me home
    </Link>
  </>
);

export default NoMatch;
