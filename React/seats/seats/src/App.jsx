import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Next from "./components/Next";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [limit, setLimit] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                limit={limit}
                setLimit={setLimit}
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
              />
            }
          />
          <Route
            path="/next"
            element={
              <Next
                limit={limit}
                setLimit={setLimit}
                selectedSeat={selectedSeat}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
