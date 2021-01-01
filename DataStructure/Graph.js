class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (this.adjacencyList[v] === undefined) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach((vertex) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[v];
  }
}

const graph = new Graph();

graph.addVertex('seoul');
graph.addVertex('yongin');
graph.addEdge('seoul', 'yongin');
graph.addVertex('osan');
graph.addEdge('yongin', 'osan');
graph.removeVertex('yongin');
console.log(graph.adjacencyList);
