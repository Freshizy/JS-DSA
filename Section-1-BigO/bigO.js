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
        for(let j =0; j < n; j++){
            console.log(i,j)
        }
    }
}
//nSquared(10)

/*

This outputs 100 items
0 0 
0 1
0 2 
0 3 .... and so on up to 
9 9 


the number of items that were output in this case is:

n * n or n^2

0(n^2) will execute operations quicker than O(n)
*/

function dropNonDominants(n){
    for(let i = 0; i < n; i++){
        for(let j =0; j < n; j++){
            console.log(i,j)
        }
    }
    for(let k =0; k < n; k++){
        console.log(k)
    }
}

/*
the nested loop ran o(n^2) times and the 2nd loop ran o(n) times. 

when added together:

0(n^2 + n)
imagine n being 100
n^2 = 1000 (dominant)
n = 100 (nondominant)

drop the nondominant
*/

/*   3: 0(1) 

it is the most efficient bigO notation and it is referred to as constant time

below in the function OofOne:
no matter what n is, the number of operations is constant.
*/
function OofOne(n){
    return n + n + n
}


/*   4: 0(log n)
works with best with sorted data

want to get to 1 from  array 

divide and conquer:

[1,2,3,4,5,6,7,8]

1:
[1,2,3,4] [5,6,7,8]

2:
[1,2] [3,4]

3:
[1,2]

[1]

log sub 2 of 8 equals 3
log2(8) = 3

2 to the what power equals 8? 
3

means 8 needed to split three times to get to 1 

imagine working with data much larger in the millions.
this method of using O(log n) can help reach our solutions quicker 
*/


/*   5: different terms for inputs
is a very popular technical interview question 

consider the following function that takes n into the function and has 2 loops
*/

function sameTermsForInputs(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
    for(let j = 0; j < n; j++){
        console.log(j)
    }
}
 /*
 each of these loops ran n times : n + n = 0(2n)
 we drop the constant and make it 0(n)
 */


 function diffTermsForInputs(a,b){
    for(let i = 0; i < a; i++){
        console.log(i)
    }
    for(let j = 0; j < b; j++){
        console.log(j)
    }
}

 /*
 both are single for-loops aka 0(n)
 oen would assume that it is :
 0(n) + 0(n) = 0(2n).
 to than drop the constant to make it 0)n


 this is incorrect because we cannot assume that a and b are both equal to n.
 cannot have both variables equal to n. a can be 1 and b can be 10.
 each loop will return a very different result.
 therefore we must assume this expression instead:
 
 0(a) + 0(b) = 0(a+b)


      0(a+b) is as far as we can simplify this 

the nested function below will equate to a a similar expression 
 */

function timesDiffTermsForInputs(a,b){
    for(let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            console.log (a,b)
        }
    }
}

/*
it will be O(a*b)
*/
