//https://stackoverflow.com/questions/15231864/display-html-page-with-node-js
var unirest = require('unirest');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Helloas World!');
}).listen(8080);

unirest.get("https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad")
.header("X-RapidAPI-Host", "sridurgayadav-chart-lyrics-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "0305af4769msh0e1832ecd3a9cf6p12d2fdjsn350aa46d4a9f")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});