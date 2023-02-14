const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const Stripe = require("stripe");
const stripe = Stripe(
    "sk_test_51MXML1DPnJxuKR02oC9YuT7c4sFXnWQuMvxJIytkKPb7ClGUaOL8x5UILhWteeeA4Rue4ttMAQlEQqmLK44id0Uc00gOS1OIkH"
);

const cors = require("cors");
require("dotenv");
const app = express();
const port = process.env.PORT || 8000;
const host = "localhost";

app.use(express.json());
app.use(cors());

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
