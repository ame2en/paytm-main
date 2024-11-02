import express from "express";
import router from "./routes/index.js"; // Ensure this path is correct
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Use built-in Express JSON parser

app.use("/api/v1", router);

app.get("/", (req, res) => {
    console.log("i am called");
    return res.json({ message: "i am called" });
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`); // Use the port variable
});
