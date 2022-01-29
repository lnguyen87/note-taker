const router = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/api/notes', (req, res) => {
  req.body.id = uuidv4();
  notes.push(req.body);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(notes);
});

module.exports = router;
