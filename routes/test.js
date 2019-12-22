const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/api', (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });

module.exports = router;