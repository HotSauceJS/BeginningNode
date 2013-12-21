// Process contains information about the process running the script
console.log(process.argv);

var a = process.argv[2];
var b = process.argv[3];

var multiply = function(first, second, callback){
  setTimout(function(){ 
     console.log('adding', first, second);
     result = first * second;
     callback(result);
  }, 1000);
}

var report = function(value){
  console.log(value);
}

multiply(a, b, report);