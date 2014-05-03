//testing:DONE (but 1)

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

        for(var i= 0; i < arr.length; i++) {
            if(arr[i] !== item) {
            newArr.push(arr[i]);
        }
    }
            
      return newArr;

        
    },

    removeWithoutCopy : function(arr, item) {
        *splice for loop if statement alter length and index

    },

    append : function(arr, item) {
            arr.push(item)
            return arr;

    },

    truncate : function(arr) {
            arr.pop()
            return arr;


    },

    prepend : function(arr, item) {
            arr.unshift(item)
            return arr;

    },

    curtail : function(arr) {
        arr.shift()
        return arr;


    },

    concat : function(arr1, arr2) {
        var nwArr =arr1.concat(arr2);
        return nwArr;

    },

    insert : function(arr, item, index) {
        var nwArr = arr.splice(index, 0, item)
        return arr;

    },

    count : function(arr, item) {
       var countArr = [];
       for(i=0; i<arr.length; i++) {
        if(arr[i]===item){
            countArr.push(arr[i]);
        }
       }
       return countArr.length;
    },

    // duplicates : function(arr) {

    // },

    square : function(arr) {

        var newArr =[];

        for(var i = 0; i < arr.length; i++){
            newArr.push(arr[i] * arr[i]);
        }

        return newArr;

    },

    // findAllOccurrences : function(arr, target) {

    // }
  };
});