const axios = require("axios")
const process = require("process")
const dotenv = require("dotenv").config()
const requestBody = require("../helpers/data")

const createTransaction = async (req, res) => {
  const accessToken = req.accessToken
  const body = req.body

  if (accessToken !== null) {
    try {
      const resp = await axios.post(process.env.TRANSACTION_ENDPOINT, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
    } catch (error) {
      console.log("ERROR:", error.message)
      if (error.response) {
        console.error("Error status:", error.response.status)
        console.error("Error data:", error.response.data)
      } else {
        console.error("Error details:", error)
      }
    }
  }
}

const handleWebhook = async (req, res) => {
  const threeDsRedirectUrl = req.body["3dsRedirectUrl"]

  if (threeDsRedirectUrl) {
    ;(async () => {
      try {
        const { default: open } = await import("open")

        open(threeDsRedirectUrl, { wait: false }).then((cp) => {
          if (cp) cp.unref()
        })
      } catch (error) {
        console.error("Error importing the module:", error)
      }
    })()
  }
}

const paymentSuccess = async (req, res) => {
  res.send("You have successfully made a payment, thanks!")
}

const paymentFail = async (req, res) => {
  res.send("Sorry, your payment failed.")
}

module.exports = {
  createTransaction,
  handleWebhook,
  paymentSuccess,
  paymentFail,
}
