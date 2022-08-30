// import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        {/* <ListEmployeeComponent navigate={navigate} /> */}
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;

// let navigate = useNavigate();

//   return (
//     <Router>
//       <HeaderComponent />
//       <div className="container">
//         <Routes>
//           <Route path="/" exact element={<ListEmployeeComponent />}></Route>
//           <Route
//             path="/employees"
//             exact
//             element={<ListEmployeeComponent />}
//           ></Route>
//           <Route
//             path="/add-employee"
//             exact
//             element={<CreateEmployeeComponent />}
//           ></Route>
//         </Routes>
//       </div>
//       <FooterComponent />
//     </Router>
//   );
// }

// let navigate = useNavigate();
