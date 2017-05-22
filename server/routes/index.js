
const path = require('path');
const express = require('express');

const router = express.Router();

// UI serving

router.use('/', express.static(path.join(__dirname, '../../dist')));
router.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../../dist/index.html')));
});

module.exports = router;
