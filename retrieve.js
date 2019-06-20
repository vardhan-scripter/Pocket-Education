const http = require('http');
const csv = require('csv-parser');  
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require("express");
const app = express();

fs.createReadStream('file.csv')  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  });
  
// app.get("/", (req, res) => {
//   res.writeHead(200,{'Content-Type' : 'text/html'});
//   res.write(htmlfile);
//   res.end();
// });

// app.listen(3000, () => console.log("Server is running at port 3000...."));