module.exports.beforeStartup = function(app, cb) {  
    // do some operations before application start up  
    cb();  
};  
  
  
module.exports.afterStartup = function(app, cb) {  
    // do some operations after application start up 
    setTimeout(function(argument) {
    	console.log("afterStartup")
		app.rpc.game.remote.recover(null,function(){})
    },3000)
	cb()
};
  
  
module.exports.beforeShutdown = function(app, cb) {  
    // do some operations before application shutdown down  
    cb();  
};  
  
  
module.exports.afterStartAll = function(app) {  
    // do some operations after all applications start up  
};  
