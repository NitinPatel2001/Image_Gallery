const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    console.log(`Home Page!!`)
    res.send("Home Page")
})

const { API } = require("./Routes/Search")

app.use("/Search", API)


app.listen(4000, () => {
    console.log(`http://localhost:${4000}`)
})