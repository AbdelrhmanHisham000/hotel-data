// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);


const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Make sure your db.json is in the root directory
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // Use Glitch's dynamic port (usually 3000)

server.use(middlewares);

// Watch db.json for changes (no need for the --watch flag if using this method)
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
