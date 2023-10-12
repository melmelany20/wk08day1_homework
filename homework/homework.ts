///Question #1

//Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

 //let student1 = {
    //id: 'GMK435&g62L00',
    //name: 'John Smith',
    //age: 24,
    //isTired: true,
    //projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    //pet: 'dog'
//}

//let student2= {
    //id: '6KGS%54GmlY76',
    //name: 'Jenny Hawthorne',
    //age: 28,
    //isTired: false,
    //projectsCompleted:["HTML Portfolio"],
//}

//let student3 = {
    //id: '6KGS%54GmlY76',
    //name: 'Neo',
    //age: 57,
    //isTired: true,
    //projectsCompleted:["Matrix","Biological Interface Program"],
    //pet:'cat'
//} 


var id:string = "GMK435&g62L00"
var name:string = "John Smith";
var age:number = 24;
var isTired:boolean = True;
var projectsCompleted:string = "HTML Portfolio, Fakebook, Pokemon API Project, Weather Bug";
var pet:string = dog;

var id:string = "6KGS%54GmlY76"
var name:string = "Jenny Hawthorne";
var age:number = 28;
var isTired:boolean = False;
var projectsCompleted:string = "HTML Portfolio";

var id:string = "6KGS%54GmlY76"
var name:string = "Neo";
var age:number = 57;
var isTired:boolean = True;
var projectsCompleted:string = "Matrix,Biological Interface Program";
var pet:string = "cat";

type CTStudent = {id:string, name:string, age:number, isTired:boolean, projectsCompleted:string, pet:string};







//Question #2

//Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */

//type Fruit={
  //color:string,
  //shape:string
//}

//let apple:Fruit={color:"red", shape:"sphere"}
//let eaten:Fruit|null=null


function fruit(color:string, shape:string) { 
    console.log("color:", color); 
    console.log("shape:", shape); 
    
    if (fruit != undefined)  
    console.log("You ate my fruit already"); 
 }
 disp_details("red", "sphere");
 







//Question #3

//Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
//type Book={
  //isbn:string,
  //title:string,
  //author:string
//}

//type DigitalBook={
  //fileType:string,
//}


let Ebook: (string | string); 
book = "isbn, title, author";
console.log("Book: " + book);
digitalBook = "fileType";
console.log("Digital Book: " + digitalBook)







//Question #4

//Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

//- All ShopItems have an numeric id that can not be edited 
//- All ShopItems have a price
//- All ShopItems have a description
//- Some ShopItems have a color
//- All ShopItems have a Category represented with an enum 
   // - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
//- All ShopItems have a list of keywords used to help search for the ShopItem 
   // - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

//After Creating the `ShopItem` type create 3 items using this type */


type ShopItems = {id:number, price:number, description:string, color:string};

enum itemCategories {
    Shirt,
    Shoes,
    Pants,
    Hats,
    Accessories
  }

enum keyWords {
    Pants = "Jeans",
    Shoes = "Sneakers",
    Hats = "Snapback",
    Shirt = "Tshirt",
    Accessories = "necklace"
}






