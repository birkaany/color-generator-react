import React, { useEffect, useState } from "react";
import ColorCard from "./ColorCard";

export default function ColorPalette({ colorPalette }) {
  return (
    <ul className="grid grid-rows-5 grid-cols-none md:grid-rows-none md:grid-cols-5">
      {colorPalette.map((palette, index) => {
        return <ColorCard key={index} palette={palette} />;
      })}
    </ul>
  );
}
