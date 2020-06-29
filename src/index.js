require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env-test" : ".env",
});
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

console.log(process.env.DB_DIALECT);

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Listening at port: ${process.env.PORT}`)
);
