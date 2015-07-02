var Queue = function(){
  var instance = {count: 0, properties: 0, lowestIndex: 0};

  _.extend(instance, queueMethods);
  return instance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value){
    this[this.count + ''] = value;
    this.count++;
    this.properties++;

  },
  dequeue: function(){
    if(this.properties > 0){
      this.properties--;
      this.lowestIndex++;
      return this[this.lowestIndex-1 + ''];
    }

  },
  size: function(){
    return this.properties;
  }
};



