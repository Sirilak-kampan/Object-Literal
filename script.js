// vi vill skapa info om en person. Till exempel namn, ålder, kön osv.
 let name = "Siri";
 let age = 21;
 let gender = "Female";

 let name1 = "Niklas";
 let age1 = 28;
 let gender1 = "Male";

// Istället för att skapa enskilda variabler för olika personer, så kan vi klumpa ihop de variablerna som hör ihop till ett och samma objekt
let siri = {
	name: "Siri",
	age: 21,
	gender: "Female",
};

let niklas = {
	name: "Niklas",
	age: 28,
	gender: "Male",
};

console.log(siri, niklas)