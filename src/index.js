import fetch from "node-fetch";
import express from "express";

const app = express();

app.get('*', async (req, res) => {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const fact = await response.json();

    res.json(fact);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server listening on port', port);
});
