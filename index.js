const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const joi = require("joi");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connection established");
});

const postRouter = require('./routes/postapi');

app.use('/api', postRouter);
app.use(express.json());

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
});