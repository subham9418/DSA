class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter((v) => v !== vertex2)
      );
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter((v) => v !== vertex1)
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      for (let adjacent of this.adjacencyList.get(vertex)) {
        this.adjacencyList.set(
          adjacent,
          this.adjacencyList.get(adjacent).filter((v) => v !== vertex)
        );
      }
      this.adjacencyList.delete(vertex);
    }
  }

  printGraph() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    if (!visited.has(start)) {
      console.log(start);
      visited.add(start);

      for (let neighbor of this.adjacencyList.get(start)) {
        this.dfs(neighbor, visited);
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.printGraph();

console.log("BFS Traversal:");
graph.bfs("A");

console.log("DFS Traversal:");
graph.dfs("A");
