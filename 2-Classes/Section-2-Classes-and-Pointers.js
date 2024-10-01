/* 
classes are like cookie cutters for more complex functionality to our code
1. encapsulation: classes are bundles data (attributes) and methods (functions), to keep related functionality organized.
                  this helps manage complexity by hiding implementation details 
2. Abstraction: we can create abstract datatype to provide operating interface while hiding implementation details.
3: Inheritance: with classes already defined we can inherit properties and methods to our new classes. this promote the idea of DRY
                  it is always good practice to not repeat the same code. This also establish a hierarchical relationship with you code.
                  allowing us to create more unique classes defined from general classes;
4. Polymorphism: allows method to be used interchangeably between different classes, enabling flexibility and improving maintainability.
5. Object Creation: classes serve as blueprints for creating objects (instances), which can represent real-world entities or concepts in a program

using classes programmers can write more modular, maintainable, and scalable code. 
*/
class Cookie {
    constructor(color){
        this.color = color
    }
    //getters 
    getColor(){
        return this.color
    }
    //setters
    setColor(color){
        this.color = color
    }
}

// cookieOne is the 'new' specific instance of class Cookie. using the new keyword to call the constructor 
let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');


cookieOne.getColor() // will return the color of the cookie 
cookieOne.setColor('red')
console.log(cookieOne) // will change the current color to the new arg passed into function. Red


// moving along the course all the data structures are going to use classes.
// here i will define a new class below 

class LinkedList{
   /* constructor(value) {...}
    push(value) {...}
    push(value) {...}
    push(value) {...}
    unshift(value) {...}
    insert(index,value) {...}
    remove(index)
    pop() {...}
    shift() {...} */
}
// with this new class we can create instances that will inherit these functions defined in the class
