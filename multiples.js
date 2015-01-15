/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function(n){
  var sum = 0;
  var count = 0;

  while (count < n){
    if (count % 3 === 0 || count % 5 === 0){
      sum += count;
    }
    count++;
  }
  // do your work here
  
  return sum;
};