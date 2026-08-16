# Employee Management System

# Project Structure

```text
employee-management
│
├── server.js
│
├── routes
│   └── employeeRoutes.js
│
├── controllers
│   └── employeeController.js
│
├── middleware
│   └── loggerMiddleware.js
│
└── data
    └── employees.js
```

---

# Step 1: employees.js

```javascript
const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 50000
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 40000
  }
];

module.exports = employees;
```

---

# Step 2: loggerMiddleware.js

Simple middleware to show students how middleware works.

```javascript
const loggerMiddleware = (req, res, next) => {

  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);

  next();

};

module.exports = loggerMiddleware;
```

---

# Step 3: employeeController.js

```javascript
const employees = require("../data/employees");


// GET ALL EMPLOYEES

const getAllEmployees = (req, res) => {

  res.status(200).json(employees);

};


// GET SINGLE EMPLOYEE

const getEmployeeById = (req, res) => {

  const id = Number(req.params.id);

  const employee = employees.find(
    emp => emp.id === id
  );

  if (!employee) {
    return res.status(404).json({
      message: "Employee Not Found"
    });
  }

  res.status(200).json(employee);

};


// ADD EMPLOYEE

const addEmployee = (req, res) => {

  const { name, department, salary } = req.body;

  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    salary
  };

  employees.push(newEmployee);

  res.status(201).json({
    message: "Employee Added Successfully",
    employee: newEmployee
  });

};


// UPDATE EMPLOYEE

const updateEmployee = (req, res) => {

  const id = Number(req.params.id);

  const employee = employees.find(
    emp => emp.id === id
  );

  if (!employee) {
    return res.status(404).json({
      message: "Employee Not Found"
    });
  }

  employee.name =
    req.body.name || employee.name;

  employee.department =
    req.body.department || employee.department;

  employee.salary =
    req.body.salary || employee.salary;

  res.status(200).json({
    message: "Employee Updated Successfully",
    employee
  });

};


// DELETE EMPLOYEE

const deleteEmployee = (req, res) => {

  const id = Number(req.params.id);

  const index = employees.findIndex(
    emp => emp.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Employee Not Found"
    });
  }

  employees.splice(index, 1);

  res.status(200).json({
    message: "Employee Deleted Successfully"
  });

};


module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};
```

---

# Step 4: employeeRoutes.js

```javascript
const express = require("express");

const router = express.Router();

const {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");


// GET ALL

router.get("/", getAllEmployees);


// GET BY ID

router.get("/:id", getEmployeeById);


// CREATE

router.post("/", addEmployee);


// UPDATE

router.put("/:id", updateEmployee);


// DELETE

router.delete("/:id", deleteEmployee);

module.exports = router;
```

---

# Step 5: server.js

```javascript
const express = require("express");

const app = express();

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");


// Middleware

app.use(express.json());

app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});


app.listen(5000, () => {

  console.log("Server Running on Port 5000");

});
```

---

# Testing in Postman

## 1. Get All Employees

```http
GET
http://localhost:5000/employees
```

---

## 2. Get Employee By ID

```http
GET
http://localhost:5000/employees/1
```

---

## 3. Add Employee

```http
POST
http://localhost:5000/employees
```

Body

```json
{
  "name": "Aman",
  "department": "Marketing",
  "salary": 45000
}
```

---

## 4. Update Employee

```http
PUT
http://localhost:5000/employees/1
```

Body

```json
{
  "salary": 70000
}
```

---

## 5. Delete Employee

```http
DELETE
http://localhost:5000/employees/2
```

---

# Concepts Covered in This Project

| Concept                                       | Covered |
| --------------------------------------------- | ------- |
| Express Server                                | ✅       |
| Routing                                       | ✅       |
| Route Parameters                              | ✅       |
| Request Body                                  | ✅       |
| CRUD Operations                               | ✅       |
| Middleware                                    | ✅       |
| MVC Structure                                 | ✅       |
| Status Codes                                  | ✅       |
| Postman Testing                               | ✅       |
| Array Methods (find, findIndex, push, splice) | ✅       |

This is an ideal first backend project because students learn the complete request → middleware → route → controller → response flow without getting distracted by databases or authentication.
