// import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployeeComponent from "./Components/CreateEmployeeComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<ListEmployeeComponent />}></Route>
          <Route
            path="/employees"
            exact
            element={<ListEmployeeComponent />}
          ></Route>
          <Route
            path="/add-employee"
            exact
            element={<CreateEmployeeComponent />}
          ></Route>
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
