/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding -> 'this' refers to the object left of the 'dot' 
* 2. explicit binding -> using the .call, .apply, or .bind methods to explicitly set context of 'this'
* 3. the 'new' keyword -> when invoked, new object is returned -- 'this' in constructor function is bound to that object
* 4. window binding -> when function is invoked without a 'dot' and not using .call, .apply, or .bind, 'this' will be bound to the window/global object -- "use strict" to prevent this undesirable behavior.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function fun() {
    console.log(this);
}
fun(); // -> window

// Principle 2

// code example for Implicit Binding
const obj = {
    prop: 'foo',
    bar() {
        console.log(this);
    }
}
obj.bar(); // -> obj

// Principle 3

// code example for New Binding
function ObjConstructor() {
    this.prop = 'foo',
    this.bar = function() {
        console.log(this);
    }
}
const newObj = new ObjConstructor()
newObj.bar(); // -> ObjConstructor

// Principle 4

// code example for Explicit Binding
const bound = fun.bind(obj);
bound(); // -> obj