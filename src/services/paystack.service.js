const express = require("express");
const app = express();

const cors = require("cors");

// import the request module
// const request = require("request");
//  const MySecretKey = `Bearer ${process.env.PAYSTACK_SECRET_KEY}`;

// const paystack = {};

//Initialize Paystack Payment

const https = require("https");

const params = JSON.stringify({
  email: "customer@email.com",
  amount: "20000",
});

const options = {
  hostname: "api.paystack.co",
  port: 443,
  path: "/transaction/initialize",
  method: "POST",
  headers: {
    Authorization: "Bearer PAYSTACK_SECRET_KEY",
    "Content-Type": "application/json",
  },
};

const req = https
  .request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (error) => {
    console.error(error);
  });

req.write(params);
req.end();

// Verify Paystack Payment
paystack.verifyPayment = (ref, mycallback) => {
  const options = {
    url:
      "https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
    headers: {
      authorization: MySecretKey,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  };
  const callback = (error, response, body) => {
    return mycallback(error, body);
  };
  request(options, callback);
};
