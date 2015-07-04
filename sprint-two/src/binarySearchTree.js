var BinarySearchTree = function(value){
  var tree = {};
  tree.left = undefined;
  tree.right = undefined;
  tree.value = value;
 
//create function that handles recursion. It will take in a node as a parameter
  //if the current node is greater than the value AND doesn't have left child/property (1st base case)
    // set the current nodes left property to the value
  //else if the current node is less than the value AND doesn't have right child/property (2nd base case)
    //set current nodes right property to the value
  
  //if the current node is greater than the value AND DOES have left child/property
    //recursively call the method with the left property as the parameter
  //else if the current node is less than the value AND DOES have right child/property
    //recursively call the method with the right property as the parameter


//call recursive function with tree as the parameter    

  tree.insert = function(value){  

    function recursive(node){
      if (node.value > value && typeof node.left === 'undefined'){
        node.left = BinarySearchTree(value);
      }else if(node.value < value && typeof node.right === 'undefined'){
        node.right = BinarySearchTree(value);
      }else if(node.value > value){
        recursive(node.left);
      }else if(node.value < value){
        recursive(node.right);
      }
    }
    recursive(tree);
  };

    //create function to handle recursion that will take in a node as a parameter.{
      //if current node value equals value (parameter)    (base case)
        //return true
      // if current node is greater than value AND does have left child/property 
        //call recursive function with left child property as the parameter                
      //else if current node is less than the value AND does have right child/property 
        // call recursive function with right child property as the parameter               

      // can return false (because it doesn't have chlidren)
    //}
    //call recursive function with the tree as the parameter   (call with return then function name and tree as parameter)
  tree.contains = function(value){
    function recursive(node){
      if (node.value === value){
        return true;
      }else if(node.value > value && typeof node.left !== 'undefined'){
        return recursive(node.left);
      }else if(node.value < value && typeof node.right !== 'undefined'){
        return recursive(node.right);
      }
      return false;
    }
    return recursive(tree);
  };

    //create recursive function that will have node as a parameter
      //call callback on the node VALUE
      //if it has a left child property
        // call recursive function with left node as the parameter
      //if it has a right child property
        // call recursive function with right node as the parameter 
      // 

  tree.depthFirstLog = function(callback){
    function recursive (node){
      callback(node.value);
      if (typeof node.left !== 'undefined'){
        recursive(node.left);
      }
      if(typeof node.right !== 'undefined'){
        recursive(node.right);
      }
    }
    recursive(tree);
  };
  
  return tree;
};

/*;
 * Complexity: What is the time complexity of the above functions?
 */
