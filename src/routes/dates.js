const router = require('express').Router()

const PostDate = require('../controllers/dates')

router.route('/api/dates')
    .post(PostDate)

module.exports = router