exports.min = function min(array){
  if(array===undefined||array[0]===undefined)return 0;
  var minNum = array[0];
  for(i =1;i<array.length;i++){
   if(minNum>array[i]){minNum=array[i];}
  }
  return minNum;
}

exports.max = function max (array) {
  if(array===undefined||array[0]===undefined)return 0;
  var maxNum = array[0];
  for(i =1;i<array.length;i++){
   if(maxNum<array[i]){maxNum=array[i];}
  }
  return maxNum;
}

exports.avg = function avg (array) {
  if(array===undefined||array[0]===undefined)return 0;
  var sum=0;
  for(i =0;i<array.length;i++){
   sum+=array[i];
   }
   return sum/array.length;
}
