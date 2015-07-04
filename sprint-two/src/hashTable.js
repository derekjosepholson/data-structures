var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //using limitinstead of storage length
  for (var a = 0; a < this._limit; a++){
    this._storage[a] = [];
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var b = 0; b < this._storage[i].length; b++){
    if (this._storage[i][b][0] === k){
      return this._storage[i][b][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var b = 0; b < this._storage[i].length; b++){
    if (this._storage[i][b][0] === k){
      this._storage[i][b][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
