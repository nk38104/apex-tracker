const express = require("express");
const dotenv  = require("dotenv");

dotenv.config({ path: "./.env" });
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}...`);
});

