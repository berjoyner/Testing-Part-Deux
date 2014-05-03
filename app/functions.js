//testing:DONE!

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    	return fn.apply(fn,arr);

    },

    speak : function(fn, obj) {

    	return fn.apply(obj); 
    	//return fn.call(fn,obj);
    	//return fn.call(this,obj);
    },

    useArguments : function() {
        var should = 0;
        for(var i = 0; i < arguments.length; i++){
            should += arguments[i];
        };
        return should;
    }
  };
});
