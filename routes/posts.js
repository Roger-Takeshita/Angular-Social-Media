const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/posts', postCtrl.getPost);
router.post('/posts', postCtrl.addPost);
router.delete('/posts/:id', postCtrl.deletePost);

module.exports = router;
