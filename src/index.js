import fetch from "node-fetch";
import * as http from 'http';

// const fetchCatFact = async () => {
//     const response = await fetch('https://meowfacts.herokuapp.com/');
//     const fact = await response.json();
//     return fact;
// };

// fetchCatFact().then(fact => {
//     return fact;
// });

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const fact = await response.json();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(fact));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
