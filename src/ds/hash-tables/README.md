# HASH TABLES #️⃣
- AKA hashes (Ruby), maps (Java), dictornaries (Python), objects (JS)

### What is hashing or hash function?
- A special function that maps a given value to particular key for faster access of elements
- Efficiency of hashing depends on the Hashing function used
- Examples of popular hashing function - MD5, SHA-1, SHA-256. <small>[Link](https://www.miraclesalad.com/webtools/md5.php)</small>
- Let a hash function H(x) maps the value x at the index x%10 in an Array. For example if the list of values is [11,12,13,14,15] it will be stored at positions {1,2,3,4,5} in the array or Hash table respectively.
    ![hash fn](https://www.geeksforgeeks.org/wp-content/uploads/HashingDataStructure-min-768x384.png)
  <br><small>Source: GeeksforGeeks</small>

---
**What is a hash collision?**
- A hash function returns us a small number for a key which is a big integer or string, there is a possibility that two keys result in the same value.
- The situation where a newly inserted key maps to an already occupied slot in the hash table is called collision.
- There are mainly two methods to handle collision:
  - **Separate Chaining**
    - The idea is to make each cell of hash table point to a linked list of records that have same hash function value.
    - Let us consider a simple hash function as “key mod 7” and sequence of keys as 50, 700, 76, 85, 92, 73, 101.
    ![hash collision](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/hashChaining1.png)
    <br><small>Source: GeeksforGeeks</small>
  - **Open Addressing**
    - All elements are stored in the hash table itself.
    - Size of the table must be >= the total number of keys
    - Operations -
      - **insert(k)** Keep probing until an empty slot is found. Once an empty slot is found, insert k.
      - **search(k)** Keep probing until slot’s key doesn’t become equal to k or an empty slot is reached.
      - **delete(k)** Deleted keys are marked specially as “deleted”. Insert can insert an item in a deleted slot, but the search doesn’t stop at a deleted slot.
    - Implementation - 
      <br><small>S - Size of table **|**  hash(x) - slot index computed using hash function.  </small>
      1) **Linear Probing** - best cache performance, suffers from clustering, easy to compute
      ```

      If slot hash(x) % S is full, then we try (hash(x) + 1) % S

      If (hash(x) + 1) % S is also full, then we try (hash(x) + 2) % S
      If (hash(x) + 2) % S is also full, then we try (hash(x) + 3) % S 
      ..................................................
      ..................................................

      ```
      - Let us consider a simple hash function as “key mod 7” and sequence of keys as 50, 700, 76, 85, 92, 73, 101.
      ![Linear Probing](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/08/openAddressing1.png)<br><small>Source: GeeksforGeeks</small><br></br>
      1) **Quadratic Probing** -  lies between Liner & Double in terms of cache performance and clustering
      ```
      
      We look for i2‘th slot in i’th iteration.

      If slot hash(x) % S is full, then we try (hash(x) + 1*1) % S
      If (hash(x) + 1*1) % S is also full, then we try (hash(x) + 2*2) % S
      If (hash(x) + 2*2) % S is also full, then we try (hash(x) + 3*3) % S
      ..................................................
      ..................................................

      ```

      1) **Double Hashing** -  poor cache performance, no clustering, requires more computation time as two hash functions need to be computed
      ```
      
      We use another hash function hash2(x) and look for i*hash2(x) slot in i’th rotation.

      If slot hash(x) % S is full, then we try (hash(x) + 1*hash2(x)) % S
      If (hash(x) + 1*hash2(x)) % S is also full, then we try (hash(x) + 2*hash2(x)) % S
      If (hash(x) + 2*hash2(x)) % S is also full, then we try (hash(x) + 3*hash2(x)) % S
      ..................................................
      ..................................................

      ```
  | Seperate Chaining                                                               | Open Addressing                                                              |
  | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
  | Easy to implement                                                               | Requires more computation                                                    |
  | table never fills up, we can always add more elements to chain.                 | table may become full.                                                       |
  | Cache performance of chaining is not good as keys are stored using linked list. | provides better cache performance as everything is stored in the same table. |
  | Wastage of Space (Some Parts of hash table in chaining are never used).         | a slot can be used even if an input doesn’t map to it.                       |
  | Chaining uses extra space for links.                                            | No links in Open addressing                                                  |
---

 **Operation Cost**

| Operation | Average | Worst |
| --------- | ------- | ----- |
| insert    | O(1)    | O(n)  |
| lookup    | O(1)    | O(n)  |
| delete    | O(1)    | O(n)  |
| serach    | O(1)    | O(n)  |

---
[Viusalization](https://visualgo.net/en/hashtable)