const shortUrl = require('node-url-shortener');

const shortenUrl = (request, response) => {
  shortUrl.short(request.body.url, function(err, url){
    if (err) {
      const res = { error: err}
      return response.send(res)
    }
    const res = {
      shortened: url
    }
    response.send(res)
  });
}

module.exports = shortenUrl;