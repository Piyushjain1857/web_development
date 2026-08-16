import React from 'react'

const App = () => {


  return (
    <div>App</div>
  )
}

export default App










// import { useEffect, useState } from "react";

// function App() {
//   const [employees, setEmployees] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     department: "",
//     salary: "",
//   });


//   const API_URL = "http://localhost:5100/employees";
//   //replace the local host with deployed backend render link
//   // const API_URL = "https://ems-backend-ackm.onrender.com/employees";

//   // FETCH EMPLOYEES

//   const getEmployees = async () => {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     setEmployees(data);
//   };
  
//   useEffect(() => {
//     getEmployees();
//   }, []);

//   // HANDLE INPUT

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ADD EMPLOYEE

//   const addEmployee = async (e) => {
//     e.preventDefault();

//     await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       //headers are the extra information sent with the request. Here with label we sent json data
//       body: JSON.stringify(formData),
//       // The body contains the actual data being sent.
//     });

//     setFormData({
//       name: "",
//       department: "",
//       salary: "",
//     });

//     getEmployees();
//   };

//   // DELETE EMPLOYEE

//   const deleteEmployee = async (id) => {
//     await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });

//     getEmployees();
//   };

//   return (
//     <div className="container">
//       <h1>Employee Management System</h1>

//       <form onSubmit={addEmployee} className="form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Employee Name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={formData.department}
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="salary"
//           placeholder="Salary"
//           value={formData.salary}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Employee</button>
//       </form>

//       <div className="employee-grid">
//         {employees.map((employee) => (
//           <div key={employee.id} className="card">
//             <h3>{employee.name}</h3>

//             <p>Department: {employee.department}</p>

//             <p>Salary: ₹{employee.salary}</p>

//             <button
//               className="delete-btn"
//               onClick={() => deleteEmployee(employee.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// // Edit Employee 
// // Search Employee 
// // Filter by Department 
// // Employee Count 
