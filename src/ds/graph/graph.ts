export class Graph {
  numberofNodes: number;
  adjacentList: object;
  constructor() {
    this.numberofNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {}
  addEdge(node1, node2) {
    //undirected Graph
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}
