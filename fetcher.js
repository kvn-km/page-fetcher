const request = require('request');
const fs = require("fs");

request('https://www.example.edu ', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile("./exedu.html", body, "utf8", (error) => {
    // file name, contents, encoding, error as a function param
    if (error) throw error;
    console.log('Downloaded and saved 1235 bytes to ./exedu.html');

  });
});

