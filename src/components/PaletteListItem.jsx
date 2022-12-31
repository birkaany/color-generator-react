import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PaletteListItem({ savedPaletteColor, setSavedColor, id }) {
  function removePaletteColor() {
    setSavedColor((prevState) => prevState.filter((item, index) => id !== index));
  }
  return (
    <li className="flex relative">
      {savedPaletteColor.map((color, index) => {
        return <div key={index} style={{ background: `rgb(${color})` }} className="w-10 h-10"></div>;
      })}
      <button onClick={removePaletteColor}>
        <AiOutlineCloseCircle />
      </button>
    </li>
  );
}
