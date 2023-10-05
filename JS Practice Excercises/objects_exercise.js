//1. Create a JavaScript object **`student`** with the following properties:
//- **`id`** with value **`101`**
//- **`firstName`** with value **`John`**
//- **`lastName`** with value **`Doe`**
//- **`courses`** as an array containing **`Math`**, **`Science`**, and **`History`**.

let student = {
    id: 101,
    firstName: 'John',
    lastName: 'Doe',
    courses: ['Math', 'Science', 'History']
}

//2. Given the object product:
let products = {
    id: 'A123',
    name: 'Laptop',
    price: 1500,
    brand: 'TechCorp'
};
//Print the **`name`** of the product using the dot operator.
//Print the **`price`** of the product using the bracket operator.

console.log(products.name)
console.log(products['price'])

//3. Given the object address:
let address = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '12345'
};
//Destructure the properties city and state from the address object.

let {city, state} = address

//4. Add a property **`country`** with value **`USA`** to the **`address`** object.
//Update the **`zip`** property to have the value **`54321`**.
//Delete the **`street`** property from the **`address`** object.

address.country = 'USA'
address.zip = '54321'
delete address.street

//5. Write a function createProfile that takes an object with possible properties name, 
//age, and country. If any of the properties are missing, assign default values: name should 
//default to 'Unknown', age to 0, and country to 'N/A'.

function createProfile([name = 'Unknown', age = 0, country = 'N/A'] = {}){
    console.log `Your name is ${name}, your age is ${age}, you live in ${country}`
}

//6. Write a function that counts the number of times each word appears in a given string. 
//Return the result as an object.

function wordCount(str){
    let count = {}
    let words = str.split(' ')

    for (let word of words){
        word = word.toLowerCase()
        count[word] = (count[word] || 0) + 1
    }

    return count
}

//7. Define an object product with properties id, details, and getDetails. The details property 
//should itself be an object with properties name and price. The getDetails property should be a 
//method that returns a string in the format:           "name costs $price".

let product = {
    id: 0,
    details: {
        name: 'mac',
        price: 2500
    },
    getDetails: function(){
        return `${this.details.name} costs $${this.details.price}`
    }
    
}

//8. Create a constructor function Book that accepts arguments title, author, and year. 
//Inside the constructor, assign these arguments to properties on the object.

function Book(title, author, year){
    this.title = title,
    this.author = author,
    this.year = year
}

let myBook = new Book('Title Here', 'Author Name', 2020);

//9. Extend the Book constructor from this exercise by adding a method getSummary 
//to its prototype. The method should return a string in the format:       "title by author (year)".

Book.prototype.getSummary = function(){
    return `${this.title} by ${this.author} (${this.year})`
}

console.log(myBook.getSummary());

//10. Create a class Car with properties make, model, and year, and a method getCarInfo which 
//returns a string in the format: "make model (year)".

class Car {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    getCarInfo(){
        return `${this.make} ${this.model} (${this.year})`
    }
}

let myCar = new Car('Toyota', 'Corolla', 2019);

//11. Extend the Car class from the previous exercise to create a ElectricCar class that 
//also has a property batteryLevel, and a method chargeBattery which increases the batteryLevel 
//by 1 each time it's called.

class ElectricCar extends Car { 
    batteryLevel;

    constructor(make, model, year, batteryLevel = 0){
        super(make, model, year)
        this.batteryLevel = batteryLevel
    }
    chargeBattery(){
        this.batteryLevel++
    }
}

let myElectricCar = new ElectricCar('Tesla', 'Model 3', 2021, 3);
myElectricCar.chargeBattery();
console.log(myElectricCar.batteryLevel);