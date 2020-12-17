//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare


//1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

const addNumbers = addUntilNumber => {
  let sumNumbers = 0;
  
  for (let i = 1; i <= addUntilNumber; i++) {
    sumNumbers += i;
  }
  
  return sumNumbers;
}

console.log(addNumbers(10));



//2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

const longest = stringWithWords => {
  if (typeof stringWithWords !== "string") {
    return "Error: You provided the wrong argument!";
  }
  
  let words = stringWithWords.split(" ");
  let longestWord = "";
  
  for (let i=0; i < words.length; i++) {
    const currentWord = words[i];
    
    if(currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  
  return longestWord;
 }

console.log(longest("I am a string"));
console.log(longest("I am doing my homework in JavaScript"));



// 3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'

const reverseString = stringToBeReversed => {
  if(typeof(stringToBeReversed) !== "string") {
    return "Error! You didn't chose a string"
  }
  
  let stringReversed = "";
  const stringLength = stringToBeReversed.length;
  
  for (let i=0; i<stringLength; i++) {
    stringReversed = stringReversed.concat(stringToBeReversed[stringLength-i-1]);
  }
  
  return stringReversed;  
}

console.log(reverseString("coding in JavaScript"));



// 4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet


const replaceLetters = stringForLettersToBeReplaced => {
  if(typeof(stringForLettersToBeReplaced) !== "string") {
    return "Error! You didn't chose a string";
  }
  
  let replacedLettersString = "";
  
  for (let i = 0; i<stringForLettersToBeReplaced.length; i++) {
   
    // partea aceasta nu functioneaza si inca nu imi dau seama de ce
    

    if (stringForLettersToBeReplaced[i] === "z") {
      replacedLettersString += "a";
      continue;
    }
    
    if (stringForLettersToBeReplaced[i] === "Z") {
      replacedLettersString += "A";
      continue;
    }

    const currentCharacterCode = stringForLettersToBeReplaced.charCodeAt(i);

    if ((currentCharacterCode>64 && currentCharacterCode<91) || (currentCharacterCode>96 && currentCharacterCode<123)) {
      const newCharacter = String.fromCharCode(currentCharacterCode + 1)
      replacedLettersString += newCharacter;
      continue;
    }

     const sameCharacter = stringForLettersToBeReplaced[i];
     replacedLettersString += sameCharacter; // pentru caracterele care nu sunt litere sa ramana la fel.
  }
     
  return replacedLettersString;
}

console.log(replaceLetters("AcDeMpz"));
console.log(replaceLetters("abcd8 efZ"));



// 5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
// Exemplu: input: 64  ->  output: 1:4


const convertToTime = numberTransformedInTime => {
  if(typeof(numberTransformedInTime) !== "number") {
    return "Error! This is not a number!";
  }
  
  const theHours = Math.floor(numberTransformedInTime/60);
  const theMinutes = numberTransformedInTime % 60;
  const timeFromNumber = theHours + ":" + theMinutes;
  
  return timeFromNumber;
}

console.log(convertToTime(215));
console.log(convertToTime("215"));



// 6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic

const stringOrderedAlphabetically = stringToBeOrdered => {
  if(typeof(stringToBeOrdered) !== "string") {
    return "Error! This is not a string!";
  } 
  const stringToArrayOrdered = stringToBeOrdered.split("")
  const sortedString = stringToArrayOrdered.sort().join("");
  

  return sortedString;
}

console.log(stringOrderedAlphabetically("azFbme"));
console.log(stringOrderedAlphabetically("A.xdfb"));



// 7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false

const checkPlusSign = stringWithPlus => {
  if(typeof(stringWithPlus) !== "string") {
    return "Error! This is not a string!";
  }
  
  for (let i = 0; i < stringWithPlus.length; i+2) {
    if (stringWithPlus[i] !== "+") {
      return false;
    }
    
    return true;
  }
}
  
console.log(checkPlusSign("adk+++"));
console.log(checkPlusSign("+a+d+k+"));
console.log(checkPlusSign("a+b+c+d+"));