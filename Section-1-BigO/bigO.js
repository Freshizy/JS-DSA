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


//O(n)
function logItems(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
}
logItems(10)
 /* 
 This is an O(n) operation. 

 We pass "n" to the function to run "n" number of times.
 O(n) has a equal proportional number of operations. it moves in a straight line 
 */