var events = require('events');
var eventEmitter = new events.EventEmitter();
 
var greeting = function()
{
  console.log('hello world');
}

var niceToMeet = function()
{
  console.log('nice to meet you');
}

eventEmitter.on('announce', greeting);
eventEmitter.on('announce', niceToMeet);

setInterval(function(){
  eventEmitter.emit('announce');
}, 2000);
