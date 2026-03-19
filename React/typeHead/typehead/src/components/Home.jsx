import { useState } from "react";
import data from "./countries.json";

function Home() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const filteredCountries = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : prev,
      );
    }
    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
    if (e.key === "Enter") {
      setSearch(filteredCountries[activeIndex].name.common);
      setActiveIndex(-1);
    }
  }

  return (
    <div>
      <input
        className="border w-[40%] ml-[30%] mt-10 py-2"
        type="text"
        placeholder="search Countries ..."
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setSearch(e.target.value);
          setActiveIndex(-1);
        }}
      />
      <div>
        {filteredCountries.map((item, i) => (
          <div
            className={`ml-[30%] cursor-pointer  text-xl border w-[40%] ${i == activeIndex ? "bg-blue-300" : ""}`}
            onClick={() => setSearch(item.name.common)}
          >
            {item.name.common}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
