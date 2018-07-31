var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        var hbsObject = {
            burgers: burger_data
        };
        console.log("burger_data");
        res.render("index", hbsObject);
    })

});

router.put("/burgers/update", function (req, res) {
    var condition = "id = "+req.body.burger_id;
    console.log("Condition: "+condition);
    // burger.update(req.body.burger_id, function (result) {
    //     console.log(result);
    //     res.redirect('/');

    // });
    burger.update( condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end()
        }
        else{
            res.status(200).end();
        }
    })
});

router.post("/burgers/create", function (req, res) {
    burger.create(["burger_name"
],[req.body.burger_name]
, function (result) {
        res.redirect('/');
    })
});





module.exports = router;