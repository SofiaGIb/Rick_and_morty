require("dotenv").config()

const express = require('express');
const router = require("./routes")
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"))

server.use("/",router);

server.use("/ric",router);


server.listen(PORT, () => {
   console.log('Server raised in port  ' + PORT);
});