import { useLocation, useNavigate } from "react-router-dom";

function Next() {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedSeats = location.state?.selectedSeats || [];

  return (
    <div className="flex flex-col items-center mt-20 gap-6">

      <h2 className="text-xl font-bold">Final Selection</h2>

      <p>
        No of Seats: <span className="font-semibold">{selectedSeats.length}</span>
      </p>

      <p>
        Seats: <span className="font-semibold">
          {selectedSeats.join(" ")}
        </span>
      </p>

      <div className="flex gap-10 mt-6">

        <button
          onClick={() => navigate("/")}
          className="bg-yellow-700 text-white px-6 py-2 rounded"
        >
          {"<"} Modify selection
        </button>

        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          Finish
        </button>

      </div>

    </div>
  );
}

export default Next;