exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce( function(acc,val){
        return acc + val;
    });

  },

  remove: function(arr, item) {
    for(i = arr.length; i >= 0; i--){
        if(arr[i] == item){
            arr.splice(i,1);
        }
    } 
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(i = arr.length; i >= 0; i--){
        if(arr[i] == item){
            arr.splice(i,1);
        }
    } 
    return arr;
        
  },

  append: function(arr, item) {
        (arr.push(item));
        return arr;
  },

  truncate: function(arr) {
        arr.splice(arr.length-1,1);
        return arr;
  },

  prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
  },

  curtail: function(arr) {
        arr.shift();
        return arr;
  },

  concat: function(arr1, arr2) {
        return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
        arr.splice(index,0,item);
        return arr; 
  },

  count: function(arr, item) {
    count = arr.reduce(function(n, val) {
    return n + (val === item);
    },0);
    return count;
},

  duplicates: function(arr) {
    var obj = {};
    arr.forEach(function(ele){
        if(obj[ele] == undefined){
            obj[ele] =1;
        }
        else{
            obj[ele] ++;
        }
    });

    arr.forEach(function(ele){
        if(obj[ele] == 1){
            delete obj[ele]
        }
    });
    
        var arr = Object.keys(obj).map(Number);
        return arr;
},


  square: function(arr) {
    return  arr.map(function(ele){
        return ele * ele;  
    });
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = [];
    for(var i =0; i < arr.length; i++){
        if(arr[i] == target)
            occurrences.push(i); 
    }
    return occurrences;
  }
};
