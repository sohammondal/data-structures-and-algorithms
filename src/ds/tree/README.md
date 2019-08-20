# TREES 🌳 🌲

**REAL LIFE EXAMPLES**
- HTML Page 
- Chess Games (before ML) used Tree DS to make decisions
- [Abstract Syntax Tree](https://www.researchgate.net/profile/Peter_Fritzson/publication/228792639/figure/fig1/AS:393782852898820@1470896556105/Abstract-syntax-tree-of-the-while-loop.png)
- Comments on Facebook

## TYPES

**BINARY TREE**
- FULL OR PERFECT BINARY TREE 
    - every node other than the leaves has two children
    - number of nodes on the last level = number of nodes on all the other levels + 1<br>
    ![FULL OR PERFECT BINARY TREE](https://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/FullBinary.jpg)
    - *How to calculate the number of nodes?*<br>
        **Level 0**: 2^0 = 1<br>
        **Level 1**: 2^1 = 2<br>
        **Level 2**: 2^2 = 4<br>
        **Level 3**: 2^3 = 8<br>
    - *How to calculate the total number of nodes?* <small>(s - steps)</small> <br>
        **2^s - 1**<br>
        The above PBT has 4 steps, so no. of nodes = 2^4-1 = 15
    - **no. of nodes = 2^s - 1**<br>
      **log nodes = s** <small>(ignoring constant 1)</small> <br>

- COMPLETE BINARY TREE
    - every level, except possibly the last, is completely filled
    - all nodes are as far left as possible<br>
    ![COMPLETE BINARY TREE](https://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/CompleteBinary.jpg)

**BINARY SEARCH TREE**
- A subset of Binary Tree
- Maintains relationships between nodes like Folder Directory ( Root Folder - Sub Folder)
- Lookup is extremely fast
- Rules -
    - All child nodes to the right of the root node must be > the current node & vice versa
    - A node can have upto 2 children
- Types -
    - Balanced -
        - AVL Tree - [Visualization](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html) & [Notes](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
        - Red Black Tree - [Visualization](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html) & [Notes](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
        - [Comparison](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
    - Unbalaced - To balance a BST we use AVL Tree or Red Black Tree<br>
    ![Balanced & Unbalanced](https://media.cheggcdn.com/media%2F039%2F039a5494-18d0-4e16-9496-f0313a1bc68e%2FphpRI9tlB.png)
- Operation Cost

    |        | Average | Worst |
    |--------|---------|-------|
    | Lookup | O(logN) |  O(N) |
    | Insert | O(logN) |  O(N) |
    | Delete | O(logN) |  O(N) |
    
- [Visualization](https://visualgo.net/bn/bst?slide=1)
- PROS -
    - Better than O(n)
    - Ordered - Ordering of keys stored in the tree. Any time we need to traverse the increasing (or decreasing) order of keys, we just need to do the in-order (and reverse in-order) traversal on the tree.
    - Flexible in size
- CONS -
    - No O(1) operation
    - Always have to implement a balanced binary search tree - AVL tree, Red-Black tree, Splay tree otherwise the cost of operations may not be logarithmic and degenerate into a linear search on an array.

**BINARY HEAPS**
- Every child node has a parent of greater priority (or value)
- Can we used in any algorithm where ordering is important
- Good for compariting items
- Left to right insertion
- [Visualization](https://visualgo.net/en/heap)
- Types -
    - Max Heap
    - Min Heap<br>
    ![MAX & MIN HEAP](https://i2.wp.com/www.techiedelight.com/wp-content/uploads/2016/11/Min-Max-Heap.png?zoom=2.625&resize=368%2C214&ssl=1)
- Implementation -
    - Priority Queue

- Operation Cost

    |        |         |
    |--------|---------|
    | Lookup | O(N)    | 
    | Insert | O(logN) |
    | Delete | O(logN) |

- PROS -
    - Better than O(n)
    - Priority
    - Flexible in size
    - Fast Insert
- CONS -
    - Slow Lookup

**Trie (aka Prefix Tree)**
- Can have more than 2 child nodes
- Specialized tree used for searching using strings
- Implementation - Auto Completion, IP Routing, Searching through a dictionary
- O(Lenght of the word being searched)<br>
![Trie](https://i2.wp.com/www.techiedelight.com/wp-content/uploads/2016/11/Trie.png?fit=327%2C528&ssl=1)