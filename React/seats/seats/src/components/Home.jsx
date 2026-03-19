import { useNavigate } from "react-router-dom";

function Home({ selectedSeat, setSelectedSeat, limit, setLimit }) {
  const navigate = useNavigate();
  const rows = 15;
  const cols = ["A", "B", "C", "D", "E", "F"];

  function toggle(seatId) {
    if (selectedSeat.includes(seatId)) {
      setSelectedSeat((prev) => prev.filter((p) => p !== seatId));
    } else {
      if (selectedSeat.length >= limit) {
        alert("No");
        return;
      }
      setSelectedSeat((prev) => [...prev, seatId]);
    }
  }

  return (
    <>
      <div>
        <div className="flex">
          <p>No of seats:</p>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setSelectedSeat([]);
            }}
          >
            {Array.from({ length: rows }, (_, i) => (
              <option>{i + 1}</option>
            ))}
          </select>
        </div>
        <div></div>
        {Array.from({ length: rows }, (_, i) => (
          <div className="flex">
            <span className="flex flex-col">{i + 1}</span>
            {cols.map((col) => {
              const seatId = `${i + 1}${col}`;
              const selected = selectedSeat.includes(seatId);
              return (
                <button
                  onClick={() => toggle(seatId)}
                  className={`bg-gray-300 border p-1 rounded-lg ${selected ? "bg-orange-400" : ""}`}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        ))}
        <button onClick={() => navigate("/next")}>Next</button>
      </div>
    </>
  );
}
export default Home;
