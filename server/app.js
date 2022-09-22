const express = require('express');
const app = express();
const knex = require('knex')(require('../db/knexfile')['development'])
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("test endpoint")
})

app.get('/movies', (req, res) => {
    // res.send("movies")
    // res.send([
    //     {title: 'Mean Girls'},
    //     {title: 'Hackers'},
    //     {title: 'The Grey'},
    //     {title: 'Sunshine'},
    //     {title: 'Ex Machina'},
    //   ])
    knex('movie')
        .select('*')
        .then(movieData => {
            let mappedMovies = movieData.map(movie => movie.title);
            res.send(movieData);
        })
})

app.post('/movies', (req, res) => {
    const newTitle = req.body.title;
    // console.log(req.body);
    knex('movie').insert( {title: newTitle})
    .then(res.send('Your movie was added'))
})

app.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    knex('movie').where({id}).del()
    .then(res.send('Your movie was deleted'))
})

module.exports = app;