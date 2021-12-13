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
        shortened: url
      }
  
      // Inserts a new URL if it hasnt been inserted
      // if (urls.find(url => url.originalUrl === longUrl) === undefined) {
      //   urls.push({shorterUrl: res.shortened, originalUrl: longUrl, numberOfVisits: 0})
      //   const url = await Url.create({ shorterUrl: res.shortened, originalUrl: longUrl, numberOfVisits: 0 })
      // }
      // try {
      //   const storedUrl = await Url.findAll({
      //     where: {
      //       shorterUrl: res.shortened
      //     }
      //   })
      //   console.log(storedUrl)
      //   if (!storedUrl) {
      //     try {        
      //       await Url.create({ shorterUrl: res.shortened, originalUrl: longUrl, numberOfVisits: 0 })
      //     } catch (error) {
      //       response.send({ error })
      //     }
      //   }
      // } catch (error) {
      //   response.send({ error })
      // }
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