import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import rgbHex from "rgb-hex";

export default function PaletteListItem({ savedPaletteColor, setSavedColor, id }) {
  function removePaletteColor() {
    setSavedColor((prevState) => prevState.filter((item, index) => id !== index));
  }
  function copyPaletteColor() {
    const copiedPallette = savedPaletteColor.map((color) => {
      return "#" + rgbHex(`rgb(${color})`);
    });
    navigator.clipboard.writeText(copiedPallette);
    console.log(copiedPallette);
  }
  return (
    <li className="group flex relative">
      <div className="opacity-0 absolute flex justify-center items-center gap-10 w-full h-full top-0 left-0 z-20 bg-gray-300 transition-opacity group-hover:opacity-100 ">
        <button onClick={copyPaletteColor}>
          <BiCopy />
        </button>
        <button onClick={removePaletteColor}>
          <AiOutlineCloseCircle />
        </button>
      </div>
      {savedPaletteColor.map((color, index) => {
        return <div key={index} style={{ background: `rgb(${color})` }} className="w-10 h-10"></div>;
      })}
    </li>
  );
}
