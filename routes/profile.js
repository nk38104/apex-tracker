const express = require("express");
const router = express.Router();
const axios = require("axios").default;


router.get("/:platform/:gamertag", async (req, resp) => {
    try {
        const { platform, gamertag } = req.params;
        const config = {
            headers: {
                "TRN-Api-Key": process.env.TRACKER_API_KEY
            }
        };

        const response = await axios.get(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, config);
        resp.json(response.data);
    } catch (err) {
        resp.status(err.response.status).json({
            message: err.response.statusText
        });
    }
});


module.exports = router;

