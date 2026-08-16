Since you're learning Express backend, these are the **most frequently used `req` and `res` properties/methods** that you'll see in real applications.

# Request (`req`) Object

The `req` object contains data coming from the client.

| Property      | Example             | Use Case                         |
| ------------- | ------------------- | -------------------------------- |
| `req.method`  | GET, POST           | Check which HTTP method was used |
| `req.url`     | `/users/1`          | Get the requested URL            |
| `req.params`  | `{id: "1"}`         | Get route parameters             |
| `req.query`   | `{page: "2"}`       | Get query string values          |
| `req.body`    | `{name:"John"}`     | Get data sent from frontend      |
| `req.headers` | Authorization token | Access request headers           |
| `req.cookies` | User cookies        | Read cookies                     |
| `req.ip`      | Client IP address   | Logging & security               |
| `req.path`    | `/users`            | Get route path only              |

---

## 1. req.params

Used when data is part of the URL.

```js
app.get("/users/:id", (req, res) => {
  res.send(req.params);
});
```

Request:

```bash
/users/101
```

Output:

```js
{
  id: "101"
}
```

**Use Case:** Fetch a specific user, product, movie, etc.

---

## 2. req.query

Used for filters, search, pagination.

```js
app.get("/products", (req, res) => {
  res.send(req.query);
});
```

Request:

```bash
/products?page=2&category=mobile
```

Output:

```js
{
  page: "2",
  category: "mobile"
}
```

**Use Case:** Search, filtering, sorting.

---

## 3. req.body

Used in POST/PUT requests.

```js
app.use(express.json());

app.post("/users", (req, res) => {
  res.send(req.body);
});
```

Request:

```json
{
  "name":"Rahul",
  "age":22
}
```

Output:

```json
{
  "name":"Rahul",
  "age":22
}
```

**Use Case:** Registration forms, login forms, adding data.

---

## 4. req.headers

```js
app.get("/", (req, res) => {
  res.send(req.headers);
});
```

Output:

```js
{
  host: "localhost:5000",
  user-agent: "Chrome"
}
```

**Use Case:** Authentication tokens, browser information.

---

## 5. req.ip

```js
app.get("/", (req, res) => {
  res.send(req.ip);
});
```

Output:

```bash
::1
```

**Use Case:** Security, analytics, rate limiting.

---

# Response (`res`) Object

The `res` object is used to send data back to the client.

| Method              | Use                   |
| ------------------- | --------------------- |
| `res.send()`        | Send response         |
| `res.json()`        | Send JSON data        |
| `res.status()`      | Set status code       |
| `res.sendStatus()`  | Send only status code |
| `res.redirect()`    | Redirect user         |
| `res.download()`    | Download file         |
| `res.sendFile()`    | Send file             |
| `res.cookie()`      | Set cookie            |
| `res.clearCookie()` | Remove cookie         |

---

## 1. res.send()

```js
res.send("Hello World");
```

Output:

```bash
Hello World
```

**Use Case:** Simple responses.

---

## 2. res.json()

```js
res.json({
  name: "Rahul",
  age: 22
});
```

Output:

```json
{
  "name":"Rahul",
  "age":22
}
```

**Use Case:** APIs (most common).

---

## 3. res.status()

```js
res.status(404).send("User Not Found");
```

Output:

```bash
User Not Found
```

Status Code:

```bash
404
```

**Use Case:** Error handling.

---

## 4. res.sendStatus()

```js
res.sendStatus(404);
```

Output:

```bash
Not Found
```

**Use Case:** Quick status responses.

---

## 5. res.redirect()

```js
app.get("/", (req, res) => {
  res.redirect("/home");
});
```

**Use Case:** Move user to another route.

---

## 6. res.sendFile()

```js
const path = require("path");

res.sendFile(path.join(__dirname, "index.html"));
```

**Use Case:** Send HTML files.

---

## 7. res.download()

```js
res.download("resume.pdf");
```

**Use Case:** Download PDF, Excel, ZIP files.

---

## 8. res.cookie()

```js
res.cookie("username", "Rahul");
res.send("Cookie Set");
```

**Use Case:** Store user information.

---

## 9. res.clearCookie()

```js
res.clearCookie("username");
res.send("Cookie Removed");
```

**Use Case:** Logout functionality.

---

# Most Commonly Used in Real Projects (Top 10)

If you're building Employee Management Systems, Student Portals, E-commerce, etc., you'll use these daily:

```js
req.params
req.query
req.body
req.headers

res.send()
res.json()
res.status()
res.redirect()

next()      // Middleware

```

### app.use()   // Register middleware
The app.use() function in Express.js adds middleware to the application's request-processing pipeline. It applies the specified middleware to all incoming requests or to specific routes, allowing you to modify request/response objects, perform operations, or handle errors throughout the application.

### app.use(express.json())
It converts the raw JSON text string sent by a client into a standard JavaScript object and assigns it to the req.body property, making the data easily accessible inside your API route handlers




