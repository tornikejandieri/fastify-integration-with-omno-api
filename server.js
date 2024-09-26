const fastify = require("fastify")({
    logger: true,
})

fastify.register(require("./routes/transactionRoutes"))

fastify.get("/", function (request, reply) {
    reply.type("html").send(`
    <html>
      <body style="background-color: black; color: silver; font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="text-align: center;">Fastify Integration with Omno API</h1>
      </body>
    </html>
  `)
})

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
