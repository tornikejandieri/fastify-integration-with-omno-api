const {
    createTransaction,
    handleWebhook,
    paymentSuccess,
    paymentFail,
} = require("../controllers/transactionController")
const { authenticate } = require("../middlewares/auth")
const { transactionSchema } = require("../validators/schema")

module.exports = async (fastify, options) => {
    fastify.post("/create-transaction", {
        schema: {
            body: transactionSchema,
        },
        preHandler: authenticate,
        handler: createTransaction,
    })

    fastify.post("/webhook", handleWebhook)

    fastify.get("/callback", paymentSuccess)

    fastify.get("/callbackFail", paymentFail)
}
