/*
Linked Lists are most often linked to arrays.
Link lists do not contain indexes like conventional arrays.


Arrays
1. Contiguous Memory:
    Arrays are contiguous in place of memory. all elements of the array are stored next to each

    let arr = [1,2,3,4,5]

    The memory for these integers are allocated as a single continuous block:

    arr[0], arr[1], etc. are stored in sequential memory locations.

2. Access Speed:
    since arrays consists of a constant locale, accessing these elements by index are  are very fast using the bigO 0(1) time complexity.
    the address of any element can be calculated directly using its index.

Linked Lists
1. Non-Contiguous Memory:
    LL consists of nodes where each node contains data and a pointer reference to the next node in the list.
    These nodes are not store in adjacent memory locations.
     When LL are created, each node can be located anywhere in memory. The links (pointers) connect the nodes together

2. Access Speed:
    Accessing an element in LL requires moving from the head node to the desired node. This is O(n) time complexity in the worst case. 
    This is because you have to follow the pointers until you reach the node you searching for. 


the Key difference is impacts performance. memory usage and the types of operations that are efficient with each data structure. 

-------------------------------------------------------------------------------------------------------------------------------------------------
BigO in Linked Lists


.push (add end) : o(1)
    11 3 23 7 + 4

    have last item (7) point to new node so tail is equal to the pointer.(4)
    does not matter if list had 10 items or 100, the number of steps to add an item is constant time making it O(1).


.pop (remove end)  : o(n)
    11 3 23 7 --> 4

    11 = head 
    4 = tail

    In order to have the tail pointer point to the 7 node we have to set it equal to something that is pointing to the 7 node.
    This means the only option here is have the 23 node point to the 7 node.
    we cannot go back in linked lists so we must iterate from the head through the list and set tail equal to the pointer (7)
    therefore, popping something off a list is O(n).

.unshift (add start) : o(1)
    4 + 11 3 23 7
    head = 11

    I need to have the 4 point set to the  11 node but i already have 11 pointing to the head node. We need to set the pointer from the 4 node 
    equal to the head node. This is o(1) time complexity

.shift (remove state) : o(1)
    4 < -- 11 3 23 7

    to remove 4, i need to set the head equal to the 11 node. 4 node is pointing to the 11 node. we need to set hea to head.next

.insert (add item in middle) : o(n)

    11 3 23 --> 4 7 
    head = 11
    tail = 7

    to add an item add at index of 3, we need to iterate from the head to get to index 2 (23). point the new 4 node point to the same item 23 
    is pointing to, and then point 23 node to 4 node.
 
.remove (remove item in middle) : o(n)

    11 3 23 >-- 4 7
    head = 11
    tail = 7
    to remove item at index 3 (4), we need to iterate through the linked list and set the 23 pointer equal to the pointer that the 4 node is 
    pointing to. 



.find (find item by index or value) : o(n)
    11 3 23 7
    head = 11
    tail = 7
    
    we can find by value or determine value by index 
    either way it will require iteration making it o(n)
*/