const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { checkoutRouter } = require("./router/checkout");
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const host = "localhost";

app.use(express.json());
app.use(cors());
app.use("/", checkoutRouter);

app.get("/api/v1", (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        data: "home page",
    });
});

app.all("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        data: ReasonPhrases.NOT_FOUND,
    });
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
