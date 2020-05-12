const express = require('express')
const knex = require('knex')
const db = require('../data/dbConnect')
const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(er => {
        res.status(500).json({error: er.message})
    })
})

router.post('/', (req, res) => {
    db('cars')
    .then(car => {
        res.status(201).json(car)
    })
    .catch(er => {
        res.status(500).json({error: er.message})
    })
})

module.exports = router