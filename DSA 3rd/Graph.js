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

    removeEdge(vertex1, vertex2){
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }
    
    removeVertex(vertex){
        for(let neighbour of this.adjList[vertex]){
            this.removeEdge(vertex, neighbour);
        }
        delete this.adjList[vertex];
    }

    dfs(startVertex){
        let visited = new Set();
        
        let traverse = (currentVertex) =>{
            
                visited.add(currentVertex);
                console.log(currentVertex);
            
            for(let neighbour of this.adjList[currentVertex]){
                if(!visited.has(neighbour)){
                    traverse(neighbour);
                }
            }
        }
        
        traverse(startVertex);
    }

    dfsIterative(startVertex){
        let stack = [];
        stack.push(startVertex);
        let visited = new Set();
        visited.add(startVertex);
        while(stack.length > 0){
            let currentVertex = stack.pop();
            console.log(currentVertex);
            for(let neighbour of this.adjList[currentVertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    stack.push(neighbour);
                }
            }
        }
    }

    bfs(startVertex){
        let queue = [];
        queue.push(startVertex);
        let visited = new Set();
        visited.add(startVertex);
        
        while(queue.length > 0){
            let currentVertex = queue.shift();
            console.log(currentVertex);
            
            for(let neighbour of this.adjList[currentVertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
    
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + "-> " +[...this.adjList[vertex]]);
        }
        
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.display();
graph.dfs('A');