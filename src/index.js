if (array=== undefined || array.length===0){
  return 0;
}

exports.min = function min (array) {
  if (array=== undefined || array.length===0){
    return 0;
  }
  var minarr=Math.min.apply(null, array);
return minarr
}

exports.max = function max (array) {
  if (array=== undefined || array.length===0){
    return 0;
  }
  maxarr = -Infinity
  for (var i=0; i<array.length; i++){
    maxarr=array[i]
  }
  return maxarr
  
}

exports.avg = function avg (array) {
  if (array=== undefined || array.length===0){
    return 0;
  }
  var arraySUM= sum(array);
  return arraysum/array.length

}

