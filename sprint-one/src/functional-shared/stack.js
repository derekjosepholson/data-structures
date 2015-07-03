var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {properties: 0  };
  _.extend(instance, stackMethods); 
  return instance;
};

var stackMethods = {
	
  push: function(value){
    this[this.properties +""] = value;
	this.properties+=1;
  },
  pop: function(){
    if(this.properties > 0){
      this.properties--;
      return this[this.properties + ""];
    }
  },
  size: function(){
    return this.properties;
  }
};