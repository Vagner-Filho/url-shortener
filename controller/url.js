const shortUrl = require('node-url-shortener');

const shortenUrl = (request, response) => {
  const url = request.body;
  console.log(request.body)
  response.send(url)
  // shortUrl.short(url, function(err, url){
  //   const res = {
  //     full: request.body,
  //     short: url
  //   }
  //   response.send(res)
  // });
}

module.exports = shortenUrl;