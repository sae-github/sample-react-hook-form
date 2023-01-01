import React from "react";
import ReactDOM from "react-dom/client";
import { FormProviderForm } from "./Mui/FormProviderForm";
import { RadioForm } from "./Mui/RadioForm";
import StandardForm from "./StandardForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <StandardForm /> */}
    {/* <ControllerForm /> */}
    {/* <FormProviderForm /> */}
    <RadioForm/>
  </React.StrictMode>
);
