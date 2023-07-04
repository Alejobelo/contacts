const express = require('express');

const router = express.Router();

router.get('/',(req, res)=>{
  const contacts = [{
    name: 'alejo',
    tel:'+57 3001678909'
  }]
  res.json(contacts);
});

router.get('/:id', (req, res)=>{
  const { id } = req.params;
  res.json(contacts.id);
});

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    massage: 'created',
    body
  })
})

module.exports = router;
