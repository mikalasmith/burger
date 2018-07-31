var orm = require ("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })

    },
    update: function(id, cb) {
        orm.update("burgers",id,cb);
        //   cb(res);
        
    },
    create: function(name, cb) {
        orm.create("burgers", name, cb); 
    }
};

module.exports = burger;