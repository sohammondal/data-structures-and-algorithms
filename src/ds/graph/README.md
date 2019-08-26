<h1>GRAPH <img src="https://img.icons8.com/color/48/000000/graph-clique.png" height="30" width="30"/> </h1>


- A non-linear data structure
- Has a set of values that are related in a pair-wise fashion.
- Consists of nodes and edges. The nodes are sometimes also referred to as **vertices** and the **edges** are lines or arcs that connect any two nodes in the graph.<br><br>
  ![graph](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)
  <br><small>Source: GeeksforGeeks</small>
- In the above Graph, the set of vertices V = {0,1,2,3,4} and the set of edges E = {01, 12, 23, 34, 04, 14, 13}
  
**REAL LIFE EXAMPLES**
- In Facebook or LinkedIn, each user is represented with a vertex(or node). Each node is a structure and contains information like user id, name, gender, locale etc. If two users are friends then there is an edge running between them. Facebook’s Friend suggestion algorithm uses graph theory.
- Google maps uses graphs for building transportation systems, where intersection of two(or more) roads are considered to be a vertex and the road connecting two vertices is considered to be an edge, thus their navigation system is based on the algorithm to calculate the shortest path between two vertices.

**TYPES**
- Direction
  - Directed
    - In Twitter, one can follow a person but that person may not follow back.<br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Directed.svg" height="60" weight="60">

  - Undirected
    - In Facebook, a friend is connected to another friend. So it's a undirected relation.<br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Undirected.svg/375px-Undirected.svg.png" height="60" weight="60">
  
- Weighted
  - Unweighted - An unweighted graph is one in which an edge does not have any cost or weight associated with it.<br>
    <img src="https://i.stack.imgur.com/mPzx7.gif" height="200" weight="200">
  - Weighted - A weighted graph is one in which an edge has a cost or weight associated with it.<br> 
    <img src="https://ucarecdn.com/a67cb888-aa0c-424b-8c7f-847e38dd5691/" height="200" weight="200">
  - Now both of these can be either Directed or Undirected Graph too.
  - Example - <br>
    A road map with vertices as cities and any edge from City1 to City2 denoting if there is a direct route between them. The weight on each edge will denote the distance between the two cities.

    Now, if you are only concerned with the connectivity information between any two cities and not the distance between them then you can abstract the weight and hence it will become an unweighted graph.
- Cyclic and Acyclic<br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Undirected_6_cycle.svg/1200px-Undirected_6_cycle.svg.png" height="150" weight="150">
  - A cyclic graph is a graph containing at least one graph cycle.
  - A graph that is not cyclic is said to be acyclic.