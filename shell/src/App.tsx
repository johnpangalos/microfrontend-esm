declare var React: any;
import { Button } from "http://localhost:5000/main.mjs";
const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <div>Count: {count}</div>
      <div>
        <Button onClick={() => setCount(count + 1)}>Hello</Button>
      </div>
    </div>
  );
}

export default App;
