import { IconSearch } from "@tabler/icons-react";
import { useRef, useState } from "react";

export default function Searchbar() {
  const inputRef = useRef(null);

  // funzione per entrare nel focus dell'input all'onClick su tutto il contenitore
  function handleClick() {
    inputRef.current.focus();
  }

  const [inputValue, setInputValue] = useState(); //per ottenere il text digitato

  return (
    <div
      className="flex gap-3 bg-white px-2 py-3 items-center rounded-4xl max-w-[400px] grow focus-within:ring-2 focus-within:ring-[#7ae4f5] transition-all"
      onClick={handleClick}
    >
      <IconSearch stroke={1.5} size={28} color="#99a1af" />
      <input
        type="text"
        placeholder="Search Anything..."
        className="focus:outline-none placeholder:text-gray-400 text-gray-500 grow"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
