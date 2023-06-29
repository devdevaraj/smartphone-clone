import express, { urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.disable("x-powered-by");

app.get("/",(req,res) => {
    return res.status(200).send({ msg: "GET" });
});

app.listen(8000,() => {
    console.log("Done");
});