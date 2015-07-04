var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.currentChild =0;
  newTree.children = [];  
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  _.extend(this.children[this.currentChild], treeMethods);
  this.currentChild++;
};

treeMethods.contains = function(target){

  var falseUnlessTrue = false;

  var recursiveChecker = function(currentNode){              
    if(falseUnlessTrue === false){
      for(var index = 0; index < currentNode.children.length; index++){
        if(currentNode.children[index].value === target){
          falseUnlessTrue = true;   
        }
      }
    
      for(var a = 0; a < currentNode.children.length; a++){
        recursiveChecker(currentNode.children[a]);          //should this be returned?
      }
    }
  }; 

  recursiveChecker(this);
  return falseUnlessTrue;


  
   

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
