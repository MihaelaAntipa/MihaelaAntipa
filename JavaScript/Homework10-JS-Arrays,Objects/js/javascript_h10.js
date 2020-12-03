// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
  name: "Tesla",
  wheels: 4
};
console.log(car);
car.name = "Mercedes";
console.log(car);
delete car.name;
console.log(car);


//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa am rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var user = {
  firstName: 'Mihaela',
  lastName: 'Antipa',
  age: 40,
  course: 'front-end developement'
};

var userKeys = Object.keys(user);
console.log(userKeys);
var userKeysString = userKeys.join(", ").toUpperCase();
console.log(userKeysString);
var userValues = Object.values(user);
console.log(userValues);
var userValuesString = userValues.join(", ").toLowerCase();
console.log(userValuesString);
var resultExe2 = "The details" + " " + userKeysString.concat(" ", "about me are, in order: ", userValuesString);
console.log(resultExe2);


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var author = {
  authorFirstName: "David",
  authorLastName: "Michie",
  authorFullName: function () {
    return this.authorFirstName + " " + this.authorLastName;
  }
};
console.log(author.authorFullName());

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
  rooms: 3,
  zone: "Bucium",
  animals: 1
}

var owner = {
  ownerFirstName: "Popescu",
  ownerLastName: "Adriana",
  ownerAge: 29
}

clonedOwner = Object.assign({}, owner);
clonedOwner.occupation = "doctor";
clonedOwner.gender = "female";

var mergedObjects = Object.assign(clonedOwner, myHouse);
console.log(mergedObjects);


// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var car = {
  mark: "Ford",
  model: "Focus",
  carDate : {
    month : "May",
    year : 2015
  }
};

var carCarDateKeys = Object.keys(car.carDate);
var carCarDateKeysString = carCarDateKeys.join(" si ");
console.log(carCarDateKeysString + " sunt proprietati ce apartin obiectului car");


//Ex6
// Avem obiectul : 
myObject = {
name: "John",
surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var myObjectValues = Object.values(myObject);
console.log(myObjectValues);
var myObjectValuesSorted = myObjectValues.sort();
console.log(myObjectValuesSorted);



//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformati-le in litere mari.

function Names (firstNames, middleNames, lastNames) {
  this.firstNames = firstNames;
  this.middleNames = middleNames;
  this.lastNames = lastNames;
}

var name1 = new Names ("Francis", "Scott", "Fitzgerald");
var name2 = new Names ("Robert", "Louis", "Stevenson");
var name3 = new Names ("Arthur", "C.", "Clarke");

var name1Values = Object.values(name1).join(" ").toUpperCase();
var name2Values = Object.values(name2).join(" ").toUpperCase();
var name3Values = Object.values(name3).join(" ").toUpperCase();

console.log(name1Values);
console.log(name2Values);
console.log(name3Values);
