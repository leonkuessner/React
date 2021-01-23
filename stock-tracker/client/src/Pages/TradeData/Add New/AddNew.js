import React, { useState } from "react";
import InputComponent from "../InputComponents/InputComponent";
import "./AddNew.css";

function AddNew() {
  const [addPosition, setAddPosition] = useState(false);
  return (
    <div>
      <div
        onClick={() => setAddPosition((prev) => !prev)}
        className="addNew__label"
      >
        Add New Position
      </div>
      {addPosition ? <InputComponent /> : null}
    </div>
  );
}

export default AddNew;
