import React, { useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";

export default function ColorCard({ palette }) {
  function copyColor() {
    navigator.clipboard.writeText(`rgb(${palette})`);
  }
  function lockColor() {}
  return (
    <li className="flex justify-center items-center gap-5 md:flex-col" style={{ backgroundColor: `rgb(${palette})` }}>
      <button onClick={copyColor}>
        <BiCopy />
      </button>
      <button onClick={lockColor}>
        <BiLockOpenAlt />
      </button>
    </li>
  );
}
