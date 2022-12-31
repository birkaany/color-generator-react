import React from "react";
import PaletteListItem from "./PaletteListItem";

export default function PaletteList({ savedPalette, setSavedColor }) {
  return (
    <ul className="flex flex-col gap-2">
      {savedPalette.map((color, index) => {
        return <PaletteListItem id={index} key={index} savedPaletteColor={color} setSavedColor={setSavedColor} />;
      })}
    </ul>
  );
}
