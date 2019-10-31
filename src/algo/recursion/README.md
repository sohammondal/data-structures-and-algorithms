<h1>RECURSION <img src="https://cdn1.iconfinder.com/data/icons/set-task2-set2-communication-line/128/set_2_-_Communication-Line-01-512.png" height="35" width="35"/> </h1>

## What is Recursion?
- The process in which a function calls itself directly or indirectly is called recursion
- The function that is called, is **recursive function**
- The idea of recursion is to break a problem into one or more similar smaller problems

```javascript
// function to find factorial of a number

function fact(n)
{
    if (n <= 1) // base case
        return 1;
    else    
        return n * fact(n-1); // recursive call
}
```

## What is base case in recursion?
- Base case is the condition when met stops the recursion
- Wrong base case / No base case can result in stack overflow 

<br>
<table>
    <tr>
        <th>
            DIRECT RECURSION
        </th>
        <th>
            INDIRECT RECURSION
        </th>
    </tr>
    <tr>
        <td>
            <pre>
 fn()
 {
    fn()
 }
 </pre>
        </td>
        <td>
            <pre>
 fn1() {
    fn2()
 }
 fn2() {
    fn1()
 }
</pre>
        </td>
    </tr>
    <tr>
        <td>A function that calls itself directly</td>
        <td>A function that calls itself indirectly via another function</td>
    </tr>
</table>
<br>

<table>
    <tr>
        <th>
            TAIL RECURSION
        </th>
        <th>
            NON-TAIL RECURSION
        </th>
    </tr>
    <tr>
        <td>A recursive function is tail recursive when recursive call is the last thing executed by the function.
        <pre>
        function print(n){
            if (n < 0)  return; 
            console.log(n);
            return print(n-1);
        }
        </pre>
        </td>
        <td>A recursive function is non-tail recursive when recursive call is not the last thing done by the function.
        <pre>
        function fact(n){
            if (n <= 1)  
                return 1; 
            return n*fact(n-1);
        }
        </pre>
        </td>
    </tr>
</table>

## How memory is allocated to different function calls in recursion?
- When **fact(3)** is called, the function call is sent to the Call Stack
- Then all the recursive fact(n-1) calls are stacked on top of the previous call
```javascript
    //Call Stack

    fact(1) // 4th - base case
    2*fact(1) //3rd
    3*fact(2) //2nd
    fact(3) //1st

```
- When the base case is reached, the function returns its value to the function by whom it is called
```javascript
    //Call Stack

    fact(1) //returns 1 and unstacked
    2*fact(1) // returns 2*1 and unstacked
    3*fact(2) // returns 3*2 and unstacked
    fact(3) //  = 6 and unstacked

```
- Memory is de-allocated and the process continues.
- Result is returned as 6
- 
<br>

<blockquote><i>Any problem that can be solved recursively can also be solved through the use of iteration.<i></blockquote>

<br>

| Pros                                                              | Cons             |
| ----------------------------------------------------------------- | ---------------- |
| Reduce time complexity                                            | uses more memory |
| adds clarity and reduces the time needed to write and debug code. | can be slow      |
| better at tree traversal                                          | -                |
