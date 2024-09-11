const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable for any origin
// app.use(cors({origin: "*"}));

// Enable for specific origin
app.use(cors({origin: "127.0.0.1:3000"}));

// Allow CORS for only certain HTTP methods 
// Also, by default CORS will not send yout cookies along with request. Use credentials option to allow cookies to be sent.
/* app.use(
    cors({
        origin: "127.0.0.1:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    })
); */


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/data", (req, res) => {
    res.json({ firstName: "Niket", lastName: "Khandelwal"})
});


app.listen(port, () => {
    console.log(`Cors example app listening on port ${port}`)
});