const router = require('express').Router()

router.get('/posts')
router.get('/posts/:id')
router.post('/posts')
router.put('/posts/:id')
router.delete('posts/:id')

module.exports = router
