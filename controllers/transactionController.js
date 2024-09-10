const axios = require("axios")
const process = require("process")
const dotenv = require("dotenv").config()

const createTransaction = async (req, res) => {
  const accessToken = req.accessToken
  const body = req.body

  if (accessToken !== null) {
    res.status(202).send({ message: "Transaction is being initiated" })
    try {
      const resp = await axios.post(process.env.TRANSACTION_ENDPOINT, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      console.log("TRANSACTION SUCCESS =========>", resp.data)
    } catch (error) {
      console.log("ERROR:", error.message)
      if (error.response) {
        console.error("Error status:", error.response.status)
        console.error("Error data:", error.response.data)
      } else {
        console.error("Error details:", error)
      }
    }
  } else {
    return res.status(400).send({ error: "token is missing" })
  }
}

const handleWebhook = async (req, res) => {
  const threeDsRedirectUrl = req.body["3dsRedirectUrl"]
  console.log("WEBHOOK ====================>", req.body)

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
  } else {
    console.error("Redirect url is missing")
    return res.status(400).send({ error: "Redirect url is missing" })
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
