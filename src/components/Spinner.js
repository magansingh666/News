import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <img className="mx-auto d-block" src={loading} alt="loading" />
    </div>
  );
}
