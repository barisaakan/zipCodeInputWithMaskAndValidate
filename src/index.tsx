import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import ZipBox from "./ZipBox";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ZipBox />
  </StrictMode>
);
