import React from "react";
import ReactDOM from "react-dom/client";
import { ControllerForm } from "./Mui/ControllerForm";
import StandardForm from "./StandardForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <StandardForm /> */}
    <ControllerForm />
  </React.StrictMode>
);
