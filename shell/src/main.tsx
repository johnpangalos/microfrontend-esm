declare var React: any;
import { Renderer } from "react-dom";
declare var ReactDOM: { render: Renderer };
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
