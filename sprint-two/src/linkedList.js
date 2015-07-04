var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.headIndex = 0;
  list.tailIndex = 0;

  list.addToTail = function(value){
    list.tail = Node(value);
    list[list.tailIndex] = list.tail;
    list.head = list[list.headIndex];
    list.tailIndex ++;
  };

  list.removeHead = function(){
    if (list.headIndex < list.tailIndex){
      list.head = list[list.headIndex + 1];
      list.headIndex++;
      var deletedHead = list[list.headIndex-1].value;
      delete list[list.headIndex-1];
      return deletedHead;
    }
  };

  list.contains = function(target){
    for (var key in list){
      if (typeof Number(key) === "number" && list[key].value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/* list {
  {value: value, next: null}
}
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
