// const express = require("express");
import express from "express";
// const cors = require("cors");
import cors from "cors";
// const mongoose = require('mongoose');
import mongoose from "mongoose";
// const {routerApi} = require('./routes/index');
import routerApi from "./routes/index";
// const { url, options } = require("./config/database");
import { url, options } from "./config/database";
mongoose.connect(url, options);

const app = express();

app.use(express.json());
app.use(cors());

routerApi(app);

// Verifica si la conexión fue exitosa
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a MongoDB");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000 Express");
});
