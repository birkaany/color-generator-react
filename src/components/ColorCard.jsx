import React, { useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";

export default function ColorCard({ palette }) {
  function copyColor() {
    navigator.clipboard.writeText(`rgb(${palette})`);
  }
  function lockColor() {
    alert("henüz çalışmıyo :)");
  }
  return (
    <li className="flex justify-center items-center gap-5 md:flex-col" style={{ backgroundColor: `rgb(${palette})` }}>
      <button onClick={copyColor} className="hover:bg-gray-300 p-3 rounded-full">
        <BiCopy />
      </button>
      <button onClick={lockColor} className="hover:bg-gray-300 p-3 rounded-full">
        <BiLockOpenAlt />
      </button>
    </li>
  );
}
