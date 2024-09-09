const {
  createTransaction,
  handleWebhook,
  paymentSuccess,
  paymentFail,
} = require("../controllers/transactionController")
const { authenticate } = require("../middlewares/auth")

module.exports = async (fastify, options) => {
  fastify.post("/create-transaction", {
    preHandler: authenticate,
    handler: createTransaction,
  })

  fastify.post("/webhook", handleWebhook)

  fastify.get("/callback", paymentSuccess)

  fastify.get("/callbackFail", paymentFail)
}
