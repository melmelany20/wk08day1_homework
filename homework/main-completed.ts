

/////////// BUILT-IN TYPES ////////////

///// Declaring /////

// When declaring a variable you can set its type explicitly by adding a `:` then the name of the class.

// Note: The types are lower cased, Number and number and Boolean and boolean are not the same and will cause issues

let anyType
let typeString:string
let typeNumber:number
let typeBool:boolean
let typeObj:object
let typeNull:null
let typeUndefined:undefined

// Without a type annotation we can reassign `anyType` to any type of variable

anyType="1"
anyType=123
anyType={id:2}


typeString=123 


typeString="I am a String"


typeNull = "I am a string"

///// IN-CLASS EXERCISE #1 /////

// Declare three variables :
//    iceString, of type 'string'
//    iceNumber, of type 'number'
//    iceBool, of type boolean
// 
// On seperate lines, assign values to each of those variables of an appropriate type.




///// IMPLICIT TYPE DECLARATION //////

// When you declare and initialize a variable with TypeScript, it will implicitly (check definitions) add the type declaration for you.

let implicitlyTypedArray = ["Na na na na", "na na na na","hey hey", "Goodbye"]


implicitlyTypedArray="new song"


implicitlyTypedArray=[1,2,3,4]


// The above example shows the `implicitlyTypedArray` was not declared to as an array (of strings) but TypeScript implicitly typed it based on the initial state of  `["Na na na na", "na na na na","hey hey", "Goodbye"]`



///// ARRAY TYPING /////

// Arrays in TS need to be explicitly (check definitions) typed to an array, but not just an array,  arrays must declare the datatype of its member elements.  To do this we add the datatype of the elements in the array followed by `[]`.  Typically we only put the same datatype in an array.

let explicitlyTypedArray: string[]

explicitlyTypedArray = [1,2,3,4]


explicitlyTypedArray = ["We", "Will", "We", "Will", "Rock", "You"]




///// IN-CLASS EXERCISE #2 /////

// Create an array of nulls using explicit type checking called `arrayOfNulls`

let arrayOfNulls:null[]=[null, null, null]



///// MULTIPLE DATATYPES IN ARRAY'S /////

// While it's generally recommended to avoid mixing multiple data types in an array, if there are more than two elements, as it can make the array harder to read and use, TypeScript does allow it. When using multiple datatypes in an array, we can specify the datatype for each index of the array like this:

//`let myVar: [datatypeOfIndex0, datatypeOfIndex1, datatypeOfIndex2, datatypeOfIndex3, ...]`

let multitypedArray:[number, string, boolean, null]


multitypedArray=[1,"string", true, null]
console.log(multitypedArray)

multitypedArray=["string",null,1,true]




///// MULTIPLE ELEMENTS OF UNKNOWN LENGTH /////

// What if the first element of the array is a string, and then we have an unknown number of numbers?

// We can use the spread operator (...) to indicate that the second member of the array is an unpacked number array.


let unknownLengthArray:[string, ...number[]]

unknownLengthArray = ["John", 123, 567, 789, 1, 2, 3]
console.log(unknownLengthArray)

// Note: This syntax means there could also be nothing in our unpacked number array, making the second index optional.

unknownLengthArray = ["Jean"]
console.log(unknownLengthArray)



///// IN-CLASS EXERCISE #3 /////

// Create an array that starts with one string and then can hold any number of booleans and name it `stringBoolsArray` and assign it some values.



////////// TS - INTELLISENSE AND FUNCTIONS //////////

// TypeScript provides IntelliSense to assist you while coding. In Visual Studio Code (VSCode), you can press the Tab key after writing a dot to see the available methods and properties for an object. However, this only works effectively if TypeScript can determine the datatype of the variable.

// TypeScript introduces static typing to JavaScript, so when you use proper TypeScript techniques, IntelliSense will accurately know the type of data being passed.

// Consider the examples below:

function nameLower(name) {
  name = name.toLowerCase();
  return name;
}

function nameLower2(name: string) {
  name = name.toLowerCase()
  return name;
}

// In the first example, there is no static type checking. Note that when you type `name.` and press `Tab`, you get no suggestions. This indicates that the TypeScript compiler does not know the type of the 'name' variable.

// In contrast, looking at the second example, we have annotated the 'name' parameter to be of type string. Now, when you press Tab after `name.`, you will see a list of available string methods and properties provided by IntelliSense.


///// DECLARING A RETURN TYPE /////

// Now, let's explore the difference between using functions with and without explicit return type annotations.

// In this example, we have a function 'nameLower3' that takes a 'name' parameter of type string, converts it to lowercase, and returns it.
function nameLower3(name: string) {
  name = name.toLowerCase();
  return name;
}
console.log(nameLower3('JACK').length);



// In this example, we have a function 'nameLower4' that takes a 'name' parameter (without an explicit type annotation), converts it to lowercase, and returns it concatenated with the number 2.
function nameLower4(name) {
  name = name.toLowerCase();
  return name + 2;
}
console.log(nameLower4('test').length);


// EXPLICIT RETURN TYPE

//Lets annotate the return type of this function, we will see now the compiler and our itellisense knows the return of the function is a string

//To annotate a return type on a regular function it looks like:
// function funcName(params):ReturnType{}

function nameLower5(name:string):string{
  name.toLowerCase()
  return name+2
}
console.log(nameLower5('test').length)



///// IN-CLASS EXERCISE #4 /////

//Create a regular function that takes in two numbers and returns a string that says.
// [firstnumber] plus [secondNumber] equals [FirstNumber plus SecondNumber]

//Name the function `iceAddition`

// if we run `iceAddition(2,5)`

// the output should be :


// "2 plus 5 equals 7"


// Use Explicit type checking on the parameters and return type





///// ARROW FUNCTIONS /////

//To annotate a return type on an arrow function it looks like:

// const funcName=(params):ReturnType=>{}

const nameUpper=(name:string):string=>{
  name.toUpperCase()
  return name.toUpperCase()
}
console.log(nameUpper("lydon johnson"))


///// IN-CLASS EXERCISE #5 /////

// Create an Arrow function that takes in two numbers and returns a string that says.
// [firstnumber] plus [secondNumber] equals [FirstNumber plus SecondNumber]

// Name the function `iceAdditionArrow`

// if we run `iceAdditionArrow(2,5)`

// the output should be :


// "2 plus 5 equals 7"


// Use Explicit type checking on the parameters and return type





///// VOID TYPE ////

// Often our function return nothing, for this we can use the void type.  The term void to represent function without returns is ubiquitous in all languages.

// Note: returning `null` or `undefined` statisfies void 

function sayHello(name:string):void{
  console.log("Hello", name)
}
sayHello("Paula Poundstone")

function sayHello2(name:string):void{
  console.log("Hello", name)
  return 123
}
sayHello("Paula Poundstone")


///// IN-CLASS EXERCISE #6 /////

// Create an arrow function that is named `iceVoid` and have that function print:

// `If I have a void I have nothing`

// Be sure to explicity type the function's return

const iceVoid=():void=>console.log("If I have a void I have nothing")
iceVoid()



////////// TYPESCRIPT BUILT IN TYPES //////////

// We have already mentioned JavaScript has seven built-in types: null , undefined , boolean , number , string , object , and symbol

// TypeScript adds to these types with: unknown, any, tuple, enum, never and more.

// Reference: [https://www.typescriptlang.org/docs/handbook/2/everyday-types.html]('https://www.typescriptlang.org/docs/handbook/2/everyday-types.html')


///// 'any' TYPE /////

// The any type means that the data can belong to any datatype.  Be very careful when using this datatype; it should be avoided at all costs.  Using the any type, may make your code easier to write, but you will lose all benefits of TypeScript.

// When you don't explicitly declare a type to a variable TS will implicitly assign it to any.

let typeAny:any;
typeAny="hello"
console.log(typeAny)
typeAny=1234
console.log(typeAny)
typeAny=[1,"hello", true]
console.log(typeAny)







///// TUPLES /////

// A Tuple is a fixed length array where each element has a particular type.
// These are generally used for arrays with only 2 pieces of information, as they quickly become hard to read and manage.

let product: [number, string]
product= [1, "Red Nike Shoes"]

console.log(product)

product = ["Red Nike Shoes", 1] //Error

product= [1, "Red Nike Shoes", "More info"] //Error



///// ENUM TYPE /////

// Enums are used when there are highly related constants. They allow you to define a set of named values representing a discrete set of possible options.

// To create an enum, we use the syntax:
// enum NameOfEnum { Key1, Key2, Key3 }

// Note: There is no equal sign when defining an enum.

// Enums should be named using PascalCase, following the convention for naming types.

// By default, each member of the enum is automatically assigned a numeric value, starting from 0 and incrementing by 1 for each subsequent member.

enum Size { Small, Medium, Large }
console.log(Size.Small); // Output: 0

let mySize: Size = Size.Medium;
console.log(mySize); // Output: 1

// We can start at a different number other than 0 by setting a number on the first element. The following elements' values will be incremented by one.

enum Size2 { Small = 5, Medium, Large }
console.log(Size2.Small); // Output: 5

let mySize2: Size2 = Size2.Medium;
console.log(mySize2); // Output: 6


///// Explicitly setting enum values /////

// We can explicitly set the enum values to other types, but when we do this, we must assign a value to every single element.

enum Size3 { Small = 'S', Medium = 'M', Large = 'L' }
console.log(Size3.Small); // Output: "S"

let mySize3: Size3 = Size3.Medium;
console.log(mySize3); // Output: "M"

// Note: If we explicitly set enum values, TypeScript will enforce that only those specified values are allowed.

// The following lines will throw errors:

let mySize4: Size3 = "Not an Enum Element";
// Error: Type '"Not an Enum Element"' is not assignable to type 'Size3'.

let mySize4: Size3 = Size3.ExtraLarge; 
// Error: Property 'ExtraLarge' does not exist on type 'typeof Size3'.


///// IN-CLASS EXERCISE #9 /////

// Create an enum type to represent the different football teams that can be on the field.
// We'll use the enum to represent `offense`, `defense`, and `specialTeams`.
// They should be represented by `O`, `D`, and `ST` respectively.

// Let's name the enum `FootballTeam`.

// Use the FootballTeam enum to print the abbreviations for `specialTeams`, `offense`, and `defense`.




///// UNKNOWN TYPE /////

// The Unknown type is similar to the 'any' type, as it can hold values of any data type. However, unlike 'any', the 'unknown' type enforces type checking and restricts direct usage of its values. To work with values of 'unknown' type, we need to perform narrowing using Type Guards.

// Example using 'any':
function myAnyFunction(person: any) {
  person.walk();
  person.talk();
}

// Example using 'unknown':

function myFirstUnknownFunction(person: unknown) {
  person.walk(); // Compilation Error: Object is of type 'unknown'.
  person.talk(); // Compilation Error: Object is of type 'unknown'.
}


// To work with values of 'unknown' type, we need to use Type Guards to narrow down the type and allow access to specific properties or methods. This way, we can ensure type safety while working with dynamic or unknown data.


///// TYPE NARROWING /////

// To be able to use the unknown type we must first create our Type Guard.  This will narrow down the datatype so you can perform approiate actions.

// Note:  This also allows the itellisense to kick in and give suggestions

class Person{
  walk(){console.log('walking')}
  talk(){console.log('talking')}
}

function myUnknownFunction(person:unknown){
  if (person instanceof Person){
      person.walk()
      person.talk()   
  }else{
      console.log("This is not a Person Object")
  }
}

let jimmy = new Person()
myUnknownFunction(jimmy)

myUnknownFunction("Random Stuff")


///// IN-CLASS EXERCISE #10 /////

// Create a function that uses an unknown type parameter and implement a type guard.

//  If the parameter is a number we want the function to return the number sqaured

//  If the parameter is a string we want the function to return the string in uppercase letters

//  If the parameter is a boolean we want the function to return "Its on" if the boolean is true and "Its off" if the boolean is false

//  If the parameter is of any other type just return the parameter

// Name the function `iceGuard`

// Test your function for all 4 use cases





/////////// OBJECTS IN TYPESCRIPT ///////////

// Object are a built-in type from JS, but working with them in TS can be a little different we will go over a few ways to work with Objects in TS.

// When declaring an Object TS will implictly force your object to maintain its "shape".  This means you can not dynamically add properties to your objects like you can in JS, and when you change a property is has to have the correct datatype.

// When we talk about the "shape" of an object we are talking about is keys, types, and methods.

// When we talk about the "shape" of an object we are talking about is keys, types, and methods.

let student1={id:1}
student1.name="Alfonzo" //Error because name:string is not part of our shape

let student2={id:2, name:"Alfonzo"}
student2.name="Reginald"
console.log(student2)

let student:{
  id:number,
  name:string
} = { id: 1, name:"Janet"}

console.log(student)

student.name=1234 //error

student.name = "Jackson"
console.log(student)

///// IN-CLASS EXERCISE #11 /////

// Define the shape and the values for an object name `iceMan`

// Ice man should have:

// - a id that is a number

// - a name that is a string

// - a wasFrozen property that is a boolean on whether or not our iceMan was ever frozen in time

let iceMan:
    {id:number, name:string, wasFrozen:boolean}=
        {id:1,name:"Link", wasFrozen:true}
console.table(iceMan)



///// TYPE ALIASES /////

// The above way to work with objects is a bit cumbersome.  There is an easier way using a type alias, which allows you to predefine the shape and reuse this shape.

// The type's name should be written in PascalCase

type Student ={
  id:number,
  name:string
}

let studentTyped:Student={
  id:3,
  name:"Dale"
}
console.log(studentTyped)

studentTyped.name=123

studentTyped.lastName="Earnhardt"

///// IN-CLASS EXERCISE #12 /////

// Define the type for an our iceMan we made in the last example and name the type `IceManType`  Then create 3 iceMen called `iceMan1` `iceman2` and `iceMan3`.

// Ice man should have:

// - a id that is a number

// - a name that is a string

// - a wasFrozen property that is a boolean on whether or not our iceMan was ever frozen in time


type IceManType={id:number, name:string, wasFrozen:boolean}
let iceMan1={id:1,name:"Link", wasFrozen:true}
let iceMan2={id:2,name:"Stanley Shephard", wasFrozen:true}
let iceMan3={id:3,name:"GEICO Cavemen", wasFrozen:false}

console.table(iceMan1)
console.table(iceMan2)
console.table(iceMan3)



/// readonly ///

// Sometime there are properties of an object that should never change, for instance an id should never be changed.  This rule can be enforced with the `readonly` keyword

type StudentRO ={
  readonly id:number,
  name:string
}

let studentReadOnly:StudentRO={
  id:3,
  name:"Dale"
}
console.log(studentReadOnly)

studentReadOnly.id = 123


/// OPTIONAL FIELDS 

//Sometime you also have fields that should be optional, and not required to add in, like a Fax Number or Address Line 2.  This can be denoted using the `?`

type StudentOF ={
  readonly id:number,
  name:string,
  fax?:string
}

let studentOF:StudentOF={
  id:3,
  name:"Dale"
}
console.log(studentOF)

studentOF.fax="123-123-4567"
console.log(studentOF)


/// Methods

// Types can also include methods that should be implemented.

type StudentMethod={
  readonly id:number,
  name:string,
  fax?:string,
  sayHello:(name:string)=>string
}

let studentM:StudentMethod={
  id:3,
  name:"Dale",
  sayHello:(name)=>{
      return "Hello "+name
  }
}
console.log(studentM.sayHello("john"))

studentM.sayHello(123)

////// Arrow Function for Method

// In the example, we used an arrow function to define the sayHello method of the StudentMethod type. Arrow functions provide a concise and convenient syntax for defining functions. The syntax (parameters) => returnValue is used to declare the function.


// The method takes a single parameter name of type string and returns a string. The arrow function body (name) => { return "Hello " + name; } implements the method's behavior, which in this case is simply concatenating "Hello " with the provided name parameter.



// We then created an object studentM of type StudentMethod, and it includes the sayHello method. To invoke the method, we use the syntax objectName.methodName(argument). In this case:


// We call the sayHello method of the studentM object with the argument "John". The method returns the string "Hello John", which is then printed to the console using console.log.



///// IN-CLASS EXERCISE #13

// Create a type `IceShoeType` and 1 member of this type `iceShoe`

// all IceProducts must meet the following requirements

// - has readonly id field
// - has size (i.e. 7, 8, 11)
// - has a name
// - has an Optional value to describe if is the product has a wide version
// - has a description





///// UNION TYPES /////

//We can assign a variable multiple types, instead of just one.  This is great when the value could have multiple datatype.   This is done with the union operator `|` which is the pipe key

let multipleTyped: string|null

console.log(multipleTyped="a String")

multipleTyped= null
console.log(multipleTyped)

multipleTyped=123


///// UNION TYPES W/ FUNCTIONS

function inchesToCm(length:string|number):number{
  return length*2.54
}

inchesToCm(12)

function inchesToCm2(length:string|number):number{
  if (typeof length==="string"){
      return parseFloat(length)*2.54
  }
  else{
      return length*2.54
  }
}

console.log(inchesToCm2("12.2"))

console.log(inchesToCm(12.2))

console.log(inchesToCm(true))

///// IN-CLASS EXERCISE #14

//Create a function that takes one parameter that can be either a boolean or a string.  Using a type guard have the function return back the boolean or have it return true/false if the string starts with a `"c" or "C"`

// Be sure to use type annonations to enforce your parameter types and the functions return type

// Name the function `ice13`



///// 'as' Keyword ////

// The 'as' keyword tells Typescript to treat a variable like its a member or a certain type

// You can solve many problems using 'as any', but this is considered bad practice and should be avoided.

function contrivedAs(arr:string[], value:string|number):boolean{
  return arr.includes(value)
}
console.log(contrivedAs(["Python","TypeScript", "JavaScript"], "TypeScript"))
console.log(contrivedAs(["Python","TypeScript", "JavaScript"], 123))

function contrivedAs2(arr:string[], value:string|number):boolean{
  return arr.includes(value as string)
}
console.log(contrivedAs2(["Python","TypeScript", "JavaScript"], "TypeScript"))
console.log(contrivedAs2(["Python","TypeScript", "JavaScript"], 123))




///// Intersection Types /////

// We can make new types by combining old types using an intersection and the `&`

// Note:  Two types can be combined if they don't share a common key with different type.  So that means both types can have an id field as long as the id field is defined as the same type (say number) in both original classes

type Moveable={
  id:number,
  x:number,
  y:number,
  move:()=>void
}

type Resizeable={
  id:number,
  width:number,
  height:number,
  resize:()=>void
}
  
type Component = Moveable & Resizeable

let newComponent:Component={
  id:109,
  x:5,
  y:5,
  width:400,
  height:200,
  
  move:()=>{
      //define how this component moves
      console.log("moves")
  },

  resize:()=>{
      //define how this component resizes
      console.log("resize")
  }
}

console.log(newComponent)

newComponent.move()

///// IN-CLASS EXERCISE #15 /////

// Create two types and then create a 3rd type from those first two type.

// IceUser:

// - firstName
// - lastName
// - age

// IceCustomer:
// - cart (array of strings)
// - address (string)


// IceComplete:
// - Combination of IceCustomer and IceUser

// Also Create an IceComplete Object named `icedOver`




///// Literal Types /////

// A Literal type works somewhat like an enum type. It allows you to define the exact values that a variable can take by explicitly assigning one of those values to the variable. The possible values are chained together using the | (pipe) symbol.

// Literal types are useful when you want to restrict a variable to only specific, known values. They provide a way to define and enforce specific constant values for a variable.

// This is useless
let literalType1:100
literalType1 = 25

let literalType2:25|50|100
literalType2 = 25

//We can even define the options as its own type.

type Color = "red"|"green"|"blue"

let literalColor:Color

literalColor="yellow"

literalColor="blue"

///// IN-CLASS EXERCISE #16 /////

// Create a Literal type that restricts its values to the 6 main characters from friends.  Ross, Rachel, Joey, Chandler, Pheobe, Monica

// Use that type to create a variable for Rachel

