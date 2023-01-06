import React, { useEffect } from "react";
import { BiCopy } from "react-icons/bi";

export default function ColorCard({ palette }) {
  function copyColor() {
    navigator.clipboard.writeText(`rgb(${palette})`);
  }

  return (
    <li className="flex flex-1 h-full justify-center items-center" style={{ backgroundColor: `rgb(${palette})` }}>
      <button onClick={copyColor} className="hover:bg-gray-300 p-3 rounded-full">
        <BiCopy />
      </button>
    </li>
  );
}
