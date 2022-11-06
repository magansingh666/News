import React from "react";

export default function Select(props) {
  return (
    <div>
      <select class="form-select-sm mx-1 my-1 bg-dark text-white" 
      aria-label="Default select example" 
      onChange={(e) =>{props.handleCountryChange(e.target.value);} }>
        {props.options.map(e => <option value={e["value"]}>{e["name"]}</option>)}        
      </select>
    </div>
  );
}
