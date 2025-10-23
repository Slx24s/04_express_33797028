// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Handle the routes
// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 