var Graph = function(){
  this.nodes = {};
  this.index = 0;
  this.edges = {};
  this.edgesIndex = 0;
};

Graph.prototype.addNode = function(node){
  this.nodes[this.index] = {value: node, edges: []};
  this.index++;
};

Graph.prototype.contains = function(node){
  for(var i in this.nodes){
    if (this.nodes[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var a in this.nodes){
    if(this.nodes[a].value === node){
      delete this.nodes[a];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i in this.edges){
    if( (this.edges[i].firstEdge === fromNode && this.edges[i].secondEdge === toNode) || (this.edges[i].firstEdge === toNode && this.edges[i].secondEdge === fromNode) ){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    var firstEdge;
    var secondEdge;
    for(var key in this.nodes){
      if(this.nodes[key].value === fromNode && this.nodes[key].value === toNode){
        firstEdge = this.nodes[key].edges;
        secondEdge = this.nodes[key].edges;
      }else if(this.nodes[key].value === fromNode){
        firstEdge = this.nodes[key].edges;
      }else if(this.nodes[key].value === toNode){
        secondEdge = this.nodes[key].edges;
      }
    }
    firstEdge.push(toNode);
    secondEdge.push(fromNode);
    this.edges[this.edgesIndex] = {firstEdge: fromNode, secondEdge: toNode};
    this.edgesIndex++;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.nodes){  
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



