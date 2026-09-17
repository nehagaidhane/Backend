# 🚀 Node.js Learning Journey

This repository contains my notes, practice code, and examples while learning **Node.js**.
I am building my understanding step by step, starting with Node.js fundamentals and gradually moving toward backend development, APIs, databases, authentication, and full-stack applications.

---

## 📌 What is Node.js?

**Node.js** is a free, open-source, cross-platform **JavaScript runtime environment** that allows JavaScript to run outside the browser.

It is built on Chrome's **V8 JavaScript engine** and is commonly used for developing:

* Backend applications
* REST APIs
* Web servers
* Real-time applications
* Microservices
* Command-line tools

### 🌍 Supported Platforms

Node.js can run on:

* Windows
* macOS
* Linux
* And other operating systems

---

# 📁 File System (fs) Module

Node.js provides a built-in **File System (`fs`) module** that allows us to work with files and directories.

First, import the module:

```js
const fs = require("fs");
```

## Common File System Methods

| Method            | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `fs.writeFile()`  | Creates a new file or overwrites an existing file |
| `fs.appendFile()` | Adds data to an existing file                     |
| `fs.rename()`     | Renames a file or directory                       |
| `fs.unlink()`     | Deletes a file                                    |
| `fs.rmdir()`      | Removes a directory                               |
| `fs.readFile()`   | Reads data from a file                            |
| `fs.mkdir()`      | Creates a directory                               |
| `fs.existsSync()` | Checks whether a file or directory exists         |

### Example: Write a File

```js
fs.writeFile("Hello.txt", "Hello Node.js", (err) => {
    if (err) console.log(err);
    else console.log("File created successfully");
});
```

### Example: Read a File

```js
fs.readFile("Hello.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(data);
    }
});
```

> **Note:** `fs.readFile()` returns a Buffer by default. Using `"utf8"` returns the file content as a string.

---

# 🌐 HTTP

**HTTP (Hypertext Transfer Protocol)** is a set of rules that allows clients and servers to communicate over the internet.

In Node.js, we can create an HTTP server using the built-in `http` module.

```js
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

The server can then be accessed using:

```text
http://localhost:3000
```

### Important HTTP Concepts

* Request
* Response
* HTTP methods
* Status codes
* Headers
* Routes
* Query parameters
* Request body

### Common HTTP Methods

| Method   | Purpose              |
| -------- | -------------------- |
| `GET`    | Retrieve data        |
| `POST`   | Create/send data     |
| `PUT`    | Update complete data |
| `PATCH`  | Update partial data  |
| `DELETE` | Delete data          |

### Common HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| `200`       | OK                    |
| `201`       | Created               |
| `400`       | Bad Request           |
| `401`       | Unauthorized          |
| `403`       | Forbidden             |
| `404`       | Not Found             |
| `500`       | Internal Server Error |

---

# 📦 NPM

**NPM (Node Package Manager)** is the default package manager for Node.js.

It is used to:

* Install packages
* Remove packages
* Manage dependencies
* Run scripts
* Manage project configuration

---

## 📄 package.json

A Node.js project can be initialized using:

```bash
npm init
```

or:

```bash
npm init -y
```

This creates a `package.json` file.

`package.json` contains important information about the project, including:

* Project name
* Version
* Description
* Entry point
* Scripts
* Dependencies
* Development dependencies

Example:

```json
{
  "name": "node-learning",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  }
}
```

---

# 📥 Installing Packages

To install a package:

```bash
npm install <package-name>
```

Example:

```bash
npm install express
```

The package will be added to the `dependencies` section of `package.json`.

---

# 📤 Uninstalling Packages

To uninstall a package:

```bash
npm uninstall <package-name>
```

Example:

```bash
npm uninstall express
```

---

# 🔢 Installing a Specific Version

To install a particular version:

```bash
npm install express@4.18.2
```

The general syntax is:

```bash
npm install <package-name>@<version>
```

---

# 📚 Dependencies

**Dependencies** are packages required by the application to work in production.

Example:

```bash
npm install express
```

This adds Express to:

```json
"dependencies": {
    "express": "..."
}
```

---

# 🛠️ DevDependencies

**DevDependencies** are packages mainly required during development, testing, or building the application.

Example:

```bash
npm install nodemon --save-dev
```

This adds:

```json
"devDependencies": {
    "nodemon": "..."
}
```

Examples of development tools include:

* Nodemon
* Testing frameworks
* Linters
* Formatters

> **Important:** DevDependencies are not simply "packages that stop working after deployment." They are packages that the application generally doesn't need at runtime in production.

---

# ▶️ NPM Scripts

NPM scripts allow us to define commands inside `package.json`.

Example:

```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

We can run them using:

```bash
npm start
```

or:

```bash
npm run dev
```

### `npm start`

`start` is a special npm lifecycle script, so it can be run with:

```bash
npm start
```

instead of:

```bash
npm run start
```

For custom scripts, we normally use:

```bash
npm run <script-name>
```

Example:

```bash
npm run dev
```

---

# 📦 Node.js Modules

Modules allow us to divide our application into smaller, reusable pieces.

There are three common categories:

### 1. Built-in Modules

Modules provided by Node.js.

Examples:

```js
fs
http
path
os
events
url
```

Example:

```js
const fs = require("fs");
```

### 2. Local Modules

Modules created by us.

Example:

```js
const user = require("./user");
```

### 3. Third-Party Modules

Packages installed using npm.

Example:

```bash
npm install express
```

Then:

```js
const express = require("express");
```

---

# 📂 Common Node.js Built-in Modules

Some important modules to learn:

| Module   | Purpose                            |
| -------- | ---------------------------------- |
| `fs`     | File system operations             |
| `http`   | Create HTTP servers                |
| `path`   | Work with file and directory paths |
| `os`     | Operating system information       |
| `events` | Event-driven programming           |
| `url`    | URL handling                       |
| `crypto` | Cryptographic operations           |

---

# ⚡ Asynchronous Programming

Node.js is designed around **asynchronous, non-blocking operations**.

For example:

```js
fs.readFile("Hello.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("File reading started...");
```

Node.js can continue executing other code while waiting for the file operation to complete.

Important concepts to learn:

* Callbacks
* Promises
* `async/await`
* Event Loop
* Non-blocking I/O

---

# 🔄 Callbacks

A callback is a function passed to another function and executed later.

Example:

```js
fs.readFile("Hello.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

---

# 🤝 Promises

Promises provide another way to handle asynchronous operations.

```js
const fs = require("fs/promises");

fs.readFile("Hello.txt", "utf8")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
```

---

# ⏳ Async/Await

`async/await` makes asynchronous code easier to read.

```js
const fs = require("fs/promises");

async function readFile() {
    try {
        const data = await fs.readFile("Hello.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();
```

---

# 🔁 Event Loop

The **Event Loop** is one of the most important concepts in Node.js.

It allows Node.js to handle asynchronous and non-blocking operations efficiently.

Important concepts to understand:

```text
JavaScript
    ↓
Call Stack
    ↓
Node.js APIs
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
```

Understanding the Event Loop is important for understanding how Node.js handles multiple operations.

---

# 📄 .gitignore

When working with Node.js projects, some files should not be uploaded to GitHub.

A `.gitignore` file can be used to exclude them.

Example:

```text
node_modules/
.env
*.log
```

The `node_modules` folder is normally not committed because dependencies can be recreated using:

```bash
npm install
```

---

# 🔐 Environment Variables

Sensitive or environment-specific information should not be hard-coded into the application.

Examples:

* Database passwords
* API keys
* Secret keys
* Port numbers

A `.env` file is commonly used:

```text
PORT=3000
DB_PASSWORD=your_password
```

The `.env` file should generally be added to `.gitignore`.

---

# 🚀 Node.js Learning Roadmap

These are the topics I plan to learn next:

### ✅ Fundamentals

* [x] Node.js introduction
* [x] File System module
* [x] HTTP module
* [x] NPM basics
* [x] `package.json`
* [x] Dependencies
* [x] DevDependencies
* [x] NPM scripts
* [x] Node.js modules
* [x] Callbacks
* [x] Promises
* [x] Async/Await

### 🔜 Next Topics

* [ ] Event Loop in depth
* [ ] Events and EventEmitter
* [ ] Path module
* [ ] OS module
* [ ] Streams
* [ ] Buffers
* [ ] Express.js
* [ ] Routing
* [ ] Middleware
* [ ] REST APIs
* [ ] CRUD operations
* [ ] JSON
* [ ] Error handling
* [ ] MongoDB / SQL databases
* [ ] Authentication & Authorization
* [ ] JWT
* [ ] Password hashing
* [ ] Cookies & Sessions
* [ ] Environment variables
* [ ] API validation
* [ ] File uploads
* [ ] CORS
* [ ] Security best practices
* [ ] Testing
* [ ] Deployment
* [ ] Building real-world backend projects

---

# 🎯 Goal

My goal is to build a strong understanding of **Node.js and backend development** and use these concepts to create real-world applications and APIs.

> **Learning by building — one concept and one project at a time. 🚀**

---

## 🧰 Technologies I'm Learning

```text
JavaScript
    ↓
Node.js
    ↓
NPM
    ↓
Express.js
    ↓
REST APIs
    ↓
Database
    ↓
Authentication
    ↓
Deployment
    ↓
Full-Stack Applications
```

---

⭐ This repository will be updated regularly as I learn new Node.js concepts and build backend projects.

## express.js framework ,routing ,middleware,resquest and response handling and error handling 
Introduction of express js 
express js is a framework and npm package 
manages everything from receiving the request and giving the resposne 

Middleware
