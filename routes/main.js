// const express = require("express");
// const router = express.Router();

// // Handle the main routes
// router.get("/", (req, res) => res.send("Hello World!"));
// router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
// router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1>'));
// router.get('/date', (req, res) => {
//     const now = new Date();
//     res.send(`<h1>Current date and time: ${now}</h1>`);
// });

// // New welcome route with name parameter
// router.get('/welcome/:name', (req, res) => {
//     const userName = req.params.name;
//     res.send(`<h1>Welcome, ${userName}!</h1>`);
// });

// // New chain route with two chained handlers
// router.get('/chain', 
//     // First handler
//     (req, res, next) => {
//         console.log('First handler executed');
//         // Add some data to the request object
//         req.customData = {
//             message: 'Data from first handler',
//             timestamp: new Date().toISOString()
//         };
//         // Call next() to pass control to the next handler
//         next();
//     },
//     // Second handler
//     (req, res) => {
//         console.log('Second handler executed');
//         // Access the data set by the first handler
//         const responseHTML = `
//             <h1>Chain Route Example</h1>
//             <p><strong>Message:</strong> ${req.customData.message}</p>
//             <p><strong>Processed at:</strong> ${req.customData.timestamp}</p>
//             <p>Both handlers have been executed successfully!</p>
//         `;
//         res.send(responseHTML);
//     }
// );
// // Export the router object so index.js can access it
// module.exports = router;




const express = require("express");
const router = express.Router();
const path = require("path"); // Add this line to import the path module

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1>'));
router.get('/date', (req, res) => {
    const now = new Date();
    res.send(`<h1>Current date and time: ${now}</h1>`);
});

// Welcome route with name parameter
router.get('/welcome/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Welcome, ${userName}!</h1>`);
});

// Chain route with two chained handlers
router.get('/chain', 
    // First handler
    (req, res, next) => {
        console.log('First handler executed');
        // Add some data to the request object
        req.customData = {
            message: 'Data from first handler',
            timestamp: new Date().toISOString()
        };
        // Call next() to pass control to the next handler
        next();
    },
    // Second handler
    (req, res) => {
        console.log('Second handler executed');
        // Access the data set by the first handler
        const responseHTML = `
            <h1>This is the chain route.</h1>
            <p><strong>Message:</strong> ${req.customData.message}</p>
            <p><strong>Processed at:</strong> ${req.customData.timestamp}</p>
            <p>Both handlers have been executed properly with no problems.</p>
        `;
        res.send(responseHTML);
    }
);

// New file route to serve a.html
router.get('/file', (req, res) => {
    // Construct the absolute path to a.html
    const filePath = path.join(__dirname, '..', 'a.html');
    
    // Send the file as the response
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(404).send('<h1>File not found</h1>');
        }
    });
});

// Export the router object so index.js can access it
module.exports = router;