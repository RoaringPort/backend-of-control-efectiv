const router = require('express').Router()

const GetMethod = require('../controllers/egresos/get')
const PostMethod = require('../controllers/egresos/post')

router.route('/api/egresos/get')
    .get(GetMethod)

router.route('/api/egresos/post')
    .post(PostMethod)

module.exports = router