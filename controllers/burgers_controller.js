var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req,res){
    burger.all(function(burger_data){
        var hbsObject = {
            burgers: burger_data
        };
        console.log("burger_data");
        res.render("index", hbsObject);
    })
    
});

router.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });



module.exports = router;