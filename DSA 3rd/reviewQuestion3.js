// question 3

class Graph{
    constructor(){
        this.adjList = {};
    }
    
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
        
    }
    
    addEdge(vertex1, vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2);
        }
        
        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }
    
    removeVertex(vertex){
        for(let neighbour of this.adjList[vertex]){
            this.removeEdge(neighbour, vertex);
        }
        delete this.adjList[vertex];
    }
    
    removeEdge(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }
    
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + "->" + [...this.adjList[vertex]])
        }
    }
}

const graph = new Graph();

graph.addEdge('A','B');
graph.display();
graph.removeEdge('A','B');
graph.display();