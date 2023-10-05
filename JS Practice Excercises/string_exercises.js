//1. Write a function log that takes an Array of Strings and displays them on the console.

function log(arr){
    console.log(arr)
}

//2. An application uses an Array as a Stack (LIFO) to keep track of items in a user’s shopping 
//history. Every time they browse to an item, you want to addItemToHistory(item). How would you implement this?

function addItemToHistory(item){
    const shoppingHistory = []
    shoppingHistory.push(item)
}

//3. Write a function buildArray that takes two Numbers, and returns an Array filled with all numbers between the 
//given number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]

function buildArray(num1, num2){
    let arr = []

    for (let i = num1; i <= num2; i++){
        arr.push(i)
    }

    return arr
}

//4. Write a function addDollars that takes an Array of Numbers and uses the array’s map() method to create and 
//return a new Array with each element having a $ added to the front: addDollars([1, 2, 3, 4]) should return 
//['$1', '$2', '$3', '$4']

function addDollars(dollars){
    const arr = dollars.map((cash) =>{
        return `$${cash}`
    })

    return arr
}

//5. Write a function tidy that takes an Array of Strings and uses the array’s map() method to create and return 
//a new Array with each element having all leading/trailing whitespace removed: tidy([' hello', ' world ']) should 
//return ['hello', 'world'].

function tidy(strings){
    const arr = strings.map((word) => {
        return word.trim()
    })
    return arr
}

//6. Write a function measure which takes an Array of Strings and uses the array’s forEach() method to determine 
//the size of each string in the array, returning the total: measure(['a', 'bc']) should return 3. Bonus: try to 
//rewrite your code using the Array’s reduce() method.

function measure(arr){
    let total = 0

    arr.forEach(char => {
        total += char.length
    });

    return total
}

//7. Write a function whereIsWaldo that takes an Array of Strings and uses the array’s forEach() method to create 
//a new Array with only the elements that contain the text "waldo" or "Waldo” somewhere in them: 
//whereIsWaldo(['Jim Waldorf, 'Lynn Waldon', 'Frank Smith']) should return 'Jim Waldorf, 'Lynn Waldon']. 
//Bonus: try to rewrite your code using the Array’s filter() method.

function whereIsWaldo(names){
    const arr = []

    names.forEach((name) => { 
        if (name.toLowerCase().includes('waldo')){
            arr.push(name)
        }
    })

    return arr
}

//8. Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number). 
//Your function should return true if all of the ages in the Array are at least as old as the cut-off age: 
//checkAges([16, 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return 
//true. Bonus: try to rewrite your code using the Array’s every() method.

function checkAges(ages, min){
   const checker = ages.every((age) => {
    return age >= min
   })
   return checker
}
//9. Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used), 
//and userName (a String entered by the user). Check to see if any of the words in badWords are contained within 
//userName. Return the badWord that was found, or null if none are found.

function containsBadWord(badWords, userName){
    let checker = null

    badWords.forEach((bad)=> {
        if(userName.toLowerCase().includes(bad)){
            checker = bad
        }
    })
    return checker
}

//10. A String contains a Key/Value pair separated by a ":". Using String methods, how would you extract the two 
//parts? Make sure you also deal with any extra spaces. For example, all of the following should be considered the 
//same: "colour: blue", "colour:blue", "colour : blue", "colour: blue ". Bonus: how could you use a RegExp instead?

function extract(object){
    let split = object.split(':')

    let key = split[0].trim()
    let val = split[1].trim()

    return `${key} and ${val}`
}

//11. A String named addresses contains a list of street addresses. Some of the addresses use short forms: 
//"St." instead of "Street" and "Rd" instead of "Road". Using String methods, convert all these short forms to 
//their full versions.

function convertToFull(streets){
    const address = streets.replace(/St\./g, 'Street').replace(/Rd\./g, 'Road')
    return address
}

//12. Write a function that takes a String and checks whether or not it begins with one of "Mr.", "Mrs.", or "Ms.". 
//Return true if it does, otherwise false. Bonus: try writing your solution using regular String methods and again as a RegExp.

function nameTitleChecker(names){
    const regex = /(Mr\.|Ms\.|Mrs\.)/g

    for(const name of names){
        if (regex.test(name)){
            return true
        }
    }

    return false
}

//13. Write a function that takes a password String, and validates it according to the following rules: must be between 8-32 
//characters in length; must contain one Capital Letter; must contain one Number; must contain one Symbol (!@#$%^&*-+{}). 
//Return true if the given password is valid, otherwise false.

function passwordValidator(password){
    const minLength = 8
    const maxLength = 32

    let validLength = password.length >= minLength && password.length <= maxLength
    let hasCapital = /[A-Z]/.test(password)
    let hasSymbol = /[!@#\$%^&*\-\+{}]/.test(password)

    if (validLength && hasCapital && hasSymbol){
        return true
    }

    return false
}

//14. Write a RegExp for a Canadian Postal Code, for example "M3J 3M6". Allow spaces or no spaces, capitals or lower case.

function postalCodeValidator(code){
    let validPostalCode = /^[a-zA-Z]\d[a-zA-Z]\s?\d[a-zA-Z]\d$/i.test(code)

    if(validPostalCode){
        return true
    }
    return false
}
