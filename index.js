const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route for the root URL
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World' });
});

// Start the server
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
