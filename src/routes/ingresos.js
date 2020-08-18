const router = require('express').Router()

const GetMethod = require('../controllers/ingresos/get')
const PostMethod = require('../controllers/ingresos/post')

router.route('/api/ingresos/get')
    .get(GetMethod)

router.route('/api/ingresos/post')
    .post(PostMethod)

module.exports = router