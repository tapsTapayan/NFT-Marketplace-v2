import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 PAGE NOT FOUND</h1>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}

export default NotFound;
