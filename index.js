const QRCode = require('qrcode');

// read script arguments
const args = process.argv.slice(2);
const clientString = args[0].split('#')[0].trim();

// get service's url & cookie
const serviceUrl = clientString.split(' ')[0];
const serviceCookie = clientString.split(' ')[1];

const filePath = `${process.cwd()}/${serviceUrl}.png`;
const json = `{"auth_cookie_value": "${serviceCookie}", "domain":"${serviceUrl}"}`;

// generate the qr image
QRCode.toFile(filePath, json, function (err, url) {
  console.log(`cookie saved to ${filePath} for service ${serviceUrl}`);
});
