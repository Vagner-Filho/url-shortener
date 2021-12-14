const shortUrl = require('node-url-shortener');
// const sequelize = require('sequelize')
const Url = require('../model/Url.js')

const shortenUrl = async (request, response) => {
  const longUrl = request.body.url

  // Shortens the URL
  try {
    shortUrl.short(longUrl, async function(err, url) {
      // Returns specified error if found
      if (err) {
        return response.send({ err })
      }
      // Stores shortened url in res object
      const res = {
        status: 200,
        shortened: url
      }
      try {
        await Url.create({ userId: null, shorterUrl: res.shortened, numberOfVisits: 0, originalUrl: longUrl })
      } catch (error) {
        response.send({ error })
      }
      
      response.send(res)
    });
  } catch (error) {
    response.send({ error })
  }
}

const getAllUrls = async (request, response) => {
  try {
    const urls = await Url.findAll()
    response.send(urls) 
  } catch (error) {
    response.send({ error })
  }
}

const incrementVisits = async (request, response) => {
  try {
    await Url.increment('numberOfVisits', {
      by: 1,
      where: {
        shorterUrl: request.body.shorterUrl
      }
    })
    response.send(`Incremented!`)
  } catch (error) {
    response.send({ error })
  }

}

module.exports = { shortenUrl, getAllUrls, incrementVisits };