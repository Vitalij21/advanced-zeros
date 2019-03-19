module.exports = function getZerosCount(number, base) {
  // your implementation
  //var number = 15;
  //console.log(number);
  //var ind = 0;
  //var z = 0;
  //var arr = [];
  //var arr2 = [];
  var b = Infinity;
  
    //for (var i=1; i<=number; i++) {
    //arr.push(i);
  for (var i=2; i<=base; i++) {
    if (base % i == 0) {
      var k = 0;
        while (base % i == 0) {
          k = k+1;
          base = base / i;

        }
          var n = number;
          var a = 0;
          while (n / i > 0) {
            n = Math.floor(n / i);            
            a = a + n;

          }     
         
          var b = Math.min(a / k, b);
          var c = Math.floor(b);      

    }

  }
    //var d = i;
    //if (arr[i-1] % 5 == 0) {
      //arr2.push(arr[i-1]);
    //}
  
  //console.log (arr);
  //console.log (arr2);
  //a = arr2[i];

 //while (d % 5 == 0) {
    //d= d/5;
    //z= z+1;
  //}
  return (c);
}
