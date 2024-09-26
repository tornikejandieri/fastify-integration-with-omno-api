const axios = require("axios")
const process = require("process")
const dotenv = require("dotenv").config()

const authenticate = async (req, res) => {
    try {
        const params = new URLSearchParams({
            grant_type: "client_credentials",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        })

        const resp = await axios.post(
            process.env.AUTHORIZATION_ENDPOINT,
            params,
            {
                headers: {
                    accept: "application/json",
                    "content-type": "application/x-www-form-urlencoded",
                },
            }
        )

        req.accessToken = resp.data.access_token
    } catch (error) {
        console.error("Error authenticating:", error.message)
        if (error.response) {
            console.error("Error response data:", error.response.data)
            res.status(error.response.status).send(error.response.data)
        } else {
            res.status(500).send({ error: "Internal Server Error" })
        }
    }
}

module.exports = { authenticate }
