// <--Sorted Union-->

function unite(arr1, arr2, arr3) {
    var placeHolder = arr1;
    // *Create a duplicate array from original array*
    for(var i = 0; i < arguments.length; i++){
        // *Iterates through the length of arguments*
        for(var j = 0; j < arguments[i].length; j++){
            // *Iterates through current index value of arguments*
            if(placeHolder.indexOf(arguments[i][j]) === -1){
                // *Check if array contains the value of arguments*
                // *returns -1 if it does not*
                placeHolder.push(arguments[i][j]);
                // *Add it to the end of the placeholder array*
            }
        }
    }
    arr1 = placeHolder;
    // *Set original array equal to altered array*
    return arr1;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));


// <--Search and Replace-->

function myReplace(str, before, after){
    
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        // *Check if first letter is capitalized*
        str = str.replace(before, after.charAt(0).toUpperCase(0) + after.slice(1));
        // *Change after to be capitalized*
   
    }  else {

    str = str.replace(before, after);
    // *Replace before string with after string*
    }
    return str;
}

console.log(myReplace("A quick brown foxed jumped over the lazy dog", "jumped", "leaped"));


// <--Diff Two Arrays-->

function diff(arr1, arr2) {
    var placeHolderArr = [];
    // *same, same: but different.*
    for(var i = 0; i < arr1.length; i++){
        // *Iterate through array 1
        if(arr2.indexOf(arr[1]) === -1){
            // *If array 2 doesn't contain items in array 1*
            placeHolderArr.push(arr1[i]);
            // *Add it to the new array*
        }
    }
    // *Vice versa switch array 1 with array 2*
    for(var j = 0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) === -1){
            placeHolderArray.push(arr2[j]);
        }
    }
    return placeHolderArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// <--Arguments Optional-->

function addTogether() {
    // *Create an array that slices our arguments on each param*
    var params = [].slice.call(arguments);
    // *Check if EVERY PARAM PART is a number by iterating through with a function and if it isn't return undefined*
    if(!params.every(function(param){
      return typeof param === 'number';
    })) {
      return undefined;
    }
    // *If array has two values add them together*
    if (params.length ===2){
      return params[0] + params[1];
      }
      else {
    // *Store the first paramater*
    var firstParam = params[0];
      }
    // *Store a function that will take in the SECOND PARAMATER and using RECURSION call itself to add the values*
    var addOneMore = function(secondParam){
      return addTogether(firstParam, secondParam);
      };
    // *Returns the value of above*
      return addOneMore;
    }
    
    console.log(addTogether("http://bit.ly/IqT6zt"));
    

// <--Make a person-->

var Person = function(firstAndLast) {
    var array = firstAndLast.split(" ");
    this.getFirstName = function(){
      return array[0];
    }; 
  
    this.getLastName = function(){
      return array[1];
    };
    this.getFullName = function(){
      return array[0] + " " + array[1];
    };
    this.setFirstName = function(first){
      array[0] = first;
    };
    this.setLastName = function(last){
      array[1] = last;
    };
    this.setFullName = function(firstAndLast){
      var arraySplit = firstAndLast.split(" ");
      this.setFirstName(arraySplit[0]);
      this.setLastName(arraySplit[1]);
    };
  };
  
  var bob = new Person('Bob Ross');
  bob.setFullName('Haskell Curry');
  bob.getFullName()
  
  
  console.log(bob.getFullName());


// <--Map the Debris-->

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    var newArray = [];
    for (var i = 0; i<arr.length; i++){
      var results = 
    Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt,3)/GM));
      newArray.push({name:arr[i].name, orbitalPeriod: results});
    }
    return newArray;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
