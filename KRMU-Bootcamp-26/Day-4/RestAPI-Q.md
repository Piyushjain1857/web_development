Company Questions
---

# 1. REST Principles

## Q1: Explain REST principles using a Student Management API.

### Answer

REST (Representational State Transfer) is an architectural style for designing web APIs.

### Example Student Resource

```http
GET    /students
GET    /students/101
POST   /students
PUT    /students/101
DELETE /students/101
```

### REST Principles

#### 1. Resource-Based

Everything is treated as a resource.

```http
/students
/courses
/faculties
```

Here Student is the resource.

---

#### 2. Stateless

Every request contains all information needed.

Example:

```http
GET /students/101
Authorization: Bearer xyz
```

Server should not remember previous requests.

---

#### 3. Uniform Interface

Use standard HTTP methods.

```http
GET    → Fetch
POST   → Create
PUT    → Update
DELETE → Remove
```

---

#### 4. Representation

Resources can be represented as JSON.

```json
{
  "id": 101,
  "name": "Rahul",
  "course": "MERN"
}
```

---

#### 5. Client-Server Separation

Frontend and backend are independent.

```text
React Frontend
      ↓
Express API
      ↓
MongoDB
```

---

### Interview Answer (Short)

> REST follows resource-based URLs, stateless communication, standard HTTP methods, uniform interfaces, and client-server separation. For example, in a Student Management API, students are resources and operations are performed using GET, POST, PUT, and DELETE endpoints.

---

## Q2: How do resources and endpoints differ?

### Answer

### Resource

The actual entity/data.

Examples:

```text
Student
Course
Faculty
```

---

### Endpoint

The URL used to access a resource.

Examples:

```http
/students
/students/101
/courses
```

---

### Interview One-Liner

> Resource is the business object (Student), while an endpoint is the URL through which that resource is accessed.

---

# 2. Status Codes

## Q1: Select proper status codes

### Success

```http
200 OK
```

---

### Resource Created

```http
201 Created
```

---

### Validation Error

```http
400 Bad Request
```

Example:

```json
{
  "email":"invalid"
}
```

---

### Unauthorized

```http
401 Unauthorized
```

User not logged in.

---

### Forbidden

```http
403 Forbidden
```

Logged in but no permission.

---

### Not Found

```http
404 Not Found
```

Student ID does not exist.

---

### Server Error

```http
500 Internal Server Error
```

Database crash, code exception etc.

---

## Q2: Difference between 401 and 403?

### 401 Unauthorized

Authentication failed.

```text
No token
Invalid token
Expired token
```

Example:

```http
GET /profile
```

Without JWT.

Response:

```http
401 Unauthorized
```

---

### 403 Forbidden

Authentication succeeded.

But permission denied.

Example:

```text
Student trying to delete users
```

Response:

```http
403 Forbidden
```

---

### Interview Answer

> 401 means who are you? Authentication is missing or invalid. 403 means I know who you are, but you don't have permission.

---

# 3. API Versioning

## Q1: Plan API versioning for a production backend.

### Common Strategy

```http
/api/v1/students
/api/v2/students
```

---

### Example

Version 1

```json
{
  "name":"Rahul"
}
```

Version 2

```json
{
  "firstName":"Rahul",
  "lastName":"Sharma"
}
```

Both can coexist.

---

### Benefits

* Backward compatibility
* Safe deployment
* Mobile app support
* Third-party integrations

---

### Interview Answer

> In production, I prefer versioning from day one so future changes don't break existing clients.

---

## Q2: URL versioning vs Header versioning?

### URL Versioning

```http
/api/v1/users
```

Pros:

* Easy to understand
* Easy debugging
* Easy documentation
* Common industry practice

---

### Header Versioning

```http
Accept-Version: v2
```

Pros:

* Cleaner URLs

Cons:

* Harder to test/debug

---

### Interview Answer

> URL versioning is simpler and more widely adopted because it's easier to test, document, and maintain.

---

# 4. Rate Limiting

## Q1: Add rate limiting to prevent API abuse.

### Express Example

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);
```

---

### Benefits

* Prevent DDoS
* Prevent brute force attacks
* Reduce server load
* Protect APIs

---

## Q2: Where would you apply stricter rate limits?

### High-Risk Endpoints

#### Login

```http
POST /login
```

Example:

```text
5 requests/minute
```

---

#### OTP APIs

```http
POST /send-otp
```

---

#### Password Reset

```http
POST /forgot-password
```

---

#### Payment APIs

```http
POST /payment
```

---

### Interview Answer

> Login, OTP, password reset, and payment APIs should have stricter limits because they are common targets for brute-force attacks and abuse.

---

# 5. API Testing

## Q1: Test APIs using Postman with headers, body, params, and auth token.

### GET Request

```http
GET /students?page=1
```

Params:

```text
page=1
```

---

### POST Request

Body:

```json
{
  "name":"Rahul",
  "course":"MERN"
}
```

---

### Headers

```http
Content-Type: application/json
```

---

### Authentication

```http
Authorization: Bearer jwt_token
```

---

### Things to Verify

* Status code
* Response body
* Headers
* Response time
* Validation errors

---

## Q2: How do you debug failed API requests?

### Step 1

Check Status Code

```http
400
401
403
404
500
```

---

### Step 2

Check Request Payload

```json
{
  "email":""
}
```

Maybe required fields missing.

---

### Step 3

Check Headers

```http
Authorization
Content-Type
```

---

### Step 4

Check Backend Logs

```js
console.log(req.body);
console.log(error);
```

---

### Step 5

Check Database

```js
await User.find();
```

Verify records exist.

---

### Interview Answer

> I debug APIs by checking the status code, request payload, headers, authentication token, server logs, and database records. I usually reproduce the issue in Postman and inspect both request and response carefully.

---

# Frequently Asked Follow-Up Questions

### Why PUT and PATCH are different?

```http
PUT   → Full update
PATCH → Partial update
```

Example:

```json
PUT
{
  "name":"Rahul",
  "email":"abc@gmail.com"
}
```

```json
PATCH
{
  "email":"new@gmail.com"
}
```

---

### Why should GET never modify data?

Because GET should be:

```text
Safe
Idempotent
Cacheable
```

---

### What is Idempotency?

Calling an API multiple times produces the same result.

Example:

```http
DELETE /students/101
```

After first delete, subsequent deletes don't change the system state.

---

### What status code should be returned after DELETE?

```http
204 No Content
```

or

```http
200 OK
```

Both are acceptable.

---

These REST API questions and answers cover roughly **80–90% of what is asked in MERN, Node.js, Backend, and Full-Stack interviews from fresher to 3+ years experience levels.**
