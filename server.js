const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cors());

app.use(express.json());

app.use("/api/v1/user" , require("./api/api_user"));

app.listen(3100, () =>{
    console.log("server is up and listening on port 3100");
})