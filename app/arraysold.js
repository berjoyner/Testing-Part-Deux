//testing: 

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        return arr.indexOf(item);

},

    sum : function(arr) {
        var sum = 0;

        for(var i = 0; i< arr.length; i++){
            sum += arr[i];
        }
       
       return sum;

},

    remove : function(arr, item) {

        var newArr = [];

        for(var in= 0; i < arr.length; i++) {
            if(arr[i] !== item) {
            newArr.push(arr[i]);
        }
    }
            
      return newArr;  
},

    removeWithoutCopy : function(arr, item) {


    },

    append : function(arr, item) {


    },

    truncate : function(arr) {


    },

    prepend : function(arr, item) {


    },

    curtail : function(arr) {


    },

    concat : function(arr1, arr2) {


    },

    insert : function(arr, item, index) {


    },

    count : function(arr, item) {


    },

    duplicates : function(arr) {

    },

    square : function(arr) {
    //     var newArr =[];

    //     for(var i = 0, len=arr.length; i< len; i++){
    //         newArr.push(arr[i] * arr[i]);
    //     }

    //     return newArr;

    // },

    findAllOccurrences : function(arr, target) {

    }
  };
};
});
