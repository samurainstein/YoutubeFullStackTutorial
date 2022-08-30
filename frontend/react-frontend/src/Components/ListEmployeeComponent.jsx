import React, { Component, useEffect } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ---------------Functional Component--------------------

export default function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  let navigate = useNavigate();

  //TODO Not sure if this is right
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  });

  const addEmployee = (event) => {
    navigate("/add-employee");
  };

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Employee Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// -----------------Class Component------------------

// class ListEmployeeComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employees: [],
//     };

//     this.addEmployee = this.addEmployee.bind(this);
//   }

//   componentDidMount() {
//     EmployeeService.getEmployees().then((res) => {
//       this.setState({ employees: res.data });
//     });
//   }

//   addEmployee(props) {
//     let navigate = this.props.navigate;
//     navigate("/add-employee");
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="text-center">Employee List</h2>
//         <div className="row">
//           <button className="btn btn-primary" onClick={this.addEmployee}>
//             Add Employee
//           </button>
//         </div>
//         <div className="row">
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>Employee First Name</th>
//                 <th>Employee Last Name</th>
//                 <th>Employee Email Id</th>
//                 <th>Employee Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.firstName}</td>
//                   <td>{employee.lastName}</td>
//                   <td>{employee.emailId}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default ListEmployeeComponent;
