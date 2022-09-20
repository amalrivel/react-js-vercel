import "./App.css";
import { lazy, useCallback, useMemo, useState } from "react";
// import Kid from "./components/kid";
// import Boy from "./components/boy";


const Kid = lazy(() => import("./components/kid"));
const Boy = lazy(() => import("./components/boy"));

function App() {
  console.log("parent");
  const [count, setCount] = useState(1);

  const handleCount = () => {
    setCount(count + 1);
    // return count;
  };

  const memoHandleCount = useMemo(() => count, []);

  const [countChild, setCountChild] = useState(1);
  const handleChild = () => {
    setCountChild(countChild + 1);
  };
  const menoHandleChild = useCallback(() => handleChild(), [countChild]);
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h2>Parent count : {count}</h2>
      <button onClick={handleCount}>+</button>
      <Kid countChild={countChild} handleChild={menoHandleChild} />
      <Boy />
    </div>
  );
}

export default App;
