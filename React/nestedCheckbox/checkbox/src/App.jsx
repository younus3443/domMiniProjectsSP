
import Home from "./components/Home";
import { useState } from "react";
import data from "./components/data";
function App() {
  const [checked, setChecked] = useState([]);

  return (
    <div>
      {data.map(node => (
        <Home key={node.id} node={node} checked={checked} setChecked={setChecked} />
      ))}
    </div>
  );
}
export default App