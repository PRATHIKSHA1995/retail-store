var express = require('express')
var router = express.Router();
var path = require('path')
var Sequelize = require('sequelize')
const db = require('../models/index.js')
const Op = Sequelize.Op

router.get('/', (req, res) => {
    db.items.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']},
    }).then(items => {
      admin = false;
      profile_pic = '';
      if (req.user) {
        admin = req.user.role === 'admin';
        profile_pic = req.user.profile_pic;
      }
      res.render('index', { auth: req.isAuthenticated(), admin: admin, profile_pic: profile_pic, items: items });
    });
});

router.post('/add', checkNotAuth, (req, res) => {
  console.log(req.body)
  db.shoppings.create({
    quantity: 1, 
    cust_id: req.body['cust_id'], 
    item_id: req.body['item_id'],
    active: req.body['active']
  })
  .then( (result) => {
      res.json(result) 
  });
});


module.exports = router
