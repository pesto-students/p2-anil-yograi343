class Graph {
    constructor() {
      this.adjList = {};
    }
    addVertex(vertex) {
      if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }
    addEdge(v1, v2) {
      this.adjList[v1].push(v2);
    }
    bfs(start, dst) {
      let q = [];
      q.push([start]);
      const result = [];
  
      while (q.length) {
        let popped = q.shift();
        let lastPopped = popped[popped.length - 1];
        if (lastPopped === dst) {
          result.push(popped);
        } else {
          const neighbours = this.adjList[lastPopped];
          for (let n of neighbours) {
            const temp = [...popped];
            temp.push(n);
            q.push(temp);
          }
        }
      }
      return result;
    }
}
  
let g = new Graph();

let vrtx = [0, 1, 2, 3, 4];

for (let i = 0; i < vrtx.length; i++) {
    g.addVertex(vrtx[i]);
}

g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(0, 3);

g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 4);

console.log(g.bfs(0, 4));
