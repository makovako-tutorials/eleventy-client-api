const axios = require('axios')
const countries = require('./countries.json')

require('dotenv').config()

const API_KEY = process.env.NEWS_API_KEY


async function getNews(country) {
    try {
        const url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=5`
        const response = await axios.get(url);
        return {
            "country": country,
            "articles": response.data.articles

        }
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = async function() {
    var newsPromises = countries.map(getNews)
    return Promise.all(newsPromises).then(newsObjects => {
        console.log(newsObjects);
        
        return [].concat.apply([],newsObjects)
    })
}