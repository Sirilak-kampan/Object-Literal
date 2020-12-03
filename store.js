// 💳 shop
let ica = {
    name: "Ica Supermarket Skurup",
    address: "Drottninggatan 29",
    zipcode: "12345",
    city: "Skurup",
    staff:[], // defaultvärdet är en tom array som vi sen kan lägga till ta bort ifrån med hjälp av javascript
    products:[],
    hireStaff: function(person){
           // vi använder oss av this här, för att "this" hänvisare till det egna objektet. Så "this" = ica
        this.staff.push(person);
        person.worksAt = this;
        return this;
    },

    fireStaff: function(person){
        // vi kan här använda en arraymetoden som heter remove()
        this.staff.remove(person);
        person.worksAt = null;
        return this; // får ut objekt på engång 
    }

}

// 🔥🔥🔥🔥🔥 person objekt 🔥🔥🔥🔥🔥

let siri = {
    firstName: "Siri",
    lastName: "Kampan", 
    age: 21,
    salary: 25000,
    worksAt: null,
};

let erik = {
    firstName: "Erik",
    lastName: "Jansson",
    age: 45,
    salary: 26000,
    worksAt: null,
};

let maria = {
    firstName: "Maria",
    lastName: "Karlsson",
    age: 23,
    salary: 30000,
    worksAt: null,
};

