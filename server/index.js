const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/json'}));


app.get('/api/getNews', (req, res) => {
    axios({
        method: 'get',
        url: 'http://newsapi.org/v2/top-headlines?country=us&apiKey=2feb9782f5e0435b9ba7caf6b3b2f7f7'
    })
    .then(data => {
        let info = data.data.articles
        res.json(info)
    })
    .catch(e => console.log(e))
})

app.get('/api/getCategoryNews', (req, res) => {
    let info = req.query.category.toLowerCase();
    console.log(info)
    axios({
        method: 'get',
        url: `http://newsapi.org/v2/everything?q=${info}&'from=2020-04-20&sortBy=popularity&apiKey=2feb9782f5e0435b9ba7caf6b3b2f7f7`
    })
    .then(data => res.send(data.data.articles))
    .catch(e => console.log(e))
})

// app.get('/api/getEntertainmentNews', (req, res) => {
//     axios({
//         method: 'get',
//         url: 'https://newsapi.org/v2/sources?category=entertainment&apiKey=2feb9782f5e0435b9ba7caf6b3b2f7f7'
//     })
//     .then(data => console.log(data.data.article.length))
//     .catch(e => console.log(e))
// })

// app.get('/api/getTechnologyNews', (req, res) => {
//     axios({
//         method: 'get',
//         url: 'https://newsapi.org/v2/sources?category=technology&apiKey=2feb9782f5e0435b9ba7caf6b3b2f7f7'
//     })
//     .then(data => console.log(data.data.article.length))
//     .catch(e => console.log(e))
// })

// app.get('/api/getTechnologyNews', (req, res) => {
//     axios({
//         method: 'get',
//         url: 'https://newsapi.org/v2/sources?category=technology&apiKey=2feb9782f5e0435b9ba7caf6b3b2f7f7'
//     })
//     .then(data => console.log(data.data.article.length))
//     .catch(e => console.log(e))
// })

app.listen(3001, () => {
    console.log('Express server started')
})


