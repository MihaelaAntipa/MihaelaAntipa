//1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(input) {
    var inputValue = typeof(input);
    var yesString = "string";
    return inputValue === yesString;
}
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false


//2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(myString) {
    var blank = myString.length;
    return blank === 0;
 }
 
 console.log(is_Blank(''));
 console.log(is_Blank('abc'));
 true
 false


//3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array(stringExe3) {
    return stringExe3.split(' ')
  }

console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]


//4. Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name(stringExe4) {
    var positionSlice = stringExe4.indexOf(" ", 0) + 2;
    var stringExe4Slice = stringExe4.slice(0, positionSlice);
    return stringExe4Slice + ".";
  }

console.log(abbrev_name("Robin Singh"));
"Robin S."



//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize(stringExe5) {
    var capitalFirst = stringExe5.charAt(0).toUpperCase();
    var restString = stringExe5.slice(1);
    return capitalFirst.concat(restString);
  }

console.log(capitalize('js string exercises'));
"Js string exercises"


//6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function truncate_string(stringExe6, length) {
    return stringExe6.substr(0, length);
}

console.log(truncate_string("Robin Singh",4));
"Robi"


//7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:

function isUpperCaseAt(stringExe7, indexExe7) {
    var charIndexExe7 = stringExe7.charAt(indexExe7);
    var charUpperIndexExe7 = charIndexExe7.toUpperCase();
    return charIndexExe7 === charUpperIndexExe7;
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false

//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert (stringExe8, stringToAdd, indexExe8) {
    var stringExe8_1 = stringExe8.substr(0, indexExe8);
    var stringExe8_2 = stringExe8.slice(indexExe8, -1);
    return stringExe8_1.concat(stringToAdd, stringExe8_2);
  }

console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."


//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurrence(stringExe9, stringToBeRemoved) {
    var stringNou9 = stringExe9.replace(stringToBeRemoved+" ", "")
    return stringNou9;
  }

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
"The quick brown fox jumps over lazy dog"


//10. Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings (stringExe10_1, stringExe10_2) {
    return stringExe10_1.toLowerCase() === stringExe10_2.toLowerCase();
  }

console.log(compare_strings('abcd', 'AbcD'));
true


//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function Uncapitalize(stringExe11) {
    var uncapitalFirst = stringExe11.charAt(0).toLowerCase();
    var restStringExe11 = stringExe11.slice(1);
    return uncapitalFirst.concat(restStringExe11);
  }

console.log(Uncapitalize('Js string exercises'));
"js string exercises"

