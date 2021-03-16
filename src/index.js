import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "/src/styles.css";

import Counter from "/Components/counter.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
