var express = require('express');
var router = express.Router();
var path = require('path');
var Sequelize = require('sequelize');
const db = require('../models/index.js');

const { checkAuth, checkNotAuth, checkNotAdmin } = require("../authConfig.js");

router.get('/', checkNotAdmin, (req,res) => {
  var items;

  db.items.findAll({
    attributes: {exclude: ['createdAt', 'updatedAt']}
    // order: [['item_date', 'DESC']]
  }).then(items_obj => {
    admin = false;
    if (req.user) {
      admin = req.user.role === 'admin';
    }
    items = items_obj;
    const sleep = milliseconds => { 
      return new Promise(resolve => setTimeout(resolve, milliseconds)); 
    }; 
     
    sleep(200).then(() => { 
      // code to execute after sleep 
      res.render('admin', { auth: req.isAuthenticated(), admin: admin, items: items });
    }); 
  });
});

router.post('/item_add', checkNotAdmin, (req, res) => {
  db.items.create({
    name: req.body['name'], 
    cost: req.body['cost'], 
    category: req.body['category']
  })
  .then( (result) => {
      res.json(result) 
  });
});

router.put('/item_edit', checkNotAdmin, (req, res) => {
  db.items.update({
    name: req.body['name'], 
    cost: req.body['cost'], 
    category: req.body['category']
  }, {
    where: {id: req.body['id']} 
  })
  .then( (result) => {
      res.json(result) 
  });
});

router.delete('/item_delete', checkNotAdmin, (req, res) => {
  db.items.destroy({
    where: {id: req.body['id']} 
  })
  .then( (result) => {
      res.json(result) 
  });
});


module.exports = router