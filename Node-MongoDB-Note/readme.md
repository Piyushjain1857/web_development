# 📘 NodeJS Notes – Complete Table of Contents


1. [Node Introduction](#node-introduction)

   - What is Backend Development
   - [Introduction to Node.js](#introduction-to-nodejs)
   - [Use Cases of Node.js](#by-using-node-js-we-can-make-wide-variety-of-the-application-such-as)
   - [Need for Node.js](#need-for-nodejs)
   - [Blocking and Non-blocking Operations](#blocking-and-non-blocking-operations)
   - [REPL](#repl-read-eval-print-loop)
   - [Modules](#modules)

     - [FS Module](#fs-module)
     - Directory Operations
     - File Information
     - File Renaming and Deleting
     - Copying Files
     - Watching for Changes
     - Using `fs` for Various File Types

2. [Node Foundation](#day-2)

   - [Creating a Simple Server](#creating-a-simple-server)
   - [Modules and Types of Modules](#modules-and-types-of-modules)
   - [HTTP Status Codes](#http-status-codes)
   - [HTTP Requests](#http-requests)
   - [How to Perform Routing](#how-to-perform-routing-with-get-and-post)
   - [HTTP Headers](#http-headers)

3. [Express](#express)

   - [What is Express](#express)
   - [Advantages of Express](#what-are-the-advantages-of-using-express)
   - [Difference Between HTTP and Express](#difference-between-http-and-express)
   - [Express Example: GET & POST](#example-using-express-of-get-and-post-method)
   - [Express Filtering Example](#example-2)
   - [Express Routing](#express-routing)

     - [Routing with Router()](#perform-routing-in-different-files-using-router)
     - [Routing Through 3 Files](#routing-through-3-files)

4. [Query Parameters](#what-is-a-query-parameter)

   - [Filtering Example](#example-1-filtering-data)
   - [Age-Based Access Control](#example-2-if-the-age-is-grater-than-18-then-give-the-access)

5. [Middleware](#middleware)

   - What is Middleware?
   - Why We Need Middleware
   - Where Middleware is Used
   - [Application-Level Middleware](#example-of-application-level-middleware)
   - [Age Check Middleware](#if-the-age-is-above-18-then-give-the-acess)
   - [Router-Level Middleware](#example-router-level-middleware)
   - [Error-Level Middleware](#error-level-middleware)
   - [CORS](#what-is-cors)
   - [404 Handling](#adding-404-error)
   - [Body Parser](#what-is-body-parser)

     - `express.json()`
     - `express.urlencoded()`
     - [Backend-Frontend Example](#frontend)

6. [Password Hashing with Bcrypt](#password-hashing-in-nodejs-with-bcrypt)

   - What is Password Hashing?
   - What is Bcrypt?
   - How Bcrypt Works
   - `bcrypt.genSalt`, `hash`, `compare`
   - [Examples of Hashing](#examples-of-password-hashing-with-bcrypt-in-nodejs)
   - [Login & Signup API](#login-and-signup-api-with-bcrypt)

7. [Authentication vs Authorization](#authentication)

   - Authentication Overview
   - Authorization Overview
   - Real-World Example (Uber)

8. [JWT (JSON Web Token)](#what-is-json-web-token-jwt)

   - [Advantages of JWT](#advantages-of-nodejs-authentication-with-jwt)
   - [Need for JWT](#the-need-for-json-web-token)
   - [Structure of JWT](#structure-of-a-jwt)
   - [JWT Use Cases](#jwt-use-cases)
   - [JWT Example](#example-code)
   - [Explanation: Secret Key, Token Creation, and Verification](#explanation)
   - [Bearer Token](#bearer-token)
   - [Bearer vs Non-Bearer Use](#why-bearer-is-commonly-used)
   - [Basic vs Digest vs Bearer Auth](#difference-between-basic-digest-and-bearer-authentication)

9. [WebSockets & Socket.IO](#websockets-vs-socketio)

   - [Need for Sockets](#need-for-sockets)
   - [Difference Between HTTP and Socket](#difference-between-http-and-socket)
   - [Features of Socket.IO](#key-features-of-socketio)
   - [Socket.IO Server & Client Code](#step-1)

     - Sending Messages
     - Broadcasting
     - Exclusive Broadcast
     - Room-Based Communication

   - [React Client for Socket.IO](#update-clent-side-with-input-field)

10. [MongoDB](#mongodb)

- [Introduction to Databases](#introduction-to-databases-db)
- [Relational vs Cloud Databases](#relational-database)
- [DBMS and RDBMS](#dbms-data-base-management-system)
- [SQL vs NoSQL](#sql-vs-nosql)
- [Introduction to MongoDB](#introduction-to-mongodb)
- [When to Use MongoDB](#when-to-use-mongodb)
- [MongoDB Basics: Collections, Documents, Indexes](#mongodb-basics)
- [Installation of MongoDB](#installation-of-mongodb)
- [MongoDB Terminology](#mongodb-terminology)
- [BSON vs JSON](#bson-vs-json)
- [MongoDB Shell Queries](#mongodb-shell-query-examples)

  - Query Operators: `$gt`, `$lt`, `$set`, `$pull`, etc.
  - CRUD: Insert, Find, Update, Delete
  - Aggregation, Indexing, Sorting

- [Human_Resource DB Practice Task](#mongo-shell-employee-example)
- [MongoClient Intro](#mongodb-client)

11. [MongoDB Atlas](#mongodb-deployment-using-mongodb-atlas)

- What is MongoDB Atlas
- Key Features: DBaaS, Global Clusters, Security
- Steps for Deployment

12. [Mongoose](#mongoose)

- What is Mongoose
- ODM & Schema-Based Modeling
- Middleware, Validation, Population
- `required: true` vs `unique: true`
- Advantages & Comparison with MongoDB Driver

13. [Regex in MongoDB](#regex)

- What is Regex
- Usage with `$regex` operator

### Firstly understand What is backend development?

Back-end Development refers to the server-side development. Which user is unable to see what's going on at the backend. Or as you can say Backend developers work behind the scenes to control everything which you don’t see on a website.

The role may include creating, maintaining, testing, and debugging a website. This includes the core application logic, databases, data and APIs, and more.

So in the backend we will be going to learn about how we will make a server using node js and database as a mongoDB.

Now we will move ahead with the node js.

### Introduction to Node.js:

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

open-source: Means anyone can access it [it is publically accessible]
Cross-platform: Means we can run the node js coding in various platforms or where javascript is installed or can run.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, providing a powerful and efficient way to build scalable network applications. Node.js is event-driven and non-blocking, making it well-suited for handling concurrent connections and building real-time applications.

It is known for its asynchronous event-driven model, which allows it to handle a large number of concurrent connections without blocking.
Because it uses non-blocking operations This makes it particularly useful for building real-time applications, such as chat applications or online gaming platforms.
It is in between the client side and Database which take care of the request and response.

### By using node js we can make wide variety of the application such as:

`Web applications:` Node.js is a popular choice for building web applications because it is fast, scalable, and efficient.

`Real-time applications:` Node.js is well-suited for building real-time applications, such as chat apps and multiplayer games.

`Streaming applications:` Node.js can be used to build streaming applications, such as video streaming and audio streaming.

`APIs:` Node.js can be used to build APIs that can be used by other applications.

An API (Application Programming Interface) is a set of rules that define how two applications can communicate with each other

### Need for Node.js:

1. **Single Language:** With Node.js, you can use JavaScript for both server-side and client-side development, providing consistency across your entire application.

2. **Asynchronous and Event-Driven:** Node.js is designed to handle asynchronous operations efficiently, making it suitable for building scalable and performant applications.

3. **Community and Modules:** Node.js has a large and active community, and it provides a vast ecosystem of modules through npm (Node Package Manager), making it easy to add functionality to your applications.

### Here are some of the benefits of using Node.js:

Fast: Node.js is very fast because it uses an event-driven, non-blocking I/O model. This means that it can handle a large number of concurrent connections without slowing down.

Scalable: Node.js is very scalable, making it a good choice for applications that need to handle a lot of traffic. It can easily be scaled horizontally by adding more servers.

Reusable: Node.js has a large and active community, which means that there are many reusable modules available. This can save you a lot of time and effort when developing your applications.

JavaScript: Node.js is written in JavaScript, which is a popular language that is known for its simplicity and expressiveness. This makes it easy to learn and use, even for beginners.

Real-time applications: Node.js is well-suited for building real-time applications, such as chat apps and multiplayer games. This is because it can handle a large number of concurrent connections and keep them all up-to-date with the latest data.

### Blocking and Non-blocking Operations:

- **Blocking Operations:** In traditional synchronous programming, a blocking operation means that the program is paused until the operation completes. This can lead to performance issues, especially in applications that need to handle multiple tasks simultaneously.

- **Non-blocking Operations:** Node.js is designed to be non-blocking. Instead of waiting for operations to complete, it continues to execute other tasks. This is achieved through callbacks and event-driven architecture.

### REPL (Read-Eval-Print Loop):

Node.js comes with a handy tool called REPL, which stands for Read-Eval-Print Loop. It allows you to interactively run JavaScript code. To start REPL, open your terminal and type `node` and press Enter.

You can then type JavaScript commands, and they will be executed immediately. It's a great way to experiment with code snippets and get quick feedback.

For initialising the node js project follow the following steps:

```
npm init
npm install --y
Then, create your first file index.js
And write console.log(“hello world”) in index.js
And run the server.
```

## Modules:

A module is a self-contained piece of code that can be imported into other modules. Modules can be used to organise code, reuse code, and share code.
It has a set of variable functions which we can reuse.
There are different modules such as:

1. Fs module,
2. Core modules,
3. Third party modules,
4. Local modules

### 3. FS Module:

The `fs` (File System) module in Node.js allows you to work with the file system on your computer. Here's a simple example:

The `fs` (File System) module in Node.js provides an API for interacting with the file system. It allows you to perform various operations such as reading, writing, and manipulating files and directories. Below, I'll explain some of the key methods in the `fs` module along with code examples.

### 1. `fs.readFile(path[, options], callback)`

This method is used to asynchronously read the entire contents of a file. It takes a file path, an optional options object (for specifying encoding, flag, etc.), and a callback function that is called with two arguments: `err` (if an error occurs) and `data` (the file content).

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

> 'utf8' (alias: 'utf-8'): Multi-byte encoded Unicode characters. Many web pages and other document formats use UTF-8. This is the default character encoding. When decoding a Buffer into a string that does not exclusively contain valid UTF-8 data, the Unicode replacement character U+FFFD � will be used to represent those errors.

### 2. `fs.readFileSync(path[, options])`

This method is the synchronous version of `fs.readFile`. It blocks the execution until the file is read completely. It returns the file content or throws an error if something goes wrong.
The synchronous APIs block the Node.js event loop and further JavaScript execution until the operation is complete. Exceptions are thrown immediately and can be handled using try…catch, or can be allowed to bubble up.

```javascript
const fs = require("fs");

try {
  const dataSync = fs.readFileSync("example.txt", "utf8");
  console.log(dataSync);
} catch (err) {
  console.error(err);
}
```

### 3. `fs.writeFile(file, data[, options], callback)`

This method is used to asynchronously write data to a file. It takes a file path, data to be written, an optional options object, and a callback function that is called after the operation is complete.

```javascript
const fs = require("fs");

fs.writeFile("output.txt", "Hello, Node.js!", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
```

### 4. `fs.writeFileSync(file, data[, options])`

This is the synchronous version of `fs.writeFile`. It blocks the execution until the file is written completely.

```javascript
const fs = require("fs");

try {
  fs.writeFileSync("output.txt", "Hello, Node.js!", "utf8");
  console.log("File written successfully");
} catch (err) {
  console.error(err);
}
```

### 5. `fs.appendFile(file, data[, options], callback)`

This method is used to asynchronously append data to a file. It works similarly to `fs.writeFile` but appends the data to the end of the file.

```javascript
const fs = require("fs");

fs.appendFile("output.txt", "\nAppended Text", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended successfully");
});
```

### 6. `fs.appendFileSync(file, data[, options])`

This is the synchronous version of `fs.appendFile`.

```javascript
const fs = require("fs");

try {
  fs.appendFileSync("output.txt", "\nAppended Text", "utf8");
  console.log("Data appended successfully");
} catch (err) {
  console.error(err);
}
```

These are just a few of the many methods available in the `fs` module. Other methods include those for working with directories (`fs.readdir`, `fs.mkdir`, `fs.rmdir`, etc.) and for file information (`fs.stat`, `fs.access`, etc.).

### 1. Directory Operations:

#### Reading the Contents of a Directory:

```javascript
const fs = require("fs");

fs.readdir("./myDirectory", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Files in the directory:", files);
});
```

#### Creating a Directory:

```javascript
const fs = require("fs");

fs.mkdir("./newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created successfully");
});
```

### 2. File Information:

#### Getting File Stats:

```javascript
const fs = require("fs");

fs.stat("./file.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File stats:", stats);
  console.log("Is it a directory?", stats.isDirectory());
  console.log("Is it a file?", stats.isFile());
});
```

### 3. File Renaming and Deleting:

#### Renaming a File:

```javascript
const fs = require("fs");

fs.rename("oldFile.txt", "newFile.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed successfully");
});
```

#### Deleting a File:

```javascript
const fs = require("fs");

fs.unlink("fileToDelete.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully");
});
```

### 4. Copying Files:

```javascript
const fs = require("fs");

// Asynchronous file copy
fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File copied successfully");
});

// Synchronous file copy
fs.writeFileSync("destinationSync.txt", fs.readFileSync("sourceSync.txt"));
console.log("File copied synchronously");
```

### 5. Watching for Changes:

```javascript
const fs = require("fs");

// Watch for changes in a directory
fs.watch("./myDirectory", (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    console.log(`Filename: ${filename}`);
  } else {
    console.log("Filename not provided");
  }
});
```

### Use of different files using fs module

The `fs` module in Node.js is versatile and can be used to read and write various file formats, not limited to just text files. The ability to read or write a specific file format depends more on the purpose of your application and the libraries/modules available for processing that format. Here are some common file formats and the typical ways to work with them in Node.js:

1. **Text Files (.txt, .csv, .json, etc.):** As demonstrated earlier, you can read and write text files using the `fs` module. This includes plain text files, CSV files, and JSON files.

2. **Binary Files (Images, Audio, Video, etc.):** Binary files can be read and written using the `fs` module. However, you'll work with the raw binary data, and for meaningful processing (e.g., image manipulation, audio processing), you may need specialized libraries.

   ```javascript
   const fs = require("fs");

   // Read binary data from an image file
   const imageData = fs.readFileSync("image.jpg");
   ```

3. **JSON Files (.json):** JSON files are a common format for configuration and data exchange. You can use the `fs` module to read JSON files, and `JSON.parse` to convert the content into a JavaScript object.

   ```javascript
   const fs = require("fs");

   // Read JSON data from a file
   const jsonData = fs.readFileSync("data.json", "utf8");
   const parsedData = JSON.parse(jsonData);
   ```

4. **XML Files (.xml):** While Node.js itself does not have built-in support for XML, there are third-party libraries like `xml2js` that you can use to parse and manipulate XML files.

   ```javascript
   const fs = require("fs");
   const xml2js = require("xml2js");

   // Read XML data from a file
   const xmlData = fs.readFileSync("data.xml", "utf8");

   // Parse XML data
   xml2js.parseString(xmlData, (err, result) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log(result);
   });
   ```

5. **SQLite Databases (.sqlite):** While the `fs` module is not used directly for reading SQLite databases, you can use modules like `sqlite3` to interact with SQLite databases.

   ```javascript
   const sqlite3 = require("sqlite3").verbose();
   const db = new sqlite3.Database("example.db");

   db.serialize(() => {
     db.each("SELECT * FROM my_table", (err, row) => {
       console.log(row);
     });
   });

   db.close();
   ```

6. **PDF Files (.pdf):** Reading and processing PDF files typically requires third-party libraries such as `pdf-parse` or `pdf2json`.

   ```javascript
   const fs = require("fs");
   const pdf = require("pdf-parse");

   const dataBuffer = fs.readFileSync("document.pdf");

   pdf(dataBuffer).then((data) => {
     console.log(data.text);
   });
   ```

Always check the Node.js documentation and npm registry for specific modules that might help with your file format of interest. Each file format may have its own unique considerations, and using specialized libraries is often recommended for more complex formats.

# Day-2

Absolutely! Let's dive into Day 2 topics.

### 1. Creating a Simple Server:

#### Step-by-Step Procedure:

1. Import the `http` module.
2. Create an HTTP server using the `createServer` method.
3. Define a callback function that handles incoming requests and responses.
4. Start the server by listening on a specific port (e.g., 3000).

#### Code Example:

```javascript
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  //writeHead sets the response status code and headers, while write is used to send the response body.
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Set the response HTTP header with HTTP status and Content type
  res.write("Hello, World!");
  res.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(4100, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

#### Explanation:

- **`require('http')`:** Imports the built-in `http` module, which provides functionality to create HTTP servers and clients.

- **`createServer` Method:** Creates an HTTP server that invokes the specified callback function for each incoming request. The callback function takes two arguments, `req` (the request) and `res` (the response).

- **Setting Response Headers:** The `res.writeHead` method is used to set the response HTTP header. In this example, it sets the status code to 200 (OK) and the content type to 'text/plain'.

- **`res.end('Hello, Node.js!\n')`:** Sends the response body to the client. In this case, it sends the string 'Hello, Node.js!\n'.

- **`server.listen(3000, '127.0.0.1', callback)`:** Makes the server listen on port 3000 and the IP address 127.0.0.1 (localhost). The callback function is executed once the server is listening.

### 2. Modules and Types of Modules:

#### Modules:

In Node.js, a module is a file or a folder containing a set of functions, variables, or even other modules. Modules allow you to organize your code into reusable and maintainable units.

#### Types of Modules:

- **Built-in Modules:** These are modules that come with Node.js, such as `fs` for file system operations, `http` for creating HTTP servers, and `path` for handling file paths.

- **Third-Party Modules:** These are modules created by the community and can be easily added to your project using npm (Node Package Manager).

- **Custom Modules:** These are modules created by you to organize your code into smaller, manageable pieces.

#### Example:

Let's create a simple custom module. Create a file named `math.js`:

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

Now, in another file (e.g., `app.js`), you can use this module:

```javascript
// app.js
const math = require("./math");

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(8, 3)); // Output: 5
```

### 3. HTTP Status Codes:

HTTP status codes indicate the outcome of a request made by the client to the server. They are three-digit numbers where the first digit defines the class of response, and the last two digits do not have any categorization role.

Some common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: The request was successful, and a new resource was created.
- `400 Bad Request`: The server cannot or will not process the request due to an apparent client error.
- `404 Not Found`: The requested resource could not be found on the server.
- `500 Internal Server Error`: A generic error message returned when an unexpected condition was encountered on the server.

### 4. HTTP Requests:

HTTP (Hypertext Transfer Protocol) is the foundation of any data exchange on the Web. It is a protocol used for transmitting hypermedia, and it defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands.

HTTP requests are messages sent by a client to initiate an action on the server. The most common types of HTTP requests are:

- **GET:** Retrieve data from the server.
- **POST:** Send data to the server to create a new resource.
- **PUT:** Send data to the server to update a resource.
- **DELETE:** Request the removal of a resource.

#### Making HTTP Requests in Node.js:

- **Using the `axios` module (Third-Party):**

  ```bash
  npm install axios
  ```

  ```javascript
  const axios = require("axios");

  axios
    .get("https://www.example.com")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

Feel free to explore these examples and let me know if you have any questions or if you'd like more details on any specific topic!

### How to perform routing with get and post

```javascript
const http = require("http");
// const url = require('url');

const jsonObj = {
  name: "SP",
  age: "24",
};
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/home" && req.method === "GET") {
    res.write("This is the home page");
    res.end();
  } else if (req.url === "/about" && req.method === "POST") {
    res.write("This is About page");
    res.end();
  } else if (req.url === "/json" && req.method === "POST") {
    const data = JSON.stringify(jsonObj);
    res.write(data);
    res.end();
  }
});

// Start the server on port 3000
server.listen(4100, () => {
  console.log("Server running at http://localhost:4100/");
});
```

### HTTP Headers

HTTP headers are key-value pairs sent by the server in the response or by the client in the request. They provide additional information about the request or the response, allowing the client and server to communicate various details. Here's an explanation of some common response headers:

### 1. `Connection:`

The `Connection` header indicates whether the connection should be kept open for further requests or closed after the current request-response cycle.

- `Connection: keep-alive`: The connection should be kept open for multiple requests.
- `Connection: close`: The connection should be closed after the current request-response.

### 2. `Content-Type:`

The `Content-Type` header specifies the media type of the resource being sent. It informs the client how to interpret the content of the response.

Example values:

- `Content-Type: text/html`: The content is HTML.
- `Content-Type: application/json`: The content is in JSON format.
- `Content-Type: image/jpeg`: The content is an image in JPEG format.

### 3. `Date:`

The `Date` header indicates the date and time when the response was generated. It helps in understanding the freshness of the response.

Example:

```
Date: Sat, 01 Jan 2023 12:00:00 GMT
```

### 4. `Keep-Alive:`

The `Keep-Alive` header is used to allow the connection to be reused for multiple requests, instead of establishing a new connection for each request. It helps in reducing latency.

- `Keep-Alive: timeout=5, max=1000`: Specifies that the connection can be kept alive for 5 seconds and can handle a maximum of 1000 requests.

### 5. `Transfer-Encoding:`

The `Transfer-Encoding` header indicates the form of encoding that has been applied to the message body. One common value is `chunked`, where the message body is sent in chunks.

Example:

```
Transfer-Encoding: chunked
```

In chunked encoding, the body is divided into a series of chunks, each preceded by its size in hexadecimal followed by a newline and the chunk itself.

These headers play a crucial role in defining the behavior and characteristics of the HTTP communication between the client and the server. They help in conveying metadata about the content, managing connections, and ensuring efficient and reliable communication.

# Express

- Express is a framework built on top of Node.
- Express is a tool that makes it easier to build web applications using Node.js.
- It provides for handling HTTP requests, routing, and middleware.
- Express helps you manage everything, from routes to handling requests .
- It simplifies the process of creating servers, handling routes, and managing middleware.

### What are the advantages of using Express?

1. With a myriad of HTTP utility methods and middleware , creating a
   robust API is quick and easy .
2. Express provides a thin layer of fundamental web application features,
   without obscuring Node.js features that you know .
3. Many popular frameworks are based on Express .
4. Express helps you manage everything, from routes to handling requests
5. Open Source Community : It has an open-source community,so the
   code is always reviewed and improved .
6. Express Framework is reliable and has a huge community around

### Difference Between HTTP and Express

| Feature                          | HTTP (Node.js)                              | Express.js                                                                      |
| -------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| **Routing**                      | Manual routing setup using `http` module.   | Simplified routing with dedicated routing methods (`get`, `post`, etc.).        |
| **Middleware**                   | Manually configure middleware functions.    | Built-in middleware and easy middleware setup.                                  |
| **Request and Response Objects** | Basic request and response objects.         | Enhanced request and response objects with additional methods and properties.   |
| **Handling Parameters**          | Manually parse parameters from URL.         | Supports route parameters and query parameters more easily.                     |
| **Static File Serving**          | Manually handle static file serving.        | Built-in middleware for serving static files (`express.static`).                |
| **Error Handling**               | Manually handle errors.                     | Built-in error handling middleware (`app.use((err, req, res, next) => {...})`). |
| **Organizing Routes**            | Routes scattered across multiple files.     | Routes can be organized using `Router` and modularized into separate files.     |
| **Flexibility**                  | Low-level control over HTTP features.       | Higher-level abstraction with conventions and easier development.               |
| **Learning Curve**               | Steeper learning curve due to manual setup. | Easier for beginners due to a more structured and feature-rich framework.       |
| **Community Support**            | Community support for Node.js.              | Active and large community support with a rich ecosystem of middleware.         |
| **Built-in Features**            | Minimal built-in features.                  | Extensive built-in features like routing, middleware, and template engines.     |

## Example using Express of get and post method

```javascript
const express = require("express");
const app = express();
const port = 4040;

// Handling GET requests
app.get("/", (req, res) => {
  res.send("Hello, Express! This is a GET request.");
});

app.post("/", (req, res) => {
  res.send("This is a POST request.");
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`This is a PUT request for user with ID ${userId}`);
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`This is a DELETE request for user with ID ${userId}`);
});

app.all("/other", (req, res) => {
  res.send(`This is a ${req.method} request.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

### Example-2

In this example we take some data which consist some key and value pairs. And here try to filter the particular catagory by giving different path

```javascript
const express = require("express");
const app = express();
const port = 4040;
const data = require("./data");

// Handling GET requests
app.get("/", (req, res) => {
  res.send("Hello, Express! This is a GET request.");
});

app.get("/bollywood", (req, res) => {
  // res.send(data);
  const result = data.filter((item) => item.category === "Bollywood");
  res.send(result);
});

app.get("/hollywood", (req, res) => {
  const userId = req.params.id;
  res.send(`This is a PUT request for user with ID ${userId}`);
});

app.get("/food", (req, res) => {
  const userId = req.params.id;
  res.send(`This is a DELETE request for user with ID ${userId}`);
});

app.all("/other", (req, res) => {
  res.send(`This is a ${req.method} request.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

```javascript
const data = [
  {
    id: 1,
    name: "Pizza",
    category: "Food",
    price: 280,
    image:
      "https://img.freepik.com/premium-photo/aesthetic-dripping-tasty-pizza-slice-generative-ai_863013-1954.jpg",
    text: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven",
  },
  {
    id: 2,
    name: "Burger",
    category: "Food",
    price: 290,
    image:
      "https://c4.wallpaperflare.com/wallpaper/672/503/735/fast-food-junk-food-food-hamburger-wallpaper-preview.jpg",
    text: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world",
  },
];
module.exports = data;
```

### Example 3

1. **Create a file named `data1.js` with some data:**

   ```javascript
   // data1.js
   module.exports = {
     message: "Data from data1.js",
   };
   ```

2. **Create a file named `data2.js` with some data:**

   ```javascript
   // data2.js
   module.exports = {
     message: "Data from data2.js",
   };
   ```

3. **Create your Express server in `server.js`:**

   ```javascript
   // server.js
   const express = require("express");
   const app = express();
   const port = 3000;

   // Import data from different files
   const data1 = require("./data1");
   const data2 = require("./data2");

   // Route 1: Send data from data1.js
   app.get("/route1", (req, res) => {
     res.json(data1);
   });

   // Route 2: Send data from data2.js
   app.get("/route2", (req, res) => {
     res.json(data2);
   });

   // Route 3: Send a custom message
   app.get("/route3", (req, res) => {
     res.send("Custom message from route3");
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

4. **Run your server:**
   ```
   node server.js
   ```

Now, you have an Express server with three routes:

- `/route1`: Sends data from `data1.js`
- `/route2`: Sends data from `data2.js`
- `/route3`: Sends a custom message

# Day4:

# Express Routing

**Routing** defines the way in which the client requests are handled by the application endpoints.

There are two ways to implement routing in node.js :

1:Using Framework: The most popular is Express.js.

2:Without using Framework

## Using Framework:

```javascript
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Sir");
});
app.post("/login", function (req, res) {
  res.send("this is the login page");
});
app.post("/signup", function (req, res) {
  res.send("this is the signup page");
});

app.listen(4011, () => {
  console.log("server is running");
});
```

## without using Framework:

```javascript
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/about") {
      res.write(" This is about us page");
      res.end();
    } else if (req.url === "/contact") {
      res.write(" This is contact us page");
      res.end();
    } else {
      res.write("Hello World!");
      res.end();
    }
  })
  .listen(4012, () => {
    console.log("server start at port 4012");
  });
```

> ### Perform routing in different files using Router()

### File: `app.js` (Main Application)

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Import the routes module
const routes = require("./routes");

// Use the routes module for the "/pages" path
app.use("/pages", routes);

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

### File: `routes.js` (Routes Module)

```javascript
const express = require("express");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.send("Home Page");
});

// Bollywood page
router.get("/bollywood", (req, res) => {
  res.send("Bollywood Page");
});

// Hollywood page
router.get("/hollywood", (req, res) => {
  res.send("Hollywood Page");
});

// Export the router to be used in other files
module.exports = router;
```

### Steps to Run the Example:

1. Save the above code in two separate files (`app.js` and `routes.js`).
2. Open a terminal and navigate to the directory containing these files.
3. Run `npm install express` to install the Express module (if you haven't already).
4. Run `node app.js` to start the Express server.
5. Open your browser and visit:
   - http://localhost:3000/pages/ (Home Page)
   - http://localhost:3000/pages/bollywood (Bollywood Page)
   - http://localhost:3000/pages/hollywood (Hollywood Page)

### Explanation:

- **`app.use('/pages', routes)`:** In the `app.js` file, we're telling Express to use the `routes` module for any path starting with `/pages`. This means that the routes defined in `routes.js` will be relative to `/pages`.

- **`express.Router()`:** In the `routes.js` file, we create an instance of `Router` using `express.Router()`. This allows us to define routes and middleware specific to this router.

- **`router.get('/', ...)`, `router.get('/bollywood', ...)`, etc.:** These are route handlers for different paths. They respond to GET requests for the specified paths under the `/pages` prefix.

- **`module.exports = router;`:** We export the router from `routes.js` so that it can be used in other files (in this case, `app.js`).

This modular approach makes it easy to organize and maintain your routes, especially as your application grows. Each page or feature can have its own file, and the main application file (`app.js`) remains clean and focused.

### Routing through 3 files

```javascript
const express = require("express");
const app = express();
const port = 4040;

// Import the routes module
const routes = require("./routes");

// Use the routes module for the "/pages" path
app.use("/pages", routes);

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

//routes.js

```javascript
const express = require("express");
const routerTwo = require("./routesTwo");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.send("Home Page");
});

router.use("/article", routerTwo);

// Export the router to be used in other files
module.exports = router;
```

//routestwo.js

```javascript
const express = require("express");
const routerTwo = express.Router();

// Bollywood page
routerTwo.get("/bollywood", (req, res) => {
  res.send("Bollywood Page");
});

// Hollywood page
routerTwo.get("/hollywood", (req, res) => {
  res.send("Hollywood Page");
});

module.exports = routerTwo;
```

## What is a Query Parameter?

A query parameter is a key-value pair appended to the end of a URL, typically used to pass information from a client to a server. Query parameters are separated from the URL path by a question mark (`?`) and from each other by an ampersand (`&`). They are commonly used to send additional data to the server, such as search terms, filters, or pagination details.

### Use of Query Parameters:

- **Filtering Data:** Query parameters can be used to filter data based on certain criteria.
- **Pagination:** Specify the page number and number of items per page.
- **Search Queries:** Pass search terms to the server.
- **Configuring Requests:** Customize the behavior of requests.

### Example 1: Filtering Data

Let's create an Express server that uses query parameters to filter a list of items. Save the following code in a file (e.g., `example1.js`):

```javascript
const express = require("express");
const app = express();
const port = 3000;

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Endpoint to get filtered items based on a query parameter
app.get("/api/items", (req, res) => {
  const category = req.query.category;

  if (!category) {
    return res.status(400).send("Category query parameter is required.");
  }

  const filteredItems = items.filter((item) => item.name.includes(category));
  res.json(filteredItems);
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

**Explanation:**

- This example defines an endpoint `/api/items` that expects a query parameter named `category`.
- If the `category` parameter is provided, it filters the list of items based on whether their names include the specified category.
- If the `category` parameter is not provided, it responds with a 400 Bad Request status.

**Testing:**

- Open your browser or a tool like Postman.
- Visit http://localhost:3000/api/items?category=Item to get items with names containing "Item."

### Example 2: If the age is grater than 18 then give the access

Save the following code in another file (e.g., `example2.js`):

```javascript
const express = require("express");
const app = express();
const port = 4040;

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Endpoint to get filtered items based on a query parameter
app.get("/api/items", (req, res) => {
  const { category, age } = req.query;
  // console.log(query);

  if (!category) {
    return res.status(400).send("Category query parameter is required.");
  }

  const filteredItems = items.filter((item) => item.name.includes(category));
  if (age >= 18) {
    return res.json(filteredItems);
  }
  return res.send("age is less then 18");
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

# Middleware:

**Middleware in Nodejs is a function that are invokes in the middle of the request-response process.**

**middleware is nothing but a function that runs even before the call goes to the API for which it is meant to be .**

- middleware is in between the server and the client that sits in the middle and intercepts incoming requests, processes them, and then passes them on to the next thing if there is nested middleware.

- in this it accepts 3 parameter like:(req,res,next)

- req object and response object are same as previous but the extra parameter is added that is next function

- **next()** is going to forword to next cycle if the autherization is succesfully completed if there is an error then it will not move forword and it will not hit the api it will cancel the request at that time only.

- Middleware refers to functions or sets of functions that have access to the request object (`req`), the response object (`res`), and the next function in the application's request-response cycle. Middleware can perform various tasks, modify request and response objects, end the request-response cycle, and call the next middleware in the stack.

## why we need the middleware?

- It can end the request and response cycle.

- it can call the next middleware by the next().

- it helps developers build applications more efficiently.

- It controls connections between application components

Middleware is used to:

- **Execute Code:** Perform actions before and after handling a request.
- **Modify Request/Response:** Add or modify properties of the request or response objects.
- **End Request-Response Cycle:** End the cycle prematurely if necessary.
- **Invoke the Next Middleware:** Call the next middleware in the stack.

### 3. Where Can We Use Middleware in Projects?

Middleware can be used at various stages in a project:

- **Logging:** Log information about incoming requests.
- **Authentication:** Check if a user is authenticated.
- **Error Handling:** Handle errors in a centralized location.
- **Parsing:** Parse incoming data (e.g., JSON, forms).
- **CORS Handling:** Set headers for Cross-Origin Resource Sharing.

### 4. How It Helps:

- **Modularity:** Breaks down application logic into modular, reusable components.
- **Orderly Execution:** Middleware functions are executed in a specific order.
- **Centralized Logic:** Allows centralizing common logic (e.g., logging, authentication) for easier maintenance.
- **Error Handling:** Can catch and handle errors in a centralized way.

### Example of Middleware:

Here's a simple example of a middleware function that logs information about incoming requests:

```javascript
// Middleware function
function loggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware in the stack
}

// Using the middleware in an Express app
const express = require("express");
const app = express();

// Apply the loggerMiddleware to all routes
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, Middleware!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### 5. Types of Middleware:

#### a. **Application-Level Middleware:**

- **Usage:** Applied to the entire application.
- **Example:** Logging middleware, authentication middleware.
- **Implementation:** `app.use(loggerMiddleware);`

#### b. **Router-Level Middleware:**

- **Usage:** Applied to specific routes.
- **Example:** Middleware for a specific route.
- **Implementation:** `router.use(middlewareFunction);`

#### c. **Error-Handling Middleware:**

- **Usage:** Specialized middleware to handle errors.
- **Example:** Middleware with four parameters (`(err, req, res, next)`).
- **Implementation:** `app.use((err, req, res, next) => { /* handle error */ });`

#### d. **Third-Party Middleware:**

- **Usage:** Developed by third parties.
- **Example:** Body parsing middleware (`express.json()`).
- **Implementation:** `app.use(express.json());`

#### e. **Built-In Middleware:**

- **Usage:** Included with Express.
- **Example:** `express.static` for serving static files.
- **Implementation:** `app.use(express.static('public'));`

#### f. **Custom Middleware:**

- **Usage:** Developed by the application.
- **Example:** Any middleware created specifically for the project.
- **Implementation:** Custom functions added with `app.use()` or `router.use()`.

Middleware provides flexibility and enhances the modularity of Express applications, allowing developers to structure their code in a more organized and maintainable way. Each type of middleware serves a specific purpose in the request-response cycle.

### Example of application level middleware :

```javascript
const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("middleware one is running");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("middleware two is running");
  next();
};

app.use(middleware1); // application level middleware

app.use(middleware2);

app.get("/", (req, res) => {
  // res.sendStatus(200)
  res.send("Home page");
});
app.listen(5001, () => {
  console.log("server is running on the port 5001");
});
```

### if the age is above 18 then give the acess

```javascript
const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("middleware one is running");
  if (!req.query.age) {
    res.send("please provide the age");
  } else if (req.query.age < 18) {
    res.send("you can't access the page ");
  } else {
    next();
  }
};

app.use(middleware1); // application level middleware

app.get("/", (req, res) => {
  // res.sendStatus(200)
  res.send("Home page");
});
app.listen(5001, () => {
  console.log("server is running on the port 5001");
});
```

### Example: Router-Level Middleware

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Middleware 1
const middlewareOne = (req, res, next) => {
  console.log("Middleware One - Logging for Home Page");
  next();
};

// Middleware 2
const middlewareTwo = (req, res, next) => {
  console.log("Middleware Two - Logging for About Page");
  next();
};

// Create a router
const router = express.Router();

// Apply middlewareOne to the home page route
router.get("/", middlewareOne, (req, res) => {
  res.send("Home Page");
});

// Apply middlewareTwo to the about page route
router.get("/about", middlewareTwo, (req, res) => {
  res.send("About Page");
});

// Use the router for a specific path
app.use("/pages", router);

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
```

**Explanation:**

1. **`middlewareOne` and `middlewareTwo`:**

   - Two middleware functions that log messages specific to their purposes.
   - Both call `next()` to pass control to the next middleware or route handler.

2. **Creating a Router:**

   - We create an instance of `express.Router()`.

3. **Applying Middleware and Routes:**

   - `router.get('/', middlewareOne, ...)`: Applies `middlewareOne` to the home page route.
   - `router.get('/about', middlewareTwo, ...)`: Applies `middlewareTwo` to the about page route.

4. **Using the Router:**
   - `app.use('/pages', router);`: Mounts the router at the `/pages` path.
   - Middleware and routes within the router will be applied for paths starting with `/pages`.

## error level middleware:

Error level middleware is a middleware function that is used to handle errors that occur during the request-response cycle app. middleware function is typically the last middleware function in the middleware stack, and it is responsible for catching any errors that were not handled by other middleware functions.

The error level middleware takes four arguments: err, req, res, and next.

The err argument is the error object that was thrown by a previous middleware function, or by the application code itself. The req argument is the request object, the res argument is the response object, and the next argument is a function that is called to pass control to the next middleware function in the stack.

```javascript
const express = require("express");
const app = express();

function errorHandler(err, req, res, next) {
  res.status(500).send("Something broke!");
}
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is running in 4000");
});
```

# What is CORS?

**CORS stands for Cross-Origin Resource Sharing**

CORS is a mechanism to allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

For example, if you had your web API on one server and your web app on another you could configure CORS in your Web API to allow your web app to make calls to your web API.

It is used to secure a certain web server from access by other domain like you want to connect the backend port into your frontend port then we use the cors which is sharing the data.

like:

```javascript
        const express = require("express");
        const cors=require("cors")
        const app = express();
        app.use(cors({
            origin:"*"   // with this any port can use it in the frontend to fetch the name and email using fetch or axios
        }))
        app.get("/data",(req, res) => {

            res.json([{
                id:1,
                "name":"akarsh gupta"
                "email":"ak@gmail.com"
            },

            {
                id:2,
                "name":"SHubham Kumar"
                "email":"sk@gmail.com"
            }
            ])
        })

        app.listen(4013)

```

# adding 404 error:

In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them. This behavior is because a 404 response simply indicates the absence of additional work to do.

Express has executed all middleware functions and routes, and found that none of them responded. All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:

like:

    app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
     })

### What is Body Parser?

`body-parser` is a middleware for handling HTTP POST requests in Express.js. It extracts the entire body portion of an incoming request stream and exposes it on `req.body` as something easier to interface with.

Body Parser is a middleware of Node JS used to handle HTTP POST request. Body Parser can parse string based client request body into JavaScript Object which we can use in our application.

It is used when the data we are accesing from the user side like a user fills the form then to use that request object we exposes it on req.body so in that time we need the body-parser.

This body-parser parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

if we are not using body-parser then it will lose the data, and request. body field will be empty or undifined. but if we are using the latest version of the express is then we can avoid and we can use insted express.json() instead of that.

### Use of Body Parser:

- **Parsing Request Body:** It parses incoming request bodies in a middleware before your handlers, available under `req.body`.
- **Handling Form Data:** Useful for handling form submissions and processing data sent in the body of a POST request.

### Latest Syntax and Usage:

`body-parser` was previously a separate package, but since Express 4.16.0, it has been added as part of the Express.js core. So, if you are using Express 4.16.0 or later, you don't need to install `body-parser` separately.

The latest syntax involves using the `express.json()` and `express.urlencoded()` middleware functions directly within Express. Here's an example:

The `express.urlencoded({ extended: true })` middleware in Express is used to parse incoming requests with URL-encoded payloads. Let's break down what this means:

#### URL-Encoded Bodies:

When you submit a form on a website, the data from the form is sent in the body of the HTTP request. The way this data is encoded in the request body can vary, and one common way is URL encoding. URL encoding is a way to represent special characters and spaces in a URL-friendly format.

For example, if you submit a form with the data:

```plaintext
name=John Doe&age=25
```

It will be URL-encoded as:

```plaintext
name=John%20Doe&age=25
```

Here, spaces are replaced with `%20`, and special characters are encoded as well. The data is formatted as key-value pairs separated by `&`, and each pair consists of a key and its corresponding value separated by `=`.

### `express.urlencoded({ extended: true })`:

This middleware in Express is responsible for parsing URL-encoded data in the request body. The `extended: true` option allows the parsing of rich objects and arrays.

When you set up this middleware in your Express application like this:

```javascript
app.use(express.urlencoded({ extended: true }));
```

It means that for incoming requests with a `Content-Type` of `application/x-www-form-urlencoded` (which is the default for HTML forms), the middleware will parse the URL-encoded data in the request body and make it available in `req.body`.

### Example:

Suppose you have a form with two fields, "username" and "password," and the form is submitted with the data:

```plaintext
username=johndoe&password=secretpass
```

The `express.urlencoded({ extended: true })` middleware will parse this data and make it available in `req.body`:

```javascript
{
  username: 'johndoe',
  password: 'secretpass'
}
```

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Use middleware to parse JSON bodies
app.use(express.json());

// Use middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Example route handling POST request
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

**Explanation:**

1. **`express.json()`:**

   - Middleware to parse JSON bodies.
   - Makes `req.body` available for JSON payloads.

2. **`express.urlencoded({ extended: true })`:**

   - Middleware to parse URL-encoded bodies.
   - `extended: true` allows parsing of rich objects and arrays.

3. **Example Route:**

   - Handles a POST request to the `/submit` route.
   - Logs the parsed `req.body` and sends a response.

4. **`app.use(...)`:**
   - Applies the middleware globally to all routes.

### Using Body Parser in Projects:

1. **Install Express:**

   ```bash
   npm install express
   ```

2. **Create Your Express App:**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;
   ```

3. **Use `express.json()` and `express.urlencoded()`:**

   ```javascript
   // Use middleware to parse JSON bodies
   app.use(express.json());

   // Use middleware to parse URL-encoded bodies
   app.use(express.urlencoded({ extended: true }));
   ```

4. **Define Your Routes:**

   ```javascript
   // Example route handling POST request
   app.post("/submit", (req, res) => {
     console.log(req.body);
     res.send("Data received successfully!");
   });
   ```

5. **Start the Server:**
   ```javascript
   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

This example sets up a basic Express server with middleware to parse both JSON and URL-encoded bodies. You can expand on this foundation to handle various types of requests and build more complex applications.

//backend

```javascript
const express = require("express");
const app = express();
const port = 6500;
const cors = require("cors");

app.use(cors({ origin: "*" }));

// Use middleware to parse JSON bodies
app.use(express.json());

// Use middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Example route handling POST request
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### Explanation:

1. express.json():

Middleware to parse JSON bodies.
Makes req.body available for JSON payloads.
express.urlencoded({ extended: true }):

2. Middleware to parse URL-encoded bodies.
   extended: true allows parsing of rich objects and arrays.
   Example Route:

3. Handles a POST request to the /submit route.
   Logs the parsed req.body and sends a response.
   app.use(...):

4. Applies the middleware globally to all routes.

//frontend

```javascript
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");

  const submitData = async () => {
    try {
      const result = await axios.post("http://localhost:6500/submit", { data });
      setResponse(result.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1>React Server Interaction Example</h1>

      <label htmlFor="data">Enter Data:</label>
      <input
        type="text"
        id="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button type="button" onClick={submitData}>
        Submit
      </button>

      <div>
        <strong>Server Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
```

### 1. What is Password Hashing?

Password hashing is a security measure used to protect user passwords by converting them into a fixed-length string of characters, which is typically a hash value. Hashing is a one-way function, meaning it is computationally infeasible to reverse the process and obtain the original password. This ensures that even if the stored hashes are compromised, attackers cannot easily retrieve the actual passwords.

### Password Hashing in Node.js with Bcrypt:

### 2. What is Bcrypt?

Bcrypt is a password hashing algorithm designed by Niels Provos and David Mazières based on the Blowfish cipher. The name “bcrypt” is made of two parts: b and crypt, where b stands for Blowfish and crypt is the name of the hashing function used by the Unix password system.

Bcrypt is a popular library for securely hashing passwords. It employs a key derivation function specifically designed for password hashing. Bcrypt is widely used because it incorporates a salt (random data) into the hash, making it resistant to rainbow table attacks and ensuring that the same password will produce different hashes.

### 3. How Does Bcrypt Work?

Bcrypt uses the Blowfish cipher to hash passwords. It involves the following key features:

- **Salting:** Bcrypt automatically generates and includes a unique salt for each password hash. This prevents attackers from using precomputed tables (rainbow tables) to crack multiple hashes at once.

- **Cost Factor** Bcrypt also uses a cost factor (or work factor) to determine how long it takes to generate a hash. This cost factor can be increased to make it slower as hardware power increases. The higher the cost factor, the more secure the hash and the slower the process. Therefore, you need to find the right balance between security and speed.

**Bcrypt provides several methods** for hashing and comparing passwords, both synchronous and asynchronous. Let's dive into the details of each method:

### 1. `bcrypt.genSalt(rounds, callback)`

- **Asynchronous:** This method generates a salt using the specified number of `rounds` (the cost factor). More rounds result in a more secure hash but also increase the computation time.
- **Parameters:**
  - `rounds`: Number of rounds to use for generating the salt.
  - `callback(error, salt)`: A callback function that receives the generated salt.

### 2. `bcrypt.genSaltSync(rounds)`

- **Synchronous:** This is the synchronous version of `genSalt`. It returns the generated salt directly instead of using a callback.

- **Parameters:**
  - `rounds`: Number of rounds to use for generating the salt.

### 3. `bcrypt.hash(data, salt, callback)`

- **Asynchronous:** This method generates a hash for the given data using the provided salt.

- **Parameters:**
  - `data`: The data to be hashed.
  - `salt`: The salt generated using `genSalt`.
  - `callback(error, hash)`: A callback function that receives the generated hash.

### 4. `bcrypt.hashSync(data, salt)`

- **Synchronous:** This is the synchronous version of `hash`. It returns the generated hash directly instead of using a callback.

- **Parameters:**
  - `data`: The data to be hashed.
  - `salt`: The salt generated using `genSalt`.

### 5. `bcrypt.compare(data, hash, callback)`

- **Asynchronous:** This method compares the given data with the provided hash to check if they match.

- **Parameters:**

  - `data`: The data to be compared.
  - `hash`: The hash to be compared against.
  - `callback(error, result)`: A callback function that receives a boolean `result` indicating whether the comparison is successful.

- **Example:**

### 6. `bcrypt.compareSync(data, hash)`

- **Synchronous:** This is the synchronous version of `compare`. It returns a boolean value indicating whether the comparison is successful.

- **Parameters:**
  - `data`: The data to be compared.
  - `hash`: The hash to be compared against.

### Summary:

- **Salt Generation:**

  - Use `genSalt` and `genSaltSync` for asynchronous and synchronous salt generation, respectively.

- **Hash Generation:**

  - Use `hash` and `hashSync` for asynchronous and synchronous hash generation, respectively.

- **Password Comparison:**
  - Use `compare` and `compareSync` for asynchronous and synchronous password comparison, respectively.

### Important Notes:

- **Asynchronous vs. Synchronous:**

  - Asynchronous methods are preferred in Node.js applications to avoid blocking the event loop, especially during heavy computations.

- **Security Note:**
  - Always use asynchronous methods for password hashing and comparison, especially in production, to prevent potential performance issues.

These methods provide a convenient and secure way to handle password hashing and comparison in your Node.js applications using bcrypt.

### 4. Examples of Password Hashing with Bcrypt in Node.js:

#### Bcrypt Dependencies:

```bash
npm install bcrypt
```

#### Password Encryption in Node.js using the JavaScript async Promise:

```javascript
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Example usage
hashPassword("mySecretPassword")
  .then((hashedPassword) => {
    console.log("Hashed Password:", hashedPassword);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Auto-generating a Salt and Hash:

```javascript
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

// Example usage
hashPassword("mySecretPassword")
  .then((hashedPassword) => {
    console.log("Hashed Password:", hashedPassword);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Using the `bcrypt.compare` Function to Verify Passwords:

```javascript
const bcrypt = require("bcrypt");

async function comparePasswords(inputPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  return isMatch;
}

// Example usage
const hashedPassword = "$2b$10$..."; // Replace with a real hashed password
comparePasswords("userInputPassword", hashedPassword)
  .then((isMatch) => {
    if (isMatch) {
      console.log("Password is correct");
    } else {
      console.log("Password is incorrect");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 5. Node.js Bcrypt Password Hashing Information:

In Node.js, Bcrypt provides a secure and efficient way to hash passwords. It automatically handles salting and allows you to control the work factor to adapt to the changing landscape of security threats.

### 6. Password Hashing Data Costs:

- **Salt:** Bcrypt automatically generates and stores a unique salt for each password. This adds a small overhead in terms of storage but significantly enhances security.

- **Hash Length:** The length of the resulting hash is fixed, regardless of the input password length. This consistency simplifies storage and retrieval.

### 7. Benefits of Password Hashing in Node.js with Bcrypt:

- **Resistance to Attacks:** Bcrypt provides strong resistance against common attacks, including rainbow table attacks and brute force attacks.

- **Salting:** Automatic salting ensures that each password hash is unique, even for users with the same password.

- **Adaptability:** The work factor can be adjusted to adapt to changes in hardware capabilities, maintaining a high level of security over time.

- **Ease of Use:** Bcrypt is user-friendly, making it easy to incorporate password hashing into your Node.js applications.

Using Bcrypt for password hashing is considered a best practice in web development for securing user credentials. It addresses many of the common vulnerabilities associated with storing passwords and provides a solid foundation for authentication security in Node.js applications.

## login and signup API with bcrypt

```javascript
//server.js
const express = require("express");
const app = express();
app.use(express.json());

// Import the routes module
const routes = require("./UserRoute");

// Use the routes module for the "/pages" path
app.use("/pages", routes);

app.listen(8800, () => {
  console.log("server is running fine");
});
```

```javascript
//userRouter()

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const saltRound = 10;

let arr = [];
router.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);
  // const randomvalue = bcrypt.genSaltSync(saltRound)
  //     console.log(randomvalue,"generateSalt")

  let account = arr.find((item) => item.email === loginData.email);
  if (account) {
    return res.send("This email is already exist");
  }
  data.mobile = bcrypt.hashSync(data.mobile, 10);
  // console.log(hashpass, "hashed password");
  arr.push(data);
  console.log(arr, "database");
  return res.send("user is registered");
});

router.post("/login", async (req, res) => {
  const loginData = req.body;
  // console.log(data)
  let account = arr.find((item) => item.email === loginData.email);
  console.log(account);
  if (!account) {
    return res.send("user is not registered");
  }
  const validate = await bcrypt.compare(loginData.mobile, account.mobile);
  if (validate) {
    return res.send("user logged in ");
  } else {
    return res.send("password is wrong");
  }
});

module.exports = router;
```

Authentication and authorization are two fundamental concepts in the field of security, particularly in the context of computer systems and applications.

### Authentication:

When we are talking about authentication then we say that if a
person is providing his credential we will be checking if his credentials are correct
or not or if he is already an existing user or not

**Definition:**
Authentication is the process of verifying the identity of a user, system, or entity. It is the mechanism by which a system validates the claimed identity of an entity, typically through the presentation of credentials such as usernames and passwords, biometric data, security tokens, or other authentication factors.

**Purpose:**
The primary goal of authentication is to ensure that the user or entity accessing a system is who they claim to be.

**Key Components:**

1. **Credentials:** Information provided by the user to prove their identity.
2. **Authentication Factors:** Something the user knows (password), something the user has (security token), or something the user is (biometric data).

### Authorization:

When we are talking about authorization then we check that the
user who has logged is having access for this specific data or not. For example,
an Uber driver can not book the cab from the same account with which he has
logged in Uber application as driver.

**Definition:**
Authorization is the process of granting or denying access to specific resources, functionalities, or actions based on the authenticated user's privileges and permissions. It is the mechanism that determines what actions a user or system is allowed to perform within a given system or application.

**Purpose:**
The primary goal of authorization is to control and restrict access to resources, ensuring that users have appropriate permissions to perform specific actions.

**Key Components:**

1. **Roles and Permissions:** Users are assigned roles, and roles are associated with specific permissions or access levels.
2. **Access Control Lists (ACLs):** Lists that define what actions or operations a particular user or system is allowed or denied.

### Differences:

1. **Focus:**

   - **Authentication:** Centers on verifying identity.
   - **Authorization:** Centers on granting or denying access based on identity.

2. **Goal:**

   - **Authentication:** Ensures that a user is who they claim to be.
   - **Authorization:** Controls what a user can or cannot do after authentication.

3. **Process:**

   - **Authentication:** Involves verifying identity through the presentation of credentials or other authentication factors.
   - **Authorization:** Involves determining what actions or resources a user is allowed to access based on their authenticated identity.

4. **Key Components:**

   - **Authentication:** Credentials, authentication factors.
   - **Authorization:** Roles, permissions, access control lists.

5. **Timing:**

   - **Authentication:** Typically occurs first in the user access process.
   - **Authorization:** Occurs after authentication and is dependent on the authenticated user's identity.

6. **Example:**
   - **Authentication:** Verifying a user's username and password during login.
   - **Authorization:** Determining whether a user has the permission to delete a file after successful authentication.

### Relationship:

Authentication and authorization work hand in hand in the context of user access control. After a user is authenticated (proven to be who they claim to be), the system then uses authorization mechanisms to determine what that authenticated user is allowed to do or access.

### What is JSON Web Token (JWT)?

A JSON Web Token (JWT) is a compact, URL-safe means of representing claims between two parties. These claims are typically used for authentication and authorization purposes. JWTs are commonly used in web development to securely transmit information between parties, especially between a client and a server.

JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.

### Advantages of Node.js Authentication with JWT:

1. **Stateless Authentication:**

   - JWTs enable stateless authentication, meaning the server doesn't need to store the user's session information. This makes it easier to scale applications horizontally.

2. **Cross-Domain Authorization:**

   - JWTs can be used across different domains, making them suitable for microservices architectures and distributed systems.

3. **Security:**

   - JWTs can be signed and optionally encrypted, providing a secure way to transmit data between parties. The signature ensures data integrity, and encryption adds an extra layer of confidentiality.

4. **Reduced Database Load:**

   - Since JWTs are self-contained and include necessary information, there's no need to query the database for user information on every request. This reduces the load on the database.

5. **Flexibility:**

   - JWTs are flexible and can include custom claims, allowing developers to encode additional information beyond standard user authentication details.

6. **Efficient Communication:**
   - Being compact and URL-safe, JWTs are efficient for transmitting information over the network. They are commonly used in HTTP headers or query parameters.

### The Need for JSON Web Token:

The need for JWT arises from challenges associated with traditional session-based authentication:

1. **Statelessness:**

   - HTTP is a stateless protocol, and maintaining user sessions traditionally requires server-side storage or database queries. JWTs allow stateless authentication by encoding user information directly into the token.

2. **Cross-Domain Communication:**

   - Cookies, traditionally used for session management, have domain restrictions. JWTs can be used across different domains, making them suitable for modern web applications with separate frontend and backend servers.

3. **Scalability:**
   - Stateless authentication is crucial for horizontal scalability. As applications grow, stateless solutions like JWTs make it easier to distribute authentication responsibilities.

### Structure of a JWT:

A JWT consists of three parts: a header, a payload, and a signature. These parts are base64-encoded and concatenated with periods (`.`) to form the final JWT.

1. **Header:**

   - Contains information about the type of token and the signing algorithm used. Example:
     ```json
     {
       "alg": "HS256",
       "typ": "JWT"
     }
     ```

2. **Payload:**

   - Contains claims. Claims are statements about an entity (typically, the user) and additional metadata. Example:
     ```json
     {
       "sub": "1234567890",
       "name": "John Doe",
       "iat": 1516239022
     }
     ```

3. **Signature:**
   - Created by combining the encoded header, encoded payload, and a secret. The signature ensures the integrity of the token. Example:
     ```
     HMACSHA256(
       base64UrlEncode(header) + "." +
       base64UrlEncode(payload),
       secret
     )
     ```

### JWT Use Cases:

1. **Authentication:**

   - JWTs are widely used for user authentication. After a user logs in, the server generates a JWT containing user information. The client includes this JWT in subsequent requests to access protected resources.

2. **Single Sign-On (SSO):**

   - JWTs facilitate single sign-on across multiple services. Once a user authenticates with one service and receives a JWT, they can use it to access other services without re-authenticating.

3. **Information Exchange:**

   - JWTs are suitable for securely transmitting information between parties. They are often used in authorization and access control scenarios.

4. **Stateless Sessions:**

   - JWTs can represent session information, allowing for stateless sessions without the need for server-side storage.

5. **Secure Data Exchange:**
   - JWTs can be used to securely transmit data between a client and a server. The signature ensures that the data hasn't been tampered with during transmission.

### Installation:

Make sure to install the `jsonwebtoken` library:

```bash
npm install jsonwebtoken
```

### Example Code:

```javascript
const jwt = require("jsonwebtoken");
// Secret key used for signing and verifying the JWT
const secretKey = "mySecretKey";

// Sample user data
const user = {
  id: 123,
  username: "john_doe",
  role: "user",
};

// Creating a JWT (token creation)
const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
console.log("Generated Token:", token);

// Verifying and decoding the JWT (token verification)
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error("Verification Error:", err.message);
    return;
  }
  console.log("Decoded Token:", decoded);
});
```

### Explanation:

1. **Secret Key:**

   - You should use a strong, secret key for signing and verifying the JWT. In this example, the key is set to `'mySecretKey'`, but in a real-world scenario, you should use a more secure key and possibly store it in a secure environment.

2. **Sample User Data:**

   - The `user` object represents the data you want to include in the JWT. In this case, it includes `id`, `username`, and `role`.

3. **Token Creation (`jwt.sign`):**

   - The `jwt.sign` function is used to create a JWT. It takes the user data, secret key, and optional options (e.g., expiration time) as arguments.

4. **Token Verification (`jwt.verify`):**

   - The `jwt.verify` function is used to verify and decode the JWT. It takes the token, secret key, and a callback function as arguments. If the token is valid, the callback receives the decoded payload.

5. **Expiration Time (`expiresIn`):**
   - In this example, the token has an expiration time of 1 hour. After this time, the token will no longer be valid.

### Note:

- Always handle errors properly, especially during token verification. The `err` parameter in the callback of `jwt.verify` will be `null` if the verification is successful.

- This is a basic example, and in a real-world scenario, you would typically generate a token during the authentication process and then use that token for subsequent requests to access protected resources.

- Ensure that the secret key is kept secret and never exposed to clients.

This example provides a straightforward illustration of how to use `jwt.sign` and `jwt.verify` for token creation and verification.

### bearer token

A bearer token is a type of access token that is typically used in the OAuth 2.0 authentication framework. It is called a "bearer" token because the bearer of the token is granted access. In other words, whoever possesses the token is assumed to have the right to access the associated resources.

Bearer tokens are commonly used for securing API endpoints and providing access to protected resources. They are transmitted in HTTP headers during requests to authenticate and authorize the requester.

Bearer tokens can be easily integrated into various authentication protocols, such as OAuth 2.0, providing compatibility with standard authentication frameworks.

### Example Usage in HTTP Header:

When making a request to a protected resource, the bearer token is included in the HTTP Authorization header. The format typically looks like this:

```
Authorization: Bearer <token>
```

### **Is It Necessary to Add `Bearer` Before the Token?**

No, it's **not technically required**, but it's a **best practice**. Let me explain why.

---

### **Why `Bearer` is Commonly Used?**

In **authentication and authorization**, the `Authorization` header typically follows this format:

```
Authorization: Bearer <token>
```

This is part of the **OAuth 2.0 standard** and is widely used in APIs to distinguish different types of tokens (e.g., `Basic`, `Digest`, `Bearer`).

- `"Bearer"` tells the server **what type of authentication** is being used.
- It helps when **multiple authentication methods** are supported.

---

### **Why Does Your Code Work Without `Bearer`?**

In your modified code:

```javascript
const decoded = jwt.verify(authHeader, secretKey);
```

- You're passing `authHeader` directly, **assuming** it contains only the token.
- If you send just the token (`eyJhbGciOiJIUz...`), it works fine.

However, in standard practice, APIs expect the format:

```
Authorization: Bearer <token>
```

So in your **original approach**, you extracted the token using:

```javascript
const token = authHeader.split(" ")[1];
```

This is required **only if "Bearer" is present**.

### **When Should You Use `Bearer`?**

✅ **Use "Bearer"** when:

- You're following **OAuth 2.0** best practices.
- Your API **expects multiple authentication types** (Basic, Digest, etc.).
- You want **standardized headers** across different services.

❌ **You can omit "Bearer"** when:

- Your API **only uses JWT** and nothing else.
- You control both frontend and backend and don’t need to follow external API standards.

### **Difference Between Basic, Digest, and Bearer Authentication**

In web authentication, different authentication schemes are used for securing API requests. The most common ones are **Basic**, **Digest**, and **Bearer** authentication. Here's a breakdown of how they work and their differences:

---

## **🔹 Key Differences Between Basic, Digest, and Bearer Auth**

| Authentication Type | Security                                       | How It Works                                | Use Case                                |
| ------------------- | ---------------------------------------------- | ------------------------------------------- | --------------------------------------- |
| **Basic Auth**      | 🔴 Weak (sends credentials with every request) | Base64-encoded `username:password`          | Internal APIs, simple apps              |
| **Digest Auth**     | 🟡 More secure (hashes credentials)            | Uses nonce and hashed password              | Legacy systems, security-conscious apps |
| **Bearer Token**    | 🟢 Most secure                                 | Uses a token (e.g., JWT) for authentication | Modern APIs, OAuth, SSO                 |

---

## **🔹 Which One Should You Use?**

- ✅ **For secure modern APIs:** Use **Bearer Token (JWT)**
- ✅ **For simple, internal APIs:** **Basic Auth** can work if over HTTPS.
- ✅ **For older systems needing better security than Basic:** Use **Digest Auth**.
- ❌ **Avoid Basic Auth without HTTPS** (passwords are easily decoded!).

---

### **Final Recommendation**

For most **modern web applications and APIs**, **Bearer Token (JWT)** authentication is the best choice. It offers **better security, flexibility, and scalability** compared to Basic or Digest authentication.

## WebSockets vs Socket.io

WebSockets is a communication protocol that enables two-way, real-time communication between a client and a server. It establishes a full-duplex communication channel over a single TCP connection, allowing data to be sent and received simultaneously 12.

Socket.IO is a library that provides an abstraction layer on top of WebSockets, making it easier to create real-time applications. It offers additional features such as automatic reconnection, event-based notifications, and more 134.

1. **Transport Protocols:**

   - **WebSocket:**
     - WebSocket is a communication protocol that provides a full-duplex communication channel over a single, long-lived connection.
     - It operates directly on top of the TCP protocol.
   - **Socket.IO:**
     - Socket.IO uses WebSocket as its primary transport, but it has a built-in abstraction layer that allows it to use other transport methods like long polling.

2. **Fallback Mechanisms:**

   - **WebSocket:**
     - WebSocket doesn't have built-in fallback mechanisms. If a WebSocket connection is not supported or is blocked, the communication fails.
   - **Socket.IO:**
     - Socket.IO includes fallback mechanisms, such as HTTP long polling, that allow communication to continue even in environments where WebSocket connections are restricted.

3. **Ease of Use:**

   - **WebSocket:**
     - WebSocket is a lower-level protocol, and implementing it directly requires more effort. Libraries like `ws` in Node.js simplify WebSocket usage.
   - **Socket.IO:**
     - Socket.IO is designed for ease of use. Its event-driven model and abstraction layer make it simpler to implement real-time communication without dealing with the complexities of raw WebSocket.

4. **Features:**

   - **WebSocket:**
     - WebSocket is a protocol for real-time, bidirectional communication but lacks some of the higher-level features provided by Socket.IO.
   - **Socket.IO:**
     - Socket.IO builds on WebSocket and adds features like event-based communication, room and namespace support, and automatic fallback mechanisms.

5. **Use Cases:**
   - **WebSocket:**
     - Suitable for scenarios where direct, raw WebSocket communication is sufficient, and fallback mechanisms are not a requirement.
   - **Socket.IO:**
     - Suitable for applications where real-time communication is critical, and the ability to fallback to other transports is important for compatibility in diverse network environments.

### 1. Introduction to Socket:

**Socket:**

- A socket is a communication endpoint that allows data to be exchanged between processes or devices over a network.
- In the context of Node.js, the term "socket" often refers to the use of WebSockets or the `net` module for handling TCP sockets.

**Socket.IO** is a JavaScript library that enables real-time, bidirectional communication between clients (typically web browsers) and servers. It is built on top of the WebSocket protocol but provides additional features and fallback mechanisms to support various transport methods, including WebSocket, HTTP long polling, and more.

#### 2. Need for Sockets:

**Why Sockets:**

- Sockets enable real-time, bidirectional communication between a client and a server.
- Traditional HTTP communication is request-response-based, which may not be efficient for scenarios requiring instant updates, such as chat applications, live notifications, and collaborative editing.

**Use Cases:**

- Chat applications.
- Real-time dashboards.
- Multiplayer online games.
- Live notifications and updates.

#### 3. Difference between HTTP and Socket:

**HTTP:**

- **Request-Response Model:** HTTP is based on a request-response model, where a client sends a request, and the server responds.
- **Stateless:** Each HTTP request is stateless, meaning it doesn't maintain information about previous requests.
- **Connection per Request:** Typically, a new connection is established for each request, which can be inefficient for real-time communication.

**Socket:**

- **Full-Duplex Communication:** Sockets allow full-duplex communication, meaning both the client and server can send data independently at any time.
- **Persistent Connection:** Sockets maintain a persistent connection, eliminating the need to establish a new connection for each data exchange.
- **Real-Time Updates:** Sockets are well-suited for scenarios requiring real-time updates and bidirectional communication.

### Key Features of Socket.IO:

1. **Real-time Bidirectional Communication:**

   - Socket.IO enables real-time communication between clients and servers, allowing instant data exchange.

2. **WebSocket Support:**

   - While Socket.IO uses WebSocket as its primary transport method, it can automatically fall back to other transport protocols if WebSocket is not supported.

3. **Fallback Mechanisms:**

   - Socket.IO includes fallback mechanisms, such as long polling, to maintain communication even in environments where direct WebSocket connections might be restricted.

4. **Event-Based Communication:**

   - Communication in Socket.IO is event-driven. Clients and servers can emit events and listen for events, making it easy to send and receive messages.

5. **Room and Namespace Support:**
   - Socket.IO supports the concept of rooms and namespaces, allowing you to organize communication channels and target messages to specific groups of clients.

## Step-1

//server side

```javascript
const express = require("express");
const socket = require("socket.io");
const app = express();
const server = app.listen(5000, () => {
  console.log("server started");
});

// Attach Socket.IO to the server with CORS configuration
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

// Event listener for new socket connections
io.on("connection", (socketClient) => {
  console.log(socketClient.id, "clients id");

  // Event listener for 'MESSAGE' event from the client
  socketClient.on("MESSAGE", (clientdata) => {
    console.log(clientdata, "client data is coming ");
    socketClient.emit("Client", clientdata);
  });
});

app.get("/", (req, res) => {
  res.send("home page");
});
```

//client side

```javascript
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create a socket connection to the server
const socket = io('http://localhost:5000/');

const App = () => {

  //see the data in frontend
  useEffect(() => {
    socket.on('Client', (data) => {
      console.log(data,"data");
    });
  }, []);

   // Event handler for sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit('MESSAGE', "Hello how are you");
  }

  return (
    <div>
      <div style={{textAlign:"center"}}>
        Socket client side
        <br/>
         {/* Button for sending a regular message */}
        <button style={{border:"2px solid black",backgroundColor:"pink", width:"300px"}} onClick={handleSendMessage}>Send Message</button>
        <hr />
  );
};

export default App;

```

### //update clent side with input field

```javascript
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create a socket connection to the server
const socket = io("http://localhost:5000/");

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  // Event listeners for various socket events
  useEffect(() => {
    socket.on("Client", (data) => {
      console.log(data, "data");
      setReceivedMessages(data);
    });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(inputValue, "input value");
    socket.emit("MESSAGE", inputValue);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Socket client side
        <br />
        <input
          type="text"
          name="msg"
          value={inputValue}
          onChange={handleChange}
        />
        <hr />
        {/* Button for sending a regular message */}
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={handleSendMessage}
        >
          Send Message
        </button>
        <hr />
        <hr />
        <h1>redata: {receivedMessages}</h1>
      </div>
    </div>
  );
};

export default App;
```

## Full code of socket

//server side code

```javascript
const express = require("express");
const socket = require("socket.io");
const app = express();
const server = app.listen(5000, () => {
  console.log("server started");
});

// Attach Socket.IO to the server with CORS configuration
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

// Event listener for new socket connections
io.on("connection", (socketClient) => {
  console.log(socketClient.id, "clients id");

  // Event listener for 'MESSAGE' event from the client
  socketClient.on("MESSAGE", (clientdata) => {
    console.log(clientdata, "clientdata");
    socketClient.emit("Client", clientdata);
  });

  socketClient.on("BROADCAST", (clientdataBroadcast) => {
    console.log(clientdataBroadcast);
    io.emit("sendmsgtoall", clientdataBroadcast);
  });
  socketClient.on("EXCLUSIVEBROADCAST", (clientdataBroadcast) => {
    console.log(clientdataBroadcast);
    socketClient.broadcast.emit("EXCLUSIVEBROADCAST", clientdataBroadcast);
  });

  // Event listener for 'JOINROOM' event from the client
  socketClient.on("JOINROOM", (ClientRoom) => {
    console.log(ClientRoom);
    socketClient.join(ClientRoom);
    io.to(ClientRoom).emit("JOINROOMSUCCESS", "joined success");

    // Event listener for 'sendroommessage' event from the client
    socketClient.on("sendroommessage", (clientdata) => {
      io.to(ClientRoom).emit("sendtoroomMessage", clientdata);
    });
  });
});

app.get("/", (req, res) => {
  res.send("home page");
});
```

//client side code

```javascript
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create a socket connection to the server
const socket = io("http://localhost:5000/");

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  // const socket = io('http://localhost:5000/');

  // Event listeners for various socket events
  useEffect(() => {
    socket.on("Client", (data) => {
      console.log(data);
    });
    socket.on("sendmsgtoall", (data) => {
      console.log(data);
    });
    socket.on("EXCLUSIVEBROADCAST", (data) => {
      console.log(data);
    });
    socket.on("sendtoroomMessage", (data) => {
      console.log(data);
    });
    socket.on("JOINROOMSUCCESS", (data) => {
      console.log(data);
    });
  }, []);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(inputValue);
    socket.emit("MESSAGE", inputValue);
  };

  // Event handler for broadcasting a message to all participants
  const handleBroadcast = (e) => {
    e.preventDefault();
    socket.emit("BROADCAST", inputValue);
  };

  const handleExclusiveBroadcast = (e) => {
    e.preventDefault();
    socket.emit("EXCLUSIVEBROADCAST", inputValue);
  };
  const joinRoom = (e) => {
    e.preventDefault();
    let roomName = prompt("Please provide a room name:");
    socket.emit("JOINROOM", roomName);
  };

  const sendToRoom = (e) => {
    e.preventDefault();
    console.log("cliecked", inputValue);
    socket.emit("sendroommessage", inputValue);
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Socket client side
        <br />
        <input
          type="text"
          name="msg"
          value={inputValue}
          onChange={handleChange}
        />
        <hr />
        {/* Button for sending a regular message */}
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={handleSendMessage}
        >
          Send Message
        </button>
        <hr />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={handleBroadcast}
        >
          Send To all participants
        </button>
        <hr />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={handleExclusiveBroadcast}
        >
          Send To all EXCLUSIVEBROADCAST
        </button>
        <hr />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={joinRoom}
        >
          Join Room
        </button>
        <hr />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "pink",
            width: "300px",
          }}
          onClick={sendToRoom}
        >
          Send To all friends who have joined the room
        </button>
        <hr />
        {receivedMessages}
      </div>
    </div>
  );
};

export default App;
```

```javascript
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const dataStore = createContext();

const CntxtAPI = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog"); // Replace with your backend API URL
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <dataStore.Provider value={data}>{props.children}</dataStore.Provider>;
};

export default CntxtAPI;
```

# MONGODB

## DATA

Data is a collection of a distinct small unit of information. It can be used in a variety of forms like text, numbers, media, bytes, etc. it can be stored in pieces of paper or electronic memory, etc.

Word 'Data' is originated from the word 'datum' that means 'single piece of information.' It is plural of the word datum.

In computing, Data is information that can be translated into a form for efficient movement and processing. Data is interchangeable.

## DATABASE

Absolutely, let's go through the topics for Day 1:

### 1. Introduction to Databases (DB):

#### What is a Database?

- A database is a structured set of data organized for efficient retrieval and manipulation.
  Database handlers create a database in such a way that only one set of software program provides access of data to all the users.

- The main purpose of the database is to operate a large amount of information by storing, retrieving, and managing data.

- There are many dynamic websites on the World Wide Web nowadays which are handled through databases. For example, a model that checks the availability of rooms in a hotel. It is an example of a dynamic website that uses a database.

- There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc.

### Relational Database

1970 - Present: It is the era of Relational Database and Database Management. In 1970, the relational model was proposed by E.F. Codd.

Relational database model has two main terminologies called instance and schema.

The instance is a table with rows or columns

Schema specifies the structure like name of the relation, type of each column and name.

### Cloud database

Cloud database facilitates you to store, manage, and retrieve their structured, unstructured data via a cloud platform. This data is accessible over the Internet. Cloud databases are also called a database as service (DBaaS) because they are offered as a managed service.

Some best cloud options are:

AWS (Amazon Web Services)
Snowflake Computing
Oracle Database Cloud Services
Microsoft SQL server
Google cloud spanner

#### Advantages of cloud database

Lower costs:
Generally, company provider does not have to invest in databases. It can maintain and support one or more data centers.

Automated:
Cloud databases are enriched with a variety of automated processes such as recovery, failover, and auto-scaling.

Increased accessibility:
You can access your cloud-based database from any location, anytime. All you need is just an internet connection.

A database is usually controlled by a DBMS.
DBMS stands for the database management system.

### DBMS (Data Base Management System)

Database management System is software which is used to store and retrieve the database. For example, Oracle, MySQL, etc.; these are some popular DBMS tools.

- DBMS provides the interface to perform the various operations like creation, deletion, modification, etc.
- DBMS allows the user to create their databases as per their requirement.
- DBMS accepts the request from the application and provides specific data through the operating system.
- DBMS contains the group of programs which acts according to the user instruction.
- It provides security to the database.

#### Advantage of DBMS

a. Controls redundancy

It stores all the data in a single database file, so it can control data redundancy.

b. Data sharing

An authorized user can share the data among multiple users.

c. Backup

It providesBackup and recovery subsystem. This recovery system creates automatic data from system failure and restores data if required.

d. Multiple user interfaces

It provides a different type of user interfaces like GUI, application interfaces.

#### Disadvantage of DBMS

Size:

It occupies large disk space and large memory to run efficiently.

Cost:

DBMS requires a high-speed data processor and larger memory to run DBMS software, so it is costly.

Complexity:

DBMS creates additional complexity and requirements.

![DBMS](https://assets-global.website-files.com/6130fa1501794e37c21867cf/632debee3bff316b1ad29cdf_Database%20Management%20System.png)

![dbms](https://www.deepakbhatt.in/wp-content/uploads/2022/03/What-is-DATA-DBMS-Database-System-Complete-Information.jpg)

![db](https://forum.huawei.com/enterprise/api/file/v1/small/thread/667933143396651008.png?appid=esc_en)

## RDBMS (Relational Database Management System)

The word RDBMS is termed as 'Relational Database Management System.' It is represented as a table that contains rows and column.

RDBMS is based on the Relational model; it was introduced by E. F. Codd.

A relational database contains the following components:

Table
Record/ Tuple
Field/Column name /Attribute
Instance
Schema
Keys
An RDBMS is a tabular DBMS that maintains the security, integrity, accuracy, and consistency of the data.

### Basic Operations

1. Insert: To insert a single document, use db.collection.insertOne(). For inserting multiple documents, use db.collection.insertMany().
2. Find: Fetch documents from a collection using db.collection.find(), and filter the results with query criteria like {field: value}. To fetch only one document, use db.collection.findOne().
3. Update: Update fields or entire documents by using update operators like $set and $unset with db.collection.updateOne() or db.collection.updateMany().
4. Delete: Remove documents from a collection using db.collection.deleteOne() or db.collection.deleteMany() with query criteria.
5. Drop: Permanently delete a collection or a database using db.collection.drop() and db.dropDatabase().

#### Databases are widely divided into two major types as:-

Relational or Sequence Databases or SQL database.[SQL: Structured Quesry Language]

Non-relational or Non-sequence databases or No SQL databases.

- MongoDB is a popular NoSQL database system that stores data in Flexible JSON-like documents, making it suitable for working with large scale and unstructured data.

![client server architechture](https://docs.faircom.com/doc/ctserver/clientserver.gif)

![advanced client server architechture](https://cdn-images-1.medium.com/max/1080/1*SBH_Y5t32ixv8C_F1MVYzA.png)

- A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos

- Load balancing in cloud computing distributes traffic and workloads to ensure that no single server or machine is under-loaded, overloaded, or idle. Load balancing optimizes various constrained parameters such as execution time, response time, and system stability to improve overall cloud performance.

![CDN](https://cdn.shopify.com/s/files/1/0070/7032/files/What_is_a_CDN.png?format=jpg&quality=90&v=1677446022)

## SQL vs NoSQL

When discussing databases, it’s essential to understand the difference between SQL and NoSQL databases, as each has its own set of advantages and limitations. In this section, we’ll briefly compare and contrast the two, so you can determine which one suits your needs better.

`**A database schema**` is considered the “blueprint” of a database which describes how the data may relate to other tables or other data models.
or
A database schema refers to the logical and visual configuration of the entire relational database. The database objects are often grouped and displayed as tables, functions, and relations. A schema describes the organization and storage of data in a database and defines the relationship between various tables.

### SQL Databases

SQL (Structured Query Language) databases are also known as relational databases,used for managing and manipulating relational databases. They have a predefined schema, and data is stored in tables consisting of rows and columns. SQL databases follow the ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure reliable transactions. Some popular SQL databases include MySQL, PostgreSQL, and Microsoft SQL Server.

#### Advantages of SQL databases:

- Predefined schema: Ideal for applications with a fixed structure.
- ACID transactions: Ensures data consistency and reliability.
- Support for complex queries: Rich SQL queries can handle complex data relationships and aggregation operations.
- Scalability: Vertical scaling by adding more resources to the server (e.g., RAM, CPU).

#### Limitations of SQL databases:

Rigid schema: Data structure updates are time-consuming and can lead to downtime.
Scaling: Difficulties in horizontal scaling and sharding of data across multiple servers.
Not well-suited for hierarchical data: Requires multiple tables and JOINs to model tree-like structures.

### NoSQL Databases

NoSQL (Not only SQL) databases refer to non-relational databases, which don’t follow a fixed schema for data storage. Instead, they use a flexible and semi-structured format like JSON documents, key-value pairs, or graphs. MongoDB, Cassandra, Redis, and Couchbase are some popular NoSQL databases.

#### Advantages of NoSQL databases:

Flexible schema: Easily adapts to changes without disrupting the application.
Scalability: Horizontal scaling by partitioning data across multiple servers (sharding).
Fast: Designed for faster read and writes, often with a simpler query language.
Handling large volumes of data: Better suited to managing big data and real-time applications.
Support for various data structures: Different NoSQL databases cater to various needs, like document, graph, or key-value stores.

#### Limitations of NoSQL databases:

Limited query capabilities: Some NoSQL databases lack complex query and aggregation support or use specific query languages.
Weaker consistency: Many NoSQL databases follow the BASE (Basically Available, Soft state, Eventual consistency) properties that provide weaker consistency guarantees than ACID-compliant databases.
MongoDB: A NoSQL Database
This guide focuses on MongoDB, a popular NoSQL database that uses a document-based data model. MongoDB has been designed with flexibility, performance, and scalability in mind. With its JSON-like data format (BSON) and powerful querying capabilities, MongoDB is an excellent choice for modern applications dealing with diverse and large-scale data.

#### Common SQL Commands:

- **SELECT:** Retrieve data from a table.
- **INSERT:** Insert new data into a table.
- **UPDATE:** Modify existing data in a table.
- **DELETE:** Remove data from a table.
- **CREATE:** Create a new table, database, or index.
- **ALTER:** Modify the structure of a table.
- **DROP:** Delete a table, database, or index.

### 3. SQL vs NoSQL:

They both are used to connect the database but the differnce is that in the SQL we are storing our data/information in the sequence wise where we store the data inside the table row and column.

and with each row we are representing a unique record and each column representing a specific data field.

and the NoSQL was creadted with the large data collection in the database and they are versatile because they can store the data/information in the form of the unstructured manner or semi-structured manner.It is not limited to storing the data in the tables.

Where as SQL supports the predefined schemas,making the storage of the data to structured type only. BUT NoSQL supports the dynamic schemas to store the different different forms of data.

![mongodb](https://images.idgesg.net/images/article/2021/06/document-store-100893897-large.jpg?auto=webp&quality=85,70)

### 4. Introduction to MongoDB:

MongoDB is an open-source, document-based, and cross-platform NoSQL database that offers high performance, high availability, and easy scalability. It differs from traditional relational databases by utilizing a flexible, schema-less data model built on top of BSON (Binary JSON), allowing for non-structured data to be easily stored and queried.

### MongoDB is a suitable choice for various applications, including:

1. Big Data: MongoDB’s flexible data model and horizontal scalability make it a great fit for managing large volumes of unstructured or semi-structured data.

2. Real-time analytics: MongoDB’s aggregation framework and indexing capabilities help analyze and process data in real-time.

3. Content management: With its dynamic schema, MongoDB can handle diverse content types, making it a suitable choice for content management systems.

4. Internet of Things (IoT) applications: MongoDB can capture and store data from a large number of devices and sensors, proving beneficial in IoT scenarios.

5. Mobile applications: MongoDB provides a flexible data model, which is an essential requirement for the dynamic nature and varying data types of mobile applications.

In conclusion, MongoDB is a powerful and versatile NoSQL database that can efficiently handle unstructured and semi-structured data, making it an excellent choice for various applications and industries.

### When to use MongoDB

MongoDB is an ideal database solution in various scenarios. Let’s discuss some of the key situations when you should consider using MongoDB.

1. Handling Large Volumes of Data:
   When dealing with large amounts of data that may require extensive read and write operations, MongoDB is an excellent choice due to its high performance and horizontal scaling. By leveraging replication and sharding, you can distribute data across multiple servers, reducing the workload on a single machine.

2. Flexible Schema
   If your application requires a flexible data model that allows for changes in the data structure over time, MongoDB is a suitable choice. This flexibility comes from its document-based structure, which allows developers to store any JSON-like data without the need to define the schema beforehand.

3. High Availability
   MongoDB’s built-in replication feature allows you to create multiple copies of your data, ensuring high availability and fault tolerance. This means your application will remain accessible in the event of hardware failure or data center outages.

4. Real-Time Analytics & Reporting
   MongoDB offers excellent support for real-time analytics and reporting. With its aggregation pipeline and map-reduce functionality, you can extract valuable insights from your data and perform complex data manipulations easily.

5. Geo-spatial Queries
   If your application deals with location-based data, MongoDB provides built-in support for geospatial indexing and querying. This makes it easier to work with location-based services and applications, such as GPS tracking or location-based search features.

6. Rapid Application Development
   Due to its flexibility and ease of use, MongoDB is a good choice for startups and agile development teams that require quick iterations and frequent schema changes. It allows developers to focus on implementing features without the burden of managing rigid database structures.

#### MongoDB Basics:

- **Collections:** Equivalent to tables in SQL, where each collection contains documents.
- **Documents:** BSON (Binary JSON) format, similar to JSON objects.
- **Embedded Documents:** Documents inside other documents.
- **Embedded Arrays:** Arrays of documents within a document.
- **How Data is Stored:** MongoDB stores data in a flexible, JSON-like format, allowing dynamic schemas.

### 5. Installation of MongoDB:

#### Steps for Local Installation:

1. **Download MongoDB:**

   - Visit the [official MongoDB download page](https://www.mongodb.com/try/download/community) and download the version suitable for your operating system.

2. **Install MongoDB:**

   - Follow the installation instructions for your OS.

3. **Run MongoDB:**

   - Start the MongoDB server.

   ```bash
   mongod
   ```

4. **Connect to MongoDB:**

   - Open a new terminal window and connect to the MongoDB server.

   ```bash
   mongo
   ```

## MongoDB Terminology

Database: Stores all your collections within a MongoDB instance.
Collection: A group of related documents, similar to a table in a relational database.
Document: A single record within a collection, which is stored as BSON (Binary JSON) format.
Field: A key-value pair within a document.
\_id: A unique identifier automatically generated for each document within a collection.

This section of the guide will introduce you to the basic terminology used while working with MongoDB. Understanding these terms will help you to grasp the fundamentals of MongoDB and make it easier for you to follow along with the rest of the guide.

Database: A MongoDB database is used to store and manage a set of collections. It consists of various collections, indexes, and other essential data structures required to store the data efficiently.

Collection: A collection in MongoDB is a group of documents. The name of a collection must be unique within its database. Collections can be viewed as the table equivalencies in a relational database.

Document: A document is a record in a MongoDB collection. It is comprised of a set of fields, similar to a row in a relational database. However, unlike tables in a relational database, no schema or specific structure is enforced on the documents within a collection.

Field: A field in MongoDB is a key-value pair inside a document. It can store various types of data, including strings, numbers, arrays, and other documents. Fields in MongoDB can be seen as columns in a relational database.

Index: Indexes in MongoDB are data structures that improve the speed of common search operations. They store a small portion of the dataset in a well-organized structure. This structure allows MongoDB to search and sort documents faster by reducing the number of documents it has to scan.

Query: A query in MongoDB is used to retrieve data from the database. It retrieves specific documents or subsets of documents from a collection based on a given condition.

Cursor: A cursor is a pointer to the result set of a query. It allows developers to process individual documents from the result set in an efficient manner.

Aggregation: Aggregation in MongoDB is the process of summarizing and transforming the data stored in collections. It is used to run complex analytical operations on the dataset or create summary reports.

Replica Set: A replica set in MongoDB is a group of mongodb instances that maintain the same data set. It provides redundancy, high availability, and automatic failover in case the primary node becomes unreachable.

Sharding: Sharding is a method of distributing data across multiple machines. It is used in MongoDB to horizontally scale the database by partitioning the dataset into smaller, more manageable chunks called shards.

### BSON vs JSON

In MongoDB, data is stored in a binary format called BSON (Binary JSON), which is a superset of JSON (JavaScript Object Notation). While both BSON and JSON are used to represent data in MongoDB, they have some key differences.

While BSON and JSON are related, they serve different purposes in the context of MongoDB:

BSON is the binary format used by MongoDB to store and retrieve data efficiently with support for additional native data types.
JSON, being a more human-readable and widely used format, is typically used for data interchange between MongoDB and applications.JSON is a lightweight and human-readable data representation format that can be easily parsed and generated by many programming languages. It is used widely as a medium for transmitting data over the web

### MongoDB Shell Query Examples:

The MongoDB Shell is an interactive JavaScript interface to MongoDB, allowing you to interact with the database directly. It's a command-line tool that facilitates the execution of various operations on MongoDB databases.

### MongoDB Query Operators and Methods:

#### 1. **`$gt`: Greater Than Operator**

- **Full Form:** `$gt` stands for "Greater Than."

- **Example Query:**
  ```javascript
  // Find users older than 30
  db.users.find({ age: { $gt: 30 } });
  ```

#### 2. **`$lt`: Less Than Operator**

- **Full Form:** `$lt` stands for "Less Than."

- **Example Query:**
  ```javascript
  // Find users younger than 25
  db.users.find({ age: { $lt: 25 } });
  ```

#### 3. **`$gte`: Greater Than or Equal To Operator**

- **Full Form:** `$gte` stands for "Greater Than or Equal To."

- **Example Query:**
  ```javascript
  // Find users aged 25 and older
  db.users.find({ age: { $gte: 25 } });
  ```

#### 4. **`$lte`: Less Than or Equal To Operator**

- **Full Form:** `$lte` stands for "Less Than or Equal To."

- **Example Query:**
  ```javascript
  // Find users aged 35 and younger
  db.users.find({ age: { $lte: 35 } });
  ```

#### 5. **`$set`: Set Field Value Operator**

- **Full Form:** `$set` is a method used in an update operation to set the value of a field.

- **Example Query:**
  ```javascript
  // Update the age of a specific user to 26
  db.users.update({ name: "John Doe" }, { $set: { age: 26 } });
  ```

#### 6. **`$unset`: Unset Field Operator**

- **Full Form:** `$unset` is a method used in an update operation to remove a field.

- **Example Query:**
  ```javascript
  // Remove the "city" field from a specific user
  db.users.update({ name: "John Doe" }, { $unset: { city: 1 } });
  ```

#### 7. **`$inc`: Increment Field Value Operator**

- **Full Form:** `$inc` is a method used in an update operation to increment the value of a field.

- **Example Query:**
  ```javascript
  // Increment the age of a specific user by 1
  db.users.update({ name: "John Doe" }, { $inc: { age: 1 } });
  ```

#### 8. **`$push`: Push Element to Array Operator**

- **Full Form:** `$push` is a method used in an update operation to add an element to an array.

- **Example Query:**
  ```javascript
  // Add a new book to the "books" array of a specific author
  db.authors.update(
    { name: "Jane Smith" },
    { $push: { books: { title: "New Book", genre: "Mystery" } } }
  );
  ```

#### 9. **`$pull`: Pull Element from Array Operator**

- **Full Form:** `$pull` is a method used in an update operation to remove an element from an array.

- **Example Query:**
  ```javascript
  // Remove a specific tag from the "tags" array of a blog post
  db.posts.update({ title: "MongoDB Basics" }, { $pull: { tags: "outdated" } });
  ```

#### 10. **`$rename`: Rename Field Operator**

- **Full Form:** `$rename` is a method used in an update operation to rename a field.

- **Example Query:**
  ```javascript
  // Rename the "oldField" to "newField" in a specific document
  db.collection.update(
    {
      /* some condition */
    },
    { $rename: { oldField: "newField" } }
  );
  ```

### Conclusion:

Understanding these MongoDB operators and methods allows you to construct powerful queries and updates. These examples cover a range of scenarios, from simple comparisons to array manipulations. If you have specific use cases or scenarios you'd like to explore further, feel free to let me know!

#### 1. **Insert Documents:**

```javascript
// Insert a single document into the "users" collection
db.users.insert({ name: "John Doe", age: 25, city: "New York" });

// Insert multiple documents into the "users" collection
db.users.insertMany([
  { name: "Alice", age: 30, city: "San Francisco" },
  { name: "Bob", age: 35, city: "Los Angeles" },
]);
```

#### 2. **Find Documents:**

```javascript
// Retrieve all documents from the "users" collection
db.users.find();

// Pretty print the result
db.users.find().pretty();
```

#### 3. **Query with Conditions:**

```javascript
// Find users older than 30
db.users.find({ age: { $gt: 30 } });

// Find users in a specific city
db.users.find({ city: "New York" });

// Find users between the ages of 25 and 35
db.users.find({ age: { $gte: 25, $lte: 35 } });
```

#### 4. **Update Documents:**

```javascript
// Update the age of a specific user
db.users.update({ name: "John Doe" }, { $set: { age: 26 } });

// Update multiple documents that match a condition
db.users.update(
  { city: "San Francisco" },
  { $set: { age: 31 } },
  { multi: true }
);
```

#### 5. **Delete Documents:**

```javascript
// Delete a specific user
db.users.remove({ name: "Alice" });

// Delete all users in a specific city
db.users.remove({ city: "Los Angeles" });
```

#### 6. **Aggregation:**

```javascript
// Aggregate total sales by product
db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$quantity" } } },
]);
```

#### 7. **Indexing:**

```javascript
// Create an index on the "email" field
db.users.createIndex({ email: 1 });
```

#### 8. **Sorting:**

```javascript
// Sort users by age in ascending order
db.users.find().sort({ age: 1 });

// Sort users by age in descending order
db.users.find().sort({ age: -1 });
```

#### 9. **Limit and Skip:**

```javascript
// Limit the number of results to 3
db.users.find().limit(3);

// Skip the first 2 results and limit to 2
db.users.find().skip(2).limit(2);
```

### Conclusion:

These examples cover some of the basic MongoDB shell queries, including document insertion, retrieval, updating, and deletion. Additionally, we explored aggregation, indexing, sorting, and limiting results. MongoDB's flexible query language allows you to express a wide range of conditions and operations to manipulate and retrieve data. If you have specific scenarios or queries you'd like to explore further, feel free to let me know!

Sure, here are the MongoDB shell commands to perform the tasks you've mentioned:

```javascript
// Connect to MongoDB and switch to the Human_Resource database
use Human_Resource

// Task 1: Create a collection named "employee" in the Human_Resource database
db.createCollection("employee")

// Task 2: Query and list all documents in the "employee" collection
db.employee.find()

// Task 3: Query and list employees with salary more than 30000
db.employee.find({ "salary": { $gt: "30000" } })

// Task 4: Query and list employees with experience more than 2 years
db.employee.find({ "overallExp": { $gt: "2" } })

// Task 5: Query and list employees graduated after 2015 and with experience more than 1 year
db.employee.find({ "yearGrad": { $gt: "2015" }, "overallExp": { $gt: "1" } })

// Task 6: Update the salary of employees with salary greater than 70000 to 65000
db.employee.updateMany({ "salary": { $gt: "70000" } }, { $set: { "salary": "65000" } })

// Task 7: Delete all documents where last company is Y
db.employee.deleteMany({ "lastCompany": "Y" })
```

Please note that these commands assume that the "employee" collection is already populated with the provided data. Also, make sure to replace the collection and field names with the actual names used in your MongoDB database.

## MongoDB Client

MongoClient in your example is just a Nodejs library that handles connecting to and interacting with a MongoDB database.

## 6. MongoDB Deployment using MongoDB Atlas:

### What is MongoDB Atlas?

MongoDB Atlas is a cloud-based database service provided by MongoDB.
MongoDB Atlas is a fully managed cloud-based database service built and maintained by MongoDB. The Atlas platform is available on major cloud providers like AWS, Azure, and Google Cloud Platform, allowing developers to deploy, manage, and scale their MongoDB clusters in a seamless and efficient manner.

### #Some of the standout features and benefits of MongoDB Atlas include:

1. Database as a Service (DBaaS): MongoDB Atlas takes care of database-related operations like backups, monitoring, scaling, and security, allowing developers to focus on their application logic.

2. Global Cluster Support: Atlas enables the creation of globally distributed clusters. Data can be stored and replicated across multiple geographies for improved performance, high availability, and reduced latency.

3. Security: Atlas offers built-in security features, such as end-to-end encryption, role-based access control, and IP whitelisting. This ensures your data remains secure and compliant with industry standards.

4. Performance: MongoDB Atlas provides tools for monitoring and optimizing the performance of your database. Advanced features like performance advisor and index suggestions help keep your database running at optimal speed.

5. Easy Scaling: With Atlas, you can easily scale your cluster either vertically or horizontally, depending on your requirements. Atlas supports auto-scaling of both storage and compute resources.

6. Data Automation and Integration: Atlas allows seamless integration with other services, like BI tools and serverless functions. The platform also supports easy data migration from on-premises or cloud-based deployments.

To summarize, MongoDB Atlas is a powerful and versatile database service that simplifies and enhances the process of deploying, managing, and scaling MongoDB instances in the cloud. With its robust set of features and security capabilities, Atlas is an ideal choice for developers who want to build and maintain scalable and efficient applications using MongoDB.

#### Steps for MongoDB Atlas Deployment:

1. **Sign Up:**

   - Create an account on the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas/register).

2. **Create a New Cluster:**

   - Follow the steps to create a new MongoDB cluster.

3. **Configure Security:**

   - Set up security measures like IP Whitelisting and database users.

4. **Connect to Cluster:**

   - Connect to your MongoDB Atlas cluster using the connection string provided.

   ```bash
   mongo "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test" --username <username>
   ```

### Conclusion:

This Day 1 overview introduces you to the fundamentals of databases, compares SQL and NoSQL databases, provides an introduction to MongoDB, guides you through the installation of MongoDB locally, and introduces MongoDB Atlas for cloud deployment. Next, we can delve deeper into specific MongoDB concepts or proceed to practical examples based on your preference.

## Regex

A Regular Expression (or Regex) is a pattern (or filter) that describes a set of strings that matches the pattern. In other words, a regex accepts a certain set of strings and rejects the rest.
MongoDB provides the service to search for a pattern in a string using the regular expression during a query. It uses Perl compatible regular expressions (PCRE) version 8.42 and UTF-8 support. One can do pattern matching in MongoDB - with the $regex operator and without the $regex operator

```plaintext
mongodb+srv://Sp-ach:Sthita9820@cluster0.bkvwzkl.mongodb.net/?retryWrites=true&w=majority
```

- **Protocol:** `mongodb+srv://` - This indicates the protocol used for connecting to MongoDB and specifies the usage of DNS Seedlist Connection Format. The `+srv` is a signal to use SRV record for DNS Seedlist Discovery.

- **Username:** `Sp-ach` - This is the username for authenticating to the MongoDB Atlas cluster.

- **Password:** `Sthita9820` - This is the password for authenticating to the MongoDB Atlas cluster.

- **Cluster URI:** `cluster0.bkvwzkl.mongodb.net` - This is the hostname of the MongoDB Atlas cluster.

- **Options:** `?retryWrites=true&w=majority` - These are query parameters specifying connection options:
  - `retryWrites=true` - This enables retryable writes, allowing MongoDB drivers to automatically retry certain write operations.
  - `w=majority` - This specifies the write concern, indicating that the write operation must be acknowledged by a majority of the nodes in the replica set.

The provided connection string is a secure way to connect to a MongoDB Atlas cluster using the SRV record for DNS Seedlist Discovery. It includes the necessary credentials for authentication and specifies connection options.

## MONGOOSE

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over the MongoDB driver, simplifying the interactions with MongoDB databases and making it easier to work with MongoDB in a Node.js application.

`Abstraction` is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It's used to create a boundary between the application and the client programs.

Here are key aspects of Mongoose and reasons why it is commonly used:

1. **Object Data Modeling:**

   - **What it means:** Mongoose allows developers to define schemas for their data models. A schema is a blueprint that defines the structure of the documents within a MongoDB collection.
   - **Why it's useful:** This object data modeling makes it easier to define and enforce the structure of your data, providing a more organized and consistent way to work with MongoDB.

2. **Schema-Based:**

   - **What it means:** Mongoose allows you to define a schema for your data, specifying the types of data, default values, validation rules, etc.
   - **Why it's useful:** Schemas help in enforcing data consistency, providing a clear structure to your data, and enabling easy validation.

3. **Middleware:**

   - **What it means:** Mongoose supports middleware functions that can be executed before or after certain events, such as saving a document or querying the database.
   - **Why it's useful:** Middleware enables you to perform actions before or after database operations, allowing for customization, validation, or additional logic.

4. **Validation:**

   - **What it means:** Mongoose provides built-in validation for your data based on the defined schema.
   - **Why it's useful:** This helps ensure that the data stored in the database adheres to the expected format and rules.

5. **Query Building:**

   - **What it means:** Mongoose simplifies the process of building queries with a fluent API.
   - **Why it's useful:** Building queries becomes more intuitive and concise, making it easier to interact with the database.

6. **Population:**
   - **What it means:** Mongoose supports population, a feature that allows you to reference other documents and pull in their data when querying.
   - **Why it's useful:** Population simplifies working with relationships between documents, providing a way to retrieve related data in a single query.

**Advantages of Mongoose:**

- **Abstraction Over MongoDB Driver:** Mongoose abstracts away many of the complexities of using the MongoDB driver directly, providing a more user-friendly interface.
- **Schemas and Models:** The use of schemas and models makes it easy to define and interact with the data structure, promoting consistency and maintainability.

- **Middleware and Hooks:** The ability to use middleware and hooks provides a way to inject custom logic at various points in the data lifecycle.

- **Query Building and Population:** Mongoose simplifies the process of building queries and dealing with relationships between documents.

- **Plugins:** Mongoose supports plugins, allowing developers to extend its functionality easily.

**Differences from MongoDB:**

- **MongoDB:** MongoDB is a NoSQL database that stores data in BSON (Binary JSON) format and provides a flexible, schema-less structure. It is a database system.

- **Mongoose:** Mongoose is a JavaScript library that runs on top of Node.js and interacts with MongoDB databases. It provides an object data modeling approach and adds features like schemas, validation, middleware, etc. It is an ODM (Object Data Modeling) library.

In Mongoose, the `required` and `unique` options in a schema serve specific purposes when defining the structure of documents in a collection.

1. **`required: true` Option:**

   - **Purpose:** This option specifies that a particular field is mandatory and must have a value when creating a new document.
   - **Example:**
     ```javascript
     email: { type: String, required: true }
     ```
     In this example, when creating a new document using this schema, the `email` field must have a value, and the document won't be saved if the `email` is missing or set to `null` or `undefined`.

2. **`unique: true` Option:**
   - **Purpose:** This option enforces that the values in a particular field must be unique across all documents in the collection.
   - **Example:**
     ```javascript
     email: { type: String, required: true, unique: true }
     ```
     In this example, the `email` field is not only required but also must have a unique value. If an attempt is made to create a new document with an `email` value that already exists in another document, the save operation will fail, preventing duplicate entries for the same `email`.

**Use Cases:**

- **`required: true`:**

  - Ensures that certain fields are always present in documents.
  - Helps in maintaining data integrity by avoiding documents with missing essential information.

- **`unique: true`:**
  - Enforces uniqueness of values in a specific field, preventing duplicate entries.
  - Useful for fields like usernames, emails, or other identifiers where uniqueness is crucial.

**Note:**

- While `required: true` is about the existence of a field, `unique: true` is about the uniqueness of values in that field.
- When defining these options, it's essential to consider the specific requirements of your application and how you want to ensure the integrity and uniqueness of your data.
