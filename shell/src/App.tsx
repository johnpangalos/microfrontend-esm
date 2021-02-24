import React from "react";
import { Button } from "@microfrontend/package";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col">
      <div>County: {count}</div>
      <div>
        <Button onClick={() => setCount(count + 1)}>Hello</Button>
      </div>
    </div>
  );
}

export default App;
