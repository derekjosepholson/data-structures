var Queue = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var lowestIndex = 0;
  var properties = 0;

  someInstance.enqueue = function(value){
    someInstance[count+''] = value;
    count++;
    properties++;
  };

  someInstance.dequeue = function(){
    if(properties > 0){
      properties--;
      lowestIndex ++;
      return someInstance[lowestIndex-1 + ''];
    }
  };

  someInstance.size = function(){
    return properties;
  };

  return someInstance;
};
