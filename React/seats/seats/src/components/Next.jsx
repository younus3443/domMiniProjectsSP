import { useNavigate } from "react-router-dom";
function Next({ selectedSeat }) {
  const navigate = useNavigate();

  return (
    <div>
      <p>Final Page</p>
      <div>No of seats:{selectedSeat.length}</div>
      <div>Seats:{selectedSeat}</div>
      <div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}
export default Next;
