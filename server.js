const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const profileRouter = require("./routes/profile");


dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());

// Dev logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Profile routes
app.use("/api/v1/profile", profileRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}...`);
});

