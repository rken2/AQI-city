const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const cityController = require('../controllers/city'); 
// 3.
router.post('/city', cityController.newCity); 
router.get('/city/:prefix', cityController.getNames); 
// 4. 
module.exports = router; // export to use in server.js