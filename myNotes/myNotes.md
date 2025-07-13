<!--These are my personal notes-->

# MERN Stack

### M - MongoDB
This is the database for the program. NoSQL database, i.e JSON format.
We store our data.

### E - Express
This is the Web Framework.
Web Framework? It is a ready-to-use toolbox for building web apps faster and more easily.
Why? Because it saves time, more clean and organized and handles common tasks (such as routing and error handling).

### R - React
This will be our frontend library.

### N - Node
Node is the Runtime, or it helps in the backend servers.
Runs Javascript on the server. (Normally would run on localhost, but node makes it on the server.)

> Beauty is that we only use JavaScript. No other languages needed.

## Status Report Codes

### 1xx : ✅ Informational
### 2xx : ✅ Success
- **200 OK** - Everything worked as expected.
- **201 Created** - New resource created successfully (e.g. after a POST request).
### 3xx : ⚠️ Redirection
> The 300 status codes are for redirection purposes, meaning the server tells the client that, "Hey, the thing you're looking for is somewhere else." 
- **301 Moved Permanently** - Example: your site changes from `http://example.com` to `https://example.com`. For this you would set up a 301 redirect so visitors and Google would know to go to the new one.
### 4xx : ❌ Client Error
> These would happen when the problem is on the clients side, meaning your browser or app made a bad request. Basically means "You (client) messed up."
- **400 Bad Request** - The request is malformed or invalid.
- **401 Unauthorized** - You must login (missing or invalid credentials).
- **403 Forbidden** - You're not allowed to access this.
- **404 Not Found** - The URL doesn't exist.
- **429 Too Many Requests** - Too much traffic on the webpage/URL.
### 5xx : 💥 Server Error
> These would happen when something goes wrong on the server side even though the client made a valid request. Basically the server tried, but failed.
- **500 Internal Server Error** - Something broke on the server.
- **503 Service Unavailable** - Server is temporarily overloaded or down (could be maintainence).