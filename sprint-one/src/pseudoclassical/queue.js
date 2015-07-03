var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.lowestIndex = 0;
  this.properties = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.count] = value;
  this.count++;
  this.properties++;
};

Queue.prototype.dequeue = function(){
  if (this.properties > 0){
    this.properties--;
    this.lowestIndex++;
    return this[this.lowestIndex - 1];
  }
};

Queue.prototype.size = function(){
  return this.properties;
};



