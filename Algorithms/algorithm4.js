// 1.
function greaterThanY(y,arr) {
    var greater = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > y) {
        greater = greater + 1;
      }
    }
    console.log(greater);
  }
  
console.log(greaterThanY(3,[2,5,7,8,1,0,5])); //Should log 4


// 2.
function maxMinAvgValues(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
        sum = sum + arr[i];
      } else if(arr[i] < min){
        min = arr[i];
        sum = sum + arr[i];
      } else {
        sum = sum + arr[i];
      }
    }
    var avg = sum/arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
  }

  console.log(maxMinAvgValues([2,5,7,8,1,0,5])); //Should log 8,0,4


// 3.
function negativesToString(arr){
    var newArray = [];
    for(var i = 0; i<arr.length; i++){
      if(arr[i]<0){
        newArray.push("Dojo");
      }else{
        newArray.push(arr[i]);
      }
    }
    console.log(arr);
    return newArray;
  }
  
  console.log(negativesToString([2,-5,-7,8,-1,0,5]));


// 4.
function removeValues(arr,start,end){
    arr.splice(start,end);
    return arr;
  }
  
  console.log(removeValues([2,3,4,5,6,1,8,4,2],1,4));