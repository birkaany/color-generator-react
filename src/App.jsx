import { useState, useEffect } from "react";
import ColorPalette from "./components/ColorPalette";

import "./App.css";

function App() {
  const [colorPalette, setColorPalette] = useState([]);

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
    fetchData();
  }, []);

  return (
    <div className="App grid-rows-[70%_30%] grid-cols-none md:grid-cols-[70%_30%] md:grid-rows-none grid h-screen">
      <ColorPalette colorPalette={colorPalette} />
      <div className="flex justify-center items-center">
        <button onClick={() => fetchData()} className="border-2 border-gray-600 rounded-md px-6 py-3 hover:bg-gray-600 hover:text-white transition-all">
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
