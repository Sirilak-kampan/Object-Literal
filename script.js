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

// vi kan lägga till egenskaper på ett simpel sätt på någon utav objekten
// det gör vi eklaste genom punktnotation
siri.address = "Drottninggatan 20";
// vi kan även ändra på egenskaper i ett objekt, det finns två sätt att göra detta på första är på via punktnotation
console.log(siri, niklas);
// Det andra sätter är på ett arrayliknande sätt.
siri["age"] = 23;
siri["gender"] = "non-binary";

console.log(siri, niklas);

// vill man ta bort en egenskap, vilket man sällan gör
delete siri.gender;
delete siri["age"];
console.log(siri, niklas);