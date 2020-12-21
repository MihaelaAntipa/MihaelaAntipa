//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

const operateWithNumbers = (number1, number2) => {
  
  if(number1 !== number2) {
    return (number1 + number2);
  }
  
  if(number1 === number2) {
    return((number1 + number2) *5 );
  }
}

console.log(operateWithNumbers(15, 14));
console.log(operateWithNumbers(10, 10));



//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

const testNumbers = (nummber01, nummber02) => {
    if (nummber01 === 30 && nummber02 === 30) {
        return "true";
    }

    if (nummber01 + nummber02 === 30) {
        return "true";
    }

    return "false";
}

console.log(testNumbers(30, 30));
console.log(testNumbers(15, 15));
console.log(testNumbers(10, 15));


  
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

const checkString = stringToBeChecked => {

    if ((typeof(stringToBeChecked) !== "string") && (stringToBeChecked !== null)) {
        return "This is not a string.";
    }

    if (stringToBeChecked === null) {
        return "JS";
    }

    const JSposition = stringToBeChecked.indexOf("JS");
    if (JSposition !== 0) {
        return "JS" + stringToBeChecked;
    }

    if (JSposition === 0) {
        return stringToBeChecked;
    }
}
  
console.log(checkString(123));
console.log(checkString('JSisAwsome'));
console.log(checkString('isEasy'));
console.log(checkString(null));



//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/number
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

  
const removeDuplicates = string => {
    if (typeof(string) !== "string" && typeof(string)!== "number") {
        return "The introduced value is not a string";
    }

    if(typeof(string) === "number") {
        string = string.toString();
    }

    let characterArray = string.split("");

    for (let i = 0; i < characterArray.length; i++) {
    for (let j = i + 1; j < characterArray.length; j++)
        if (characterArray[i] === characterArray[j]) {
        characterArray.splice(j, 1);
        j--;
        }
    }
    return characterArray.join("");
}

console.log(removeDuplicates("aabcadeef"));
console.log(removeDuplicates(122334));

 
//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = string => {
    let longestString = "";
    const stringsToBeCompared = string.split(" ");

    if (typeof(string) !== "string") {
        return "The chosen value is not a string";
    }

    for (let i = 0; i < stringsToBeCompared.length; i++) {
        if (longestString.length < stringsToBeCompared[i].length) {
            longestString = stringsToBeCompared[i];
        }
    }
    return longestString;
}

console.log(findLongestString("Wantsome is Awsomeeee today"));



//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const starStrings = (string, number) => {
let stringOfStars = "";

    for (let i = 0; i < number; i++) {
        stringOfStars = string.repeat(i+1);
        console.log(stringOfStars);
    }

    return "";
}

const star = "* ";
console.log(starStrings(star, 5));
 

  
//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }

return negativeNumbers;
}

console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));
      


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const operatingNumbers = (num1, num2, operator) => {
    switch(operator) {
        case "add" :
            return num1+num2;
            break;
        case "substract" :
            return num1-num2;
            break;
        case "multiply" :
            return num1*num2;
            break;
        case "divide" :
            return num1/num2;
            break;
    }
}

console.log(operatingNumbers(2, 5, "add"));
console.log(operatingNumbers(10, 8, "substract"));
console.log(operatingNumbers(3, 7, "multiply"));
console.log(operatingNumbers(15, 3, "divide"));


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const isDiv = number => {
    if (typeof(number) !== "number") {
        return "The value is not a number";
    }

    if (number % 3 === 0 && number % 5 !== 0) {
        return "THREE";
    }

    if (number % 5 === 0 && number % 3 !== 0) {
        return "FIVE";
    }

    if (number % 15 === 0) {
        return "BOTH";
    }

    return number;
}

console.log(isDiv("adb"));
console.log(isDiv(12));
console.log(isDiv(25));
console.log(isDiv(45));
console.log(isDiv(22));
  
  

  
//Master exercises

//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
  
const dateTime = new Date(); 
const weekDay = new Array(7);
    weekDay[0] = "Duminica";
    weekDay[1] = "Luni";
    weekDay[2] = "Marti";
    weekDay[3] = "Miercuri";
    weekDay[4] = "Joi";
    weekDay[5] = "Vineri";
    weekDay[6] = "Sambata";
    
let AMPM = "";
    if (dateTime.getHours() < 12) {
        AMPM = "AM";
    }
    else {
        AMPM = "PM";
    }

var date = "Data de azi este : " + dateTime.getFullYear() + "/" + (dateTime.getMonth()+1) + "/" + dateTime.getDate();
var day = "Azi este : " + weekDay[dateTime.getDay()];
var time = "Ora este : " + dateTime.getHours() + " " + AMPM + " : " + dateTime.getMinutes() + " : " + dateTime.getSeconds();

console.log(date);
console.log(day);
console.log(time);
     
  
  
//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = digits => {
    for (let i = 0; i < digits.length; i++) {
        const digitCode = digits.charCodeAt[i];

        if (digits.length === 4 || digits.length === 6) {
            
            if(/[0-9]/g.test(digits[i])) {
                return true;
            }
        }
        return false;
    }
    
}
    
console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));




//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

const removeVowels = string => {
    let stringWithoutVowels = string.replace(/[aeiou]/gi, "");
      
    return stringWithoutVowels;
}

console.log(removeVowels("Hey I am developer"));



//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

const isSquareNumber = number => {
    resultSquare = Math.sqrt(number);
    isSquare = Math.floor(resultSquare);

    if (resultSquare === isSquare) {
        return true;
    }

        return false;
}
  
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));

    
//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (string1, string2) => {
      
    anagramString1 = string1.toLowerCase().split("").sort().join("").trim();
        console.log(anagramString1)
    anagramString2 = string2.toLowerCase().split("").sort().join("").trim();
        console.log(anagramString2);

    if (anagramString1 === anagramString2) {
        return true;
    }

    return false;
}

console.log(isAnagram("School master", "The class room"));
console.log(isAnagram("silent", "listen"));