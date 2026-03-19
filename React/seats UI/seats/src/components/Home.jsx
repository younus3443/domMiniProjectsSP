import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const rows = 10;
  const cols = ["A", "B", "C", "D", "E", "F"];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatLimit, setSeatLimit] = useState(1);

  const [showFinal, setShowFinal] = useState(false);

  function toggleSeat(seatId) {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
    } else {
      if (selectedSeats.length >= seatLimit) {
        alert(`You can only select ${seatLimit} seats`);
        return;
      }

      setSelectedSeats((prev) => [...prev, seatId]);
    }
  }

  return (
    <div className="flex flex-col items-center p-10 gap-6">
      <div className="flex items-center gap-3">
        <p>No of seats</p>

        <select
          className="border px-3 py-1 rounded"
          value={seatLimit}
          onChange={(e) => {
            setSeatLimit(Number(e.target.value));
            setSelectedSeats([]); // reset seats when limit changes
          }}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      {/* Column Labels */}
      <div className="grid grid-cols-7 gap-12 font-semibold">
        <div></div>
        {cols.map((col) => (
          <div key={col} className="text-center">
            {col}
          </div>
        ))}
      </div>

      {/* Seats */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-7 gap-3 items-center">
          {/* Row Number */}
          <span className="text-right">{rowIndex + 1}</span>

          {cols.map((col, colIndex) => {
            const seatId = `${rowIndex + 1}${col}`;
            const selected = selectedSeats.includes(seatId);

            return (
              <button
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`w-12 h-10 rounded-md border text-sm
                ${
                  selected
                    ? "bg-orange-400 text-white border-orange-500"
                    : "bg-gray-200 hover:bg-gray-300"
                }
                `}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      ))}
      <div>
        <button
          onClick={() => navigate("/next", { state: { selectedSeats } })}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-6"
        >
          Finish Selection
        </button>
      </div>
    </div>
  );
}

export default Home;
