const express = require('express');
const router = express.Router();
const {
  getFormFiles,
  createThumbnails,
  removeTmpFiles,
} = require('../controllers/fileController');
const {
  uploadFilesToDrive,
  getDrivePublicUrls,
} = require('../controllers/driveController');
const {createPiece} = require('../controllers/pieceController');
const qs = require('qs');

router.get('/', (req, res, next) => {
  res.json('pieceList');
});

router.post(
  '/',
  (req, res, next) => {
    res.locals.parsedBody = qs.parse(req.body);
    next();
  },
  getFormFiles,
  createThumbnails,
  uploadFilesToDrive,
  getDrivePublicUrls,
  removeTmpFiles,
  createPiece,
);

module.exports = router;
