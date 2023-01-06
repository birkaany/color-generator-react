import ColorCard from "./ColorCard";

export default function ColorPalette({ colorPalette }) {
  return (
    <ul className="flex flex-col md:flex-row h-full">
      {colorPalette.map((palette, index) => {
        return <ColorCard key={index} palette={palette} />;
      })}
    </ul>
  );
}
