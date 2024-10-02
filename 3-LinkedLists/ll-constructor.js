//class LinkedList{
    /*
    constructor(value)
        create a new Node
    push(value)
        create new Node, add to end.
    unshift(value)
        create new Node, add to start
    insert(index, value)
        create new Node, inset Node

when making a linked list we must the constructor key to create a new node by passing in a value. 
push, unshift, and insert are also other ways to create nodes.
    */
//}

// my first linked list constructor 
/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
// 
class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node (value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    printList(){
        let temp = this.head
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
    getHead(){
        if(this.head === null){
            console.log("Head: null")
        } else {
            console.log("Head: " + this.head.value)
        }
    }
    getTail(){
        if(this.head === null){
            console.log("Tail: null")
        } else {
            console.log("Tail: " + this.tail.value)
        }
    }
    getLength() {
        console.log("Length: " + this.length)
    }
}

const myLinkedList = new LinkedList(4)
myLinkedList.getHead()
myLinkedList.getTail()
myLinkedList.getLength
console.log('\nLinked List:')
myLinkedList.printList("\n")


//Linked List Traversal
class nodeTwo {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedListTwo {
    constructor (){
        this.head = null // create empty list
    }
    append(value){
        const newTwo = new nodeTwo(value)
        if(!this.head){
            this.head = newTwo
        } else {
            let current = this.head
            while(current.next){
                current = current.next
            }
        current.next = newTwo
        }
    }
    getList(){
        let current = this.head
        while(current !== null){
            console.log(current.value)
            current = current.next
        }
    }
}

const myList = new linkedListTwo()
myList.append(1)
myList.append(2)
myList.append(3)
myList.append(4)
myList.append(5)
myList.getList()