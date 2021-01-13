var express = require('express')
var router = express.Router();
var path = require('path')
var Sequelize = require('sequelize')
const db = require('../models/index.js')
const Op = Sequelize.Op

const { pool } = require("../dbConfig");
const { checkAuth, checkNotAuth, checkNotAdmin } = require("../authConfig.js");

// Shoppings.hasMany(Items, {foreignKey: 'item_id', as: 'items'});

router.get('/', checkNotAuth, (req,res) => {
    // db.shoppings.findAll({
    //   attributes: {exclude: ['createdAt', 'updatedAt']},
    //   include: [{model: models.items, as: 'items'}]
    db.sequelize.query("select i.name,i.id,i.cost from shoppings s inner join items i on i.id=s.item_id where s.active=true and s.cust_id=(:id)", {replacements:{id:req.user.id}}
    ).then(shoppings => {
      admin = false;
      if (req.user) {
        admin = req.user.role === 'admin';
      }
      
      var sum = 0;
      for (i = 0; i < shoppings[0].length; i++) {
        sum += Number(shoppings[0][i].cost);
      }
      res.render("cart", { auth: req.isAuthenticated(), admin: admin, user: req.user, shoppings: shoppings[0], sum: sum});
     });
});

module.exports = router
