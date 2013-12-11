var getData = function(callback) {
   setTimeout(function() {
	   console.log("Looking up data");
	   if (callback) callback();
   }, 2000);
}

var createChart = function() {
   console.log("charting data"); 
}

getData(createChart);