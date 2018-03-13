module.exports = function getZerosCount(number, base) {
  // your implementation
	var ch;
	var col;
	var g;
	var count = number;
	var time_var = base;

  for (let i = 2; i <= base; i++){
    if (time_var % i === 0){
      ch = 0;
    while (time_var % i === 0){
		time_var = Math.floor(time_var / i);
        ch++
      };
	  // console.log();
      col = 0;
      g = number;
      while (g/i > 0) {
        col += Math.floor(g/i);
        g = Math.floor(g/i);
      };
		var timeVar = Math.floor(col/ch);
		  if(count > timeVar ){
			count = timeVar;
 	   }
   }
 }
  return count;
}
