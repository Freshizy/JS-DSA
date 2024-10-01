/* There are many solutions to a problem or task when it comes to programming. BigO determines mathematically which solution is most efficient and 
best to use. 

BigO measures:
1. Time complexity: measurement of the number of operations.
2. Space complexity: measurement of how much memory is used.

ex:
[1,2,3,4,5,6,7]
1: best case - least #of iterations needed to find 1 (omega)
4: average case (theta)
7: worst case - (bigO)

***  When measuring bigO we are always measuring worst case ***
*/


//   1: O(n)

function logItems(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
}

//logItems(10)

 /* 
 This is an O(n) operation. 

 We pass "n" to the function to run "n" number of times.
 O(n) has a equal proportional number of operations. it moves in a straight line 


 BigO has several ways to simplify its notation.

 Drop constants or remove constants 
 */

 function dropConstants(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
    for(let j = 0; j < n; j++){
        console.log(j)
    }
}
//dropConstants(3)

/* logs 0 1 2 0 1 2 

n + n or 2n
It is considered a 0(2n) operation.

therefore if k was added to function:
n + n + "n"
it would be 0(3n)


this is where simplification comes in. 
it doesn't matter if it is 3n 10n or 100n.

So the first rule of simplifying bigO notation is to drop the constant.
we drop it can call it 0(n)
*/




/*   2: 0(n^2)

consider the following function that has 2 loops in the function to print n + n
function nSquared(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
    for(let j = 0; j < n; j++){
        console.log(j)
    }
}
*/

function nSquared(n){
    for(let i = 0; i < n; i++){
        for(let j =0; j < 0; j++){
            console.log(i,j)
        }
    }
}
nSquared(10)



