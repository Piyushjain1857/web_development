

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
```

---

# 1️⃣ `fetch()` — Sending a Request

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
```

`fetch()` is a **Web API used to make HTTP requests**.

Here it sends a **GET request** to the URL:

```
https://jsonplaceholder.typicode.com/todos/1
```

This is a **fake API service** used for testing.

The response returned from this API looks like this:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

### Important

`fetch()` **does not return the data directly**.

It returns a **Promise**.

```
Promise { <pending> }
```

So JavaScript says:

> "Wait until the server responds."

---

# 2️⃣ `.then()` — Handling the Promise Result

```javascript
.then(response => response.json())
```

When the **server sends a response**, the Promise becomes **resolved** and `.then()` runs.

The parameter `response` is a **Response Object**.

Example structure:

```javascript
Response {
  body: ReadableStream
  headers: Headers
  ok: true
  status: 200
  statusText: "OK"
}
```

But the actual data is inside the **body stream**, not directly readable.

So we use:

```javascript
response.json()
```

### `response.json()`

This converts the response body into **JavaScript object**.

⚠️ Important:
`response.json()` **also returns a Promise**.

So now we have **another promise chain**.

---

# 3️⃣ Second `.then()` — Getting the Actual Data

```javascript
.then(json => console.log(json))
```

When `response.json()` finishes parsing the data, the Promise resolves.

Now `json` contains the **actual data object**.

Example output:

```javascript
{
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
}
```

And this line prints it:

```javascript
console.log(json)
```

---

# 🔁 Full Flow (Very Important)

```
1. fetch() sends HTTP request
            ↓
2. Server responds
            ↓
3. fetch promise resolved
            ↓
4. first .then() runs
            ↓
5. response.json() converts body to object
            ↓
6. second promise resolved
            ↓
7. second .then() runs
            ↓
8. console.log(json)
```

---

# 🧠 Visual Representation

```
fetch()
  │
  ▼
Promise (pending)
  │
  ▼
.then(response)
  │
  ▼
response.json()
  │
  ▼
Promise (pending)
  │
  ▼
.then(json)
  │
  ▼
console.log(json)
```

---

# ⚡ Same Code Using `async/await`

Your code is equivalent to:

```javascript
async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await response.json()
    console.log(json)
}

getData()
```

---

# 🚀 Interview Tip (Very Important)

Interviewers often ask:

**Why do we use two `.then()` in fetch?**

Answer:

> Because `fetch()` returns a Promise for the HTTP response, and `response.json()` returns another Promise for parsing the response body.

---

---

# 1️⃣ Why use `async/await` instead of `.then()`?

Both **`.then()` and `async/await` work with Promises**.
But `async/await` makes asynchronous code **look like synchronous code**, which improves readability and error handling.

### Example using `.then()`

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data)
  })
  .catch(err => console.log(err))
```

Problems:

* Harder to read when there are many calls
* Nested `.then()` chains
* Debugging becomes difficult

---

### Same code using `async/await`

```javascript
async function getData() {
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

getData()
```

### Advantages

| Feature        | `.then()`  | `async/await` |
| -------------- | ---------- | ------------- |
| Readability    | Medium     | Very High     |
| Error Handling | `.catch()` | `try/catch`   |
| Debugging      | Hard       | Easy          |
| Code structure | Nested     | Linear        |

---

### Visual Difference

`.then()` chain

```
fetch()
  ↓
.then()
  ↓
.then()
  ↓
.then()
```

`async/await`

```
await fetch()
await response.json()
```

Much **cleaner and easier**.

---

# 2️⃣ Fetch Weather Data Using OpenWeather API

API format:

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

---

## Example Code (Using `async/await`)

```javascript
async function getWeather(city) {

    const apiKey = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        console.log("City:", data.name);
        console.log("Temperature:", data.main.temp);
        console.log("Weather:", data.weather[0].description);

    } catch (error) {

        console.log("Error fetching weather:", error);

    }
}

getWeather("Delhi");
```

---

# 3️⃣ Example Output

Console output will look like:

```javascript
City: Delhi
Temperature: 32
Weather: scattered clouds
```

And the **full API response**:

```json
{
 "weather":[{"description":"scattered clouds"}],
 "main":{
   "temp":32,
   "humidity":40
 },
 "name":"Delhi"
}
```

---

# 4️⃣ Why `units=metric` is added

By default OpenWeather returns **Kelvin**.

```
units=metric → Celsius
units=imperial → Fahrenheit
```

---

# 5️⃣ Small Frontend Example

```html
<input id="city" placeholder="Enter city">
<button onclick="getWeather()">Get Weather</button>

<script>
async function getWeather() {

    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}
</script>
```

---

# ⭐ Interview Question They Often Ask

**Why can't we use `await` outside async function?**

Answer:

> Because `await` pauses execution and JavaScript only allows that inside an `async` function.

---


