var fs = require('fs');
var csvWriter = require('csv-write-stream')

var writer = csvWriter()
var finalPathFile = 'file.csv';

if (!fs.existsSync(finalPathFile))
    writer = csvWriter({ headers: ["id", "names","age"]});
  else
    writer = csvWriter({sendHeaders: false});

  writer.pipe(fs.createWriteStream(finalPathFile, {flags: 'a'}));
  writer.write({
    header1:"asd",
    header2:"dsa",
    header3:"25",
  });
  console.log("success");
  writer.end();