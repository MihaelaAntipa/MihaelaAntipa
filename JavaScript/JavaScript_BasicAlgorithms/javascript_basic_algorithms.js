//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

var email = "mihaela_antipa@test.com"; // definire variabila email

function hiddenEmail(emailAddress) {
  var indexEmailSign = emailAddress.indexOf("@");
  var part1 = email.slice(0, indexEmailSign-1);
  var part1New = part1.substr(0, part1.length/2);
  var part2 = email.slice(indexEmailSign);
  return (part1New+"..."+part2)
}

console.log(hiddenEmail(email));


//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function uppercaseFirstLetters(string) {
  var myStringToArray = string.split(" ");
  
  for (var i=0; i < myStringToArray.length; i++) {
   
     myStringToArray[i] = myStringToArray[i].charAt(0).toUpperCase() + myStringToArray[i].substring(1);
     }
  return myStringToArray.join(" ");
  }
  
console.log(uppercaseFirstLetters("i am superman"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

  function changeLettersCase(string) {
    var splitString = [];
    
    for (var i = 0; i < string.length; i++) {
      
      if (string[i] === string[i].toLowerCase()) {
        splitString[i] = string[i].toUpperCase();
        continue;
      }

        splitString[i] = string[i].toLowerCase();
        var splitedString = splitString.join("");
        
      }
      return splitedString;
    }
      
    console.log(changeLettersCase("adeEFfgG"));

  

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatStringMultipleTimes(string, number) {
  var concatStringWithFor = "";
  for (var i = 0; i < number; i++) {
    concatStringWithFor = concatStringWithFor.concat(string, " ");
  }
  return concatStringWithFor;
}
console.log(concatStringMultipleTimes("Wantsome ", 4));



//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function isPalindrome (word) {
  var leng = word.length/2;
  for (i = 0; i < leng; i++) {
    if (word[i] === word[word.length-i-1]) {
      return word + " is a palindrome";
    }
    else {
      return word + " is not a palindrome";
    }
  }
}
console.log(isPalindrome("level"));
console.log(isPalindrome("math"));
console.log(isPalindrome("caiac"));
console.log(isPalindrome("abcddcba"));
console.log(isPalindrome("rebel"));




//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

function biggestInEachArray (array) {
  //console.log(array.length);
  var arrayWithBiggestNumbers = [];
  for (var i = 0; i < array.length; i++) {
     var largestBiggestNumber = array[i][0]; 

     for (var j = 1; j < array[i].length; j++) {
            
        if (array[i][j] > largestBiggestNumber) {
          largestBiggestNumber = array[i][j];
        }
    }

    arrayWithBiggestNumbers.push(largestBiggestNumber);
  }

  return arrayWithBiggestNumbers;
}

var arrayToBeTested = [[3, 5, 4, 12], [31, 17, 40, 9, 8], [10, 15, 6, 1, 11], [2, 13, 19, 7]];

console.log(biggestInEachArray(arrayToBeTested));



//Ex7
// Implementati o functie care face reverse la un string

function reverseString (string) {
  var stringReversed = string.split("").reverse().join("");
  return stringReversed;
}

console.log(reverseString("child"));
console.log(reverseString("level"));
console.log(reverseString("home"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorialOfNumber (number) {
  var resultForFactorial = 1;
    
  if (number < 0) {
      return -1;
  }
  
  if (number === 0 || number === 1) {
      return 1;
  }
  
  for (var i = 2; i <= number; i++) {
    resultForFactorial *= i;
  }
  
  return resultForFactorial;
}

console.log(factorialOfNumber(10));
console.log(factorialOfNumber(0));
console.log(factorialOfNumber(-3));


//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function checkStringEnd (string1, string2) {
var resultEnd = string1.endsWith(string2);
return resultEnd;
}

console.log(checkStringEnd("Javascript", "script"));
console.log(checkStringEnd("Javascript", "scrpt"));
console.log(checkStringEnd("Javascript", "vascr"));


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat

function compareArrayWithNumber(array, numberToBeComparedWith) {
  for (var i = 0; i < array.length; i++) {
    numberToBeComparedWith = array[i] > 10 
    if (numberToBeComparedWith === true) {
     break;
    }
  }
  return array[i];
}

console.log(compareArrayWithNumber([5, 25, 18, 7, 32], 5));


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string

function compareStringsForCharacters (string1, string2) {
  var stringNou = "";
  
  for (var i = 0; i < string2.length; i++) {
    stringNou = string1.replace(string2[i], "");
      
    if (stringNou === string1) {
        return false;
      }
    
    string1 = stringNou;
    }
  return true;
}
  
console.log(compareStringsForCharacters("substring", "sbst"));
console.log(compareStringsForCharacters("substring", "sbcst"));
console.log(compareStringsForCharacters("substring", "abc"));



// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

var arrayToBeChecked = ["orange", "John", 53, "photographer"];

function showArrayElements (array, value) {
  var newArrayElements = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      newArrayElements = newArrayElements.concat(array[i]);
    }
    else {
      break;
    }
  }
  return newArrayElements;
}

console.log(showArrayElements(arrayToBeChecked, 70));
console.log(showArrayElements(arrayToBeChecked, 53));
console.log(showArrayElements(arrayToBeChecked, "photographer"));


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN


function removeFalseValues2 (array) {
	array = array.filter(Boolean);
  return array;  
}

arrayToBeChecked = ["apple", "George", false, NaN, 56, null, 0, "book", "", "coleagues", undefined];
console.log(removeFalseValues2(arrayToBeChecked));


// Varianta de mai sus la acest exercitiu, am gasit-o pe net. Am inceput cu varianta de mai jos, dar, indiferent daca am trecut NaN simplu la var falseValues sau varianta care este trecuta mai jos, tot nu imi elimina NaN din array si nu imi dau seama cum ar fi trebuit sa fac ca sa iasa corect cerinta.

/*
function removeFalseValues2 (array) {
	var falseValues = [false, null, 0, "", undefined, isNaN(array[i]) === true];
  
  for (var i = 0; i < array.length; i++) {

  	for (var j = 0; j < falseValues.length; j++) {
      
      if (array[i] === falseValues[j]) {
        array.splice(i, 1);
        i--;
      }

      else {
        continue;
      }
    }
  }
 
  return array;  
}

arrayToBeChecked = ["apple", "George", false, NaN, 56, null, 0, "book", "", "coleagues", undefined];
console.log(removeFalseValues2(arrayToBeChecked));
*/

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

function repeatStringMultipleTimes (string, number) {
  var repeatedString = string.repeat(number);
  return repeatedString;
}

console.log(repeatStringMultipleTimes("Repeat_this ", 7));
