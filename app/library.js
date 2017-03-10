'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
     var average;
     var sum = num1 + num2 + num3;
     var average = sum/3;
     return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
   var factorial = num;
    if (num === 0 || num === 1)
     return 1;
    while (num > 1) {
     num--;
     factorial *= num;
    }
   return factorial;
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
   var fTemp = 0;
     fTemp = cTemp * 9 / 5 + 32;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
   var cTemp = 0;
     cTemp = (fTemp - 32) * 5 / 9;
   return cTemp;
 }

}
