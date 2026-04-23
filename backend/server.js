import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());// This middleware is used to parse incoming JSON requests and put the parsed data in req.body
app.use(cors());// CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.
app.use(helmet());// Helmet helps secure Express apps by setting various HTTP headers
app.use(morgan("dev"));// Morgan is a HTTP request logger middleware for Node.js, in short it log requests to the console

app.get("/test", (req, res) => {
  console.log(res.getHeaders());
  res.send("Hello from the test endpoint!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});