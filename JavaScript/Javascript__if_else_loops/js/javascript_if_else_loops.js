// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNrBetween (number1, number2) {
    if (number1 < number2) {
      return "Numarul " + number2 + " este cel mai mare si " + number1 + " este cel mai mic.";
    }
    else if (number1 > number2) {
      return "Numarul " + number1 + " este cel mai mare si " + number2 + " este cel mai mic.";
    }
    else {
      return "Numerele sunt egale.";
    }
   }
  console.log(greatestNrBetween(5, 10));
  console.log(greatestNrBetween(3, 3));
  console.log(greatestNrBetween(15, 10));
  
  
  //2.Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
  // - Primeste ca argument codul unei limbi: “en”, “es”, “de”
  // - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
  // - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
  // Apelati functia pentru fiecare caz in parte.
  
  
  var lang = "en";
  
  var hellowWorldInLang = function(lang) {
    switch(lang) {
      case "en":
        return "Hello world!";
        break;
      case "es":
        return "Hola Mundo!";
        break;
      case "de":
        return "Hallo Welt!";
        break;
      default:
        return "This language is unknown";
        break;
    }
  }
  
  console.log(hellowWorldInLang("en"));
  console.log(hellowWorldInLang("es"));
  console.log(hellowWorldInLang("de"));
  console.log(hellowWorldInLang("fr"));
  
  
  
  // 3. Scrieti o functie numita pluralizeWord care:
  // - accepta doua argumente: un substantiv in engleza si un numar
  // - returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
  // - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 
  
  
  function pluralizeWord (noun, number) {
    if (number>1 && noun!=="sheep" && noun!=="goose" && noun!=="geese") {
      return number + " " + noun+"s";
    }
    else if (number>1 && noun==="goose") {
      return number + " " + "geese";
    }
    else if (number>1 && noun==="sheep") {
      return number + " " + noun
    }
    else {
      return number + " " + noun;
    }
  };
  
  console.log(pluralizeWord("goose", 3));
  console.log(pluralizeWord("goose", 1));
  console.log(pluralizeWord("sheep", 1));
  console.log(pluralizeWord("sheep", 3));
  console.log(pluralizeWord("dog", 1));
  console.log(pluralizeWord("cat", 3));
  
  
  // 4.  Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
  // corespunzatoare considerand urmatoarele criterii:
  // - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
  // - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
  // - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
  // Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”
  
  
  function taxes(income) {
    if (income < 30000) {
     return "Pentru un venit anual de " + income + " dolari, nu aveti de platit taxe.";
    }
    else if (income < 50000) {
      return "Pentru un venit anual de " + income + " dolari, aveti de platit taxe in procent de 25% si in valoare de " + income*0.25 + " de dolari.";  // am adaugat acest procent pentru varianta intre $30,000 si $50,000
    }
    else if (income < 99999) {
      return "Pentru un venit anual de " + income + " dolari, aveti de platit taxe in procent de 35% si in valoare de " + income*0.35 + " de dolari.";
    }
    else {
      return "Pentru un venit anual de " + income + " dolari, aveti de platit taxe in procent de 40% si in valoare de " + income*0.4 + " de dolari.";
    }
  } 
  
  console.log(taxes(25000));
  console.log(taxes(40000));
  console.log(taxes(60000));
  console.log(taxes(120000));
  
    
  // 1.Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia numarul [index]” - Scrieti codul in doua variante
     function iterationNumber1(itNumber1) {
       for(var i=1; i<= itNumber1; i++) { 
         console.log("Sunt la iteratia " + i + ".")
       }
     }
    iterationNumber1(20);  
  
    var j=1;
    function iterationNumber2(itNumber2) {
      while (j <= itNumber2) {
        console.log("Varianta 2 - Sunt la iteratia " + j + ".");
        j++;
      }
    }
    iterationNumber2(20);
  
  
  // 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa - Scrieti codul in doua variante
  
  //metoda cu FOR
  var myArray = ["HTML", "CSS", "JavaScript"];
  function nrArrayElements1(myArray) {
    for (var i=0; i < myArray.length; i++) {
      console.log("Elementul cu indexul i = " + i + " este " + myArray[i])
    }
  }
  nrArrayElements1(myArray);
  
  
  //metoda cu WHILE
  function nrArrayElements2(myArray) {
    var j=0;
    while (j<myArray.length) {
      console.log("Elementul cu indexul j = " + j + " este " + myArray[j]);
      j++;
    }
  }
  nrArrayElements2(myArray);
  
  
  
  // 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa - scrieti codul in doua variante
  
  var myBook =  {
    author: "Antoine de Saint-Exupery",
    title: "Citadela",
    pages: 432,
    read: true
  }
  
    var myBookKeys = Object.keys(myBook);
    var myBookValues = Object.values(myBook);
  
  //metoda cu FOR
  function myBookElementsWithFor(myBook) {
    for (i=0; i < myBookKeys.length; i++) { 
      console.log("Varianta FOR - " + myBookKeys[i] + ": " + myBookValues[i]);
    }
  }
  
  console.log(myBookElementsWithFor(myBook));
  
  //metoda cu WHILE
  function myBookElementsWithWhile() {
    var j=0;
    while(j < myBookKeys.length) {
      console.log("Varianta WHILE - " + myBookKeys[j] + ": " + myBookValues[j]);
      j++;
    }
  }
  
  console.log(myBookElementsWithWhile(myBook));


// Exercitiile din curs - Practice

// 1. Calculati media aritmetica a unui array de numere

var numbersInArray = [10, 2, 15, 0, 17, 103, 24]
var sumNumbers = 0;

function arithmeticMean(array) {
  for (var i=0; i < numbersInArray.length; i++) {
   sumNumbers += numbersInArray[i];
  }
  console.log("Sunt " + numbersInArray.length + " numere in array, iar suma lor este " + sumNumbers)
  return sumNumbers/numbersInArray.length
}
console.log("Media aritmetica a numerelor din array este " + arithmeticMean(numbersInArray));


// 2. Avand un array cu numere, valori boolene, obiecte si stringuri, calculati suma numerelor. 
// Ignorati toate valorile care nu sunt de tip numar.

var arrayDiverseElements = [25, 7, true, person = {firstNameDiv: "Andrei", lastNameDiv: "Lupu", age: 30}, "copywriter", 10];
var sumRandomDiverse = 0;

function sumNumbersFromArray (array) {
  
  for (var i = 0; i < array.length; i++) {
    
    if (typeof(array[i]) !== "number") {
        console.log("Elementul cu indexul " + i + " care nu este numar, este = " + array[i]);
        continue;
    }
    // Nu am gasit daca pot / cum sa accesez si numarul 30 din interiorul obiectului. O sa mai caut sa ma lamuresc
      
      console.log("Elementul cu indexul " + i + " care este numar, este = " + array[i]); 
      sumRandomDiverse += array[i];
   
  }
   return sumRandomDiverse;
}

console.log(sumNumbersFromArray(arrayDiverseElements));


// 3. Creati un program care afiseaza primele 20 de numere din sirul lui Fibonacci.

var fibonacciArray = [0, 1];

function addToFibonacciArray(array) {
  for (i=0; i < 18; i++) {
    
    var nextNumber = array[i] + array[i+1];
    fibonacciArray.push(nextNumber);
  }
  
  return fibonacciArray;
}

console.log(addToFibonacciArray(fibonacciArray));


// 4. Creati un program cu care tineti evidenta cartilor citite si cartilor pe care doriti sa le cititi in viitor.
    // a. creati un array cu mai multe obiecte. Fiecare obiect reprezinta o carte si are proprietati pentru titlu, autor si daca aceasta carte este citita sau nu
    // b. iterati prin aceasta colectie de carti si afisati la consola titlul si autorul fiecarei carti. De exemplu pentru “The Hobbit” a lui J.R.R. Tolkien ar trebui sa afisati “The Hobbit by J.R.R Tolkien”
    // c. modificati programul astfel incat sa se afiseze si daca o carte a fost citita sau nu

    var myLibrary = [
      {
        title: "1984",
        author: "George Orwell",
        read: "false"
      },
      
      {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        read: "true"
      },
        
      {
        title: "Childhood's End",
        author: "Arthur C. Clarke",
        read: "true"
      },
    
      {
        title: "Great Expectations",
        author: "Charles Dickens",
        read: "false"
      },
    
      {
        title: "East of Eden",
        author: "John Steinbeck",
        read: "true"
      }
    ];
    console.log("---------------------------------------------")
    
    console.log("The books in my library are:")
    for (i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i].title + " by " + myLibrary[i].author);
      }
    console.log("---------------------------------------------")
    console.log("The books in my library:")
    for (i=0; i<myLibrary.length; i++) {
        if (myLibrary[i].read === "true") {
           console.log(myLibrary[i].title + " by " + myLibrary[i].author + " - I had read it");
        }
        else
          {
            console.log(myLibrary[i].title + " by " + myLibrary[i].author + " - I have to read it");
          }
      }
    
    console.log("---------------------------------------------")
    
    console.log("The books from my library that I've read are:")
    for (i=0; i<myLibrary.length; i++) {
        if (myLibrary[i].read === "true") {
           console.log(myLibrary[i].title + " by " + myLibrary[i].author);
        }
      }
    console.log("---------------------------------------------")
    
    console.log("The books from my library that I have to read next are:")
    for (i=0; i<myLibrary.length; i++) {
        if (myLibrary[i].read === "false") {
           console.log(myLibrary[i].title + " by " + myLibrary[i].author);
        }
      } 