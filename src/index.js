

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

  // maxarr = -Infinity
  // for (var i=0; i<array.length; i++){
  //   if (array[i]>maxarr) {
  //     maxarr=array[i]
  //   } 
  // }

  var maxarr=Math.max.apply(null, array);
  return maxarr;
  
}

exports.avg = function avg (array) {
  if (array=== undefined || array.length===0){
    return 0;
  }
  var sumarr=0;
  for (var i=0; i<array.length; i++){

  sumarr +=array[i];
  }
  return ((sumarr)/(array.length))
  }


