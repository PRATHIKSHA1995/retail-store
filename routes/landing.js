var express = require('express')
var router = express.Router();
var path = require('path')
var Sequelize = require('sequelize')
const db = require('../models/index.js')
const Op = Sequelize.Op

const { pool } = require("../dbConfig");
const { checkAuth, checkNotAuth, checkNotAdmin } = require("../authConfig.js");

router.get('/home', (req, res) => {
    var items;
    var recommends;
    db.items.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']},
    }).then(items_obj => {
      admin = false;
      if (req.user) {
        admin = req.user.role === 'admin';
      }
      items = items_obj;
      // res.render('index', { auth: req.isAuthenticated(), admin: admin, items: items, user: req.user });
    });

    
    db.sequelize.query("select i.id, i.name, i.cost from items i inner join shoppings s on (s.item_id=i.id) where s.active=false and s.cust_id=(:id) group by i.id order by count(*) desc limit 5", {replacements:{id:req.user.id}}
    ).then(recommend_obj => {
      admin = false;
      if (req.user) {
        admin = req.user.role === 'admin';
      }
      recommends = recommend_obj;
      // console.log(recommends);
      const sleep = milliseconds => { 
        return new Promise(resolve => setTimeout(resolve, milliseconds)); 
      }; 
      timeToSleep = 200;
      sleep(timeToSleep).then(() => { 
        // code to execute after sleep 
        res.render('index', { auth: req.isAuthenticated(), admin: admin, items: items, user: req.user, recommends: recommends[0] });
      }); 
    });

});

router.get('/stores', (req, res) => {
    db.stores.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']},
    }).then(stores => {
      admin = false;
      if (req.user) {
        admin = req.user.role === 'admin';
      }
      res.render('stores', { auth: req.isAuthenticated(), admin: admin, stores: stores });
    });
});


router.get('/sellers', (req, res) => {
    db.seller.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']},
    }).then(sellers => {
      admin = false;
      if (req.user) {
        admin = req.user.role === 'admin';
      }
      res.render('sellers', { auth: req.isAuthenticated(), admin: admin, sellers: sellers });
    });
});


router.get('/', checkAuth, (req,res) => {
    admin = false;
    profile_pic = '';
    if (req.user) {
      admin = req.user.role === 'admin';
      profile_pic = req.user.profile_pic;
    }
    res.render("login", { auth: req.isAuthenticated(), admin: admin, profile_pic: profile_pic  });
});


router.post('/add', checkNotAuth, (req, res) => {
  db.shoppings.create({
    quantity: 1, 
    cust_id: req.body['cust_id'], 
    item_id: req.body['item_id'],
    active: true
  })
  .then( (result) => {
      res.json(result) 
  });
});

router.put('/update', checkNotAuth, (req, res) => {
  db.shoppings.update({
    active: false
  }, {
    where: {cust_id: req.user.id} 
  })
  .then( (result) => {
      // console.log(result);
      res.json(result) 
  });
});

module.exports = router
