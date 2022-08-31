import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

export default function CreateEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  let navigate = useNavigate();

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  };

  const saveEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
      navigate("/");
    });
  };

  const cancel = (event) => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                  <label>Email Address:</label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------Class Component---------------
// class CreateEmployeeComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       emailId: "",
//     };
//     this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//     this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//     this.saveEmployee = this.saveEmployee.bind(this);
//   }

//   changeFirstNameHandler = (event) => {
//     this.setState({ firstName: event.target.value });
//   };

//   changeLastNameHandler = (event) => {
//     this.setState({ lastName: event.target.value });
//   };

//   changeEmailHandler = (event) => {
//     this.setState({ emailId: event.target.value });
//   };

//   saveEmployee = (event) => {
//     event.preventDefault();
//     let employee = {
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       emailId: this.state.emailId,
//     };
//     console.log("employee => " + JSON.stringify(employee));
//   };

//   cancel() {
//     let navigate = this.props.navigate;
//     navigate("/");
//   }

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="card col-md-6 offset-md-3 offset-md-3">
//               <h3 className="text-center">Add Employee</h3>
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <label>First Name:</label>
//                     <input
//                       placeholder="First Name"
//                       name="firstName"
//                       className="form-control"
//                       value={this.state.firstName}
//                       onChange={this.changeFirstNameHandler}
//                     />
//                     <label>Last Name:</label>
//                     <input
//                       placeholder="Last Name"
//                       name="lastName"
//                       className="form-control"
//                       value={this.state.lastName}
//                       onChange={this.changeLastNameHandler}
//                     />
//                     <label>Email Address:</label>
//                     <input
//                       placeholder="Email Address"
//                       name="emailId"
//                       className="form-control"
//                       value={this.state.emailId}
//                       onChange={this.changeEmailHandler}
//                     />
//                   </div>
//                   <button
//                     className="btn btn-success"
//                     onClick={this.saveEmployee}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={this.cancel}
//                     style={{ marginLeft: "10px" }}
//                     Cancel
//                   ></button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CreateEmployeeComponent;
