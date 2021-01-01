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

  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    visited[start] = true;
    helper(start);
    return result;

    function helper(vertex) {
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          helper(neighbor);
        }
      });
    }
  }

  bfs(start) {
    const result = [];
    const visited = {};
    const queue = [];
    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex('seoul');
graph.addVertex('yongin');
graph.addEdge('seoul', 'yongin');
graph.addVertex('osan');
graph.addEdge('yongin', 'osan');
graph.addVertex('ansung');
graph.addEdge('yongin', 'ansung');
graph.addVertex('pyungtaek');
graph.addEdge('pyungtaek', 'ansung');
graph.addEdge('pyungtaek', 'seoul');
graph.addEdge('osan', 'seoul');

console.log(graph.adjacencyList);
console.log(graph.dfs('seoul'));
console.log(graph.bfs('seoul'));
