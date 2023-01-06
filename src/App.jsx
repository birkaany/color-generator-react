import { useState, useEffect } from "react";

import ColorPalette from "./components/ColorPalette";
import PaletteList from "./components/PaletteList";
import "./App.css";

function App() {
  const [colorPalette, setColorPalette] = useState([]);
  const [savedColor, setSavedColor] = useState(() => JSON.parse(localStorage.getItem("Saved Palettes")) || []);

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

  useEffect(() => {
    localStorage.setItem("Saved Palettes", JSON.stringify(savedColor));
  }, [savedColor]);

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
    <div className="App bg-black flex flex-col h-screen">
      <header className="h-32 px-6 flex items-center container mx-auto">
        <div className="flex w-full flex-col justify-between logo text-3xl font-bold font-logoFont text-white">
          Color Generator
          <span className="text-sm font-sans font-normal uppercase text-gray-400">Just generate and save</span>
        </div>
        <div className="buttons flex">
          <button
            onClick={() => fetchData()}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Generate</span>
          </button>
          <button
            onClick={handleSavePalette}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Save</span>
          </button>
        </div>
      </header>
      <main className="w-full grow">
        <ColorPalette colorPalette={colorPalette} />
      </main>
      <section id="savedPaletteList" className="relative bg-transparent">
        <div className="w-64 p-6 bg-white rounded-t-xl absolute bottom-0 left-0">
          <h2>Saved Color Palettes</h2>
          <PaletteList savedPalette={savedColor} setSavedColor={setSavedColor} />
        </div>
      </section>
    </div>
  );
}

export default App;
