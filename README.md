# fastify-integration-with-omno-api

Project demonstrates

> How to authenticate user into Omno api
> Initiate transaction
> Receive and handle webhook

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or later)
- [Docker](https://www.docker.com/) (optional, for using Docker image)
- [Postman](https://www.postman.com/) (for testing the API)

First things first, clone the project via github.
`git clone https://github.com/tornikejandieri/fastify-integration-with-omno-api`

Or get Docker image 🐳

`docker pull tornikejandieri/fastify-integration-with-omno-api:latest`

## How to run application

1. Navigate to application directory and install dependencies
   `npm install`

2. Start the project
   `npm start`

3. Since the server runs on localhost and requires HTTPS for receiving webhooks, use LocalTunnel as a proxy
   `npx localtunnel --port 3000`

4. LocalTunnel will provide a URL that forwards requests to your local server 😎

##### Now you can open Postman and test your api!

1.Open Postman and select POST, in the url field you need to write <https://url-provided-by-localtunnel/create-transaction>

> /create-transaction initiates transaction process (createTransaction function in transactionController.js), before that controller executes we have authenticate middleware (prehandler in Fastify terminology)
> IMPORTANT: Make sure to include json object in the request body. In the Postman go to body, then select raw, then paste same json object that we have in data.json file in project. Without that data server will reject your request.
> Webhook will be sent to the address your write in the hookUrl from json object, so dont forget to include same url provided by LocalTunnel into hookUrl, callback and callbackFail. 2. Omno server will respont with webhook, it contains 3DS Redirect Url. handleWebhook controller manages extracting redirect url and opening it with browser. 3. Then wait for few seconds, you should see new browser tab open, you'll be redirected to the fake transaction webpage.

Note: sometimes instead of redirecting us to the 3DS Redirect url, we get sent to the LocalTunnel greeting page. It will propt you to enter password. Get the password by following the link `https://loca.lt/mytunnelpassword` this is one time only, after submitting password you will be able to test redirection as many times you'd like!
