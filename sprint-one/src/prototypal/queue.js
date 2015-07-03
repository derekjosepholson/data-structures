var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.properties = 0;
  instance.lowestIndex = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this[this.count] = value;
    this.count++;
    this.properties++;
  },
  dequeue: function(){
    if (this.properties > 0){
      this.properties--;
      this.lowestIndex++;
      return this[this.lowestIndex - 1];
    }
  },
  size: function(){
    return this.properties;
  }
};


