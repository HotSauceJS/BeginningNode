console.log(process.argv);

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);

var multiply = function(first, second, callback){
  result = first * second;
  callback(result);
}

var divide = function(first, second, callback){
  result = first / second;
  callback(result);
}

var report = function(value){
  console.log(value);
}

multiply(a, b, report);
divide(a, b, report);