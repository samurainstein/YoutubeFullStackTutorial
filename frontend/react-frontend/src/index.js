import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import CreateEmployeeComponent from "./Components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./Components/UpdateEmployeeComponent";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="employees" element={<ListEmployeeComponent />} />
      <Route path="add-employee" element={<CreateEmployeeComponent />} />
      <Route path="update-employee/:id" element={<UpdateEmployeeComponent />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
