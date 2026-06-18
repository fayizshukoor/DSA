class Graph{
    constructor(){
        this.adjList = {};
    }
    
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }
    
    addEdge(vertex1, vertex2, weight){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1);
        }
        
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2);
        }
        
        this.adjList[vertex1].push({
            node:vertex2,
            weight: weight
        });
        
        this.adjList[vertex2].push({
            node: vertex1,
            weight: weight
        });
    }
    
    display(){
        for(let vertex in this.adjList){
            let connections = this.adjList[vertex].map(edge => `${edge.node}(${edge.weight})`);
            console.log(vertex + '->' + connections);
        }
    }
}

let graph = new Graph();
graph.addEdge('A','B',30);
graph.addEdge('A','C',40);
graph.addEdge('B','D',50);
graph.addEdge('C','D',60);
graph.display();