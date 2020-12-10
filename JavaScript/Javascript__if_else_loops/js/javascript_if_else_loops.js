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
  