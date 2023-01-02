import { useState, useEffect } from "react";

import ColorPalette from "./components/ColorPalette";
import PaletteList from "./components/PaletteList";
import "./App.css";

function App() {
  const [colorPalette, setColorPalette] = useState([]);
  const [savedColor, setSavedColor] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({
        model: "default",
      }),
    });
    const data = await res.json();

    setColorPalette(data.result);
  };

  function handleSavePalette() {
    setSavedColor((prevState) => {
      if (!prevState.includes(colorPalette)) {
        return [...prevState, colorPalette];
      } else {
        return [...prevState];
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App grid-rows-[70%_30%] grid-cols-none md:grid-cols-[70%_30%] md:grid-rows-none grid h-screen">
      <ColorPalette colorPalette={colorPalette} />
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div id="panel" className="flex flex-row md:flex-col gap-10">
          <div className="buttons flex gap-5">
            <button onClick={() => fetchData()} className="w-32 border-2 border-gray-600 rounded-md px-6 py-3 hover:bg-gray-600 hover:text-white transition-all">
              Generate
            </button>
            <button onClick={handleSavePalette} className="w-32 border-2 border-gray-600 rounded-md px-6 py-3 hover:bg-gray-600 hover:text-white transition-all">
              Save
            </button>
          </div>
          <PaletteList savedPalette={savedColor} setSavedColor={setSavedColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
