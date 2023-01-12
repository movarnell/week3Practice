const books = [
    {
        id: 0,
        title: "Jane Eyre",
        genre: "Classic"
    },
    {
        id: 1,
        title: "Ancillary Justice",
        genre: "Science Fiction"
    },
    {
        id: 2,
        title: "Atomic Habits",
        genre: "Nonfiction"
    },
    {
        id: 3,
        title: "Dune",
        genre: "Science Fiction"
    },
]


// ​
// Practice Ideas:
// Map - map each book in this style: "Jane Eyre (Classic)"
let mappedExample = books.map(books => books.title + " (" + books.genre + ")");
console.log(mappedExample);
// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)
let filteredExample = books.filter(books => books.genre === "Science Fiction");
filteredExample = filteredExample.map(filteredExample => filteredExample.title);
console.log(filteredExample);
// Find - find the book with the id of 2 (Atomic Habits)
let findExample = books.find(books => books.id === 2);
console.log(`${findExample.id}: (${findExample.title})`);
// ​
const products = [
    {
        id: 0,
        name: "Doritos",
        row: 1,
        price: 1
    },
    {
        id: 1,
        name: "Fruit Snacks",
        row: 1,
        price: 2
    },
    {
        id: 2,
        name: "Water Bottle",
        row: 2,
        price: 1
    },
    {
        id: 3,
        name: "Power Bar",
        row: 2,
        price: 3
    },
    {
        id: 4,
        name: "Sprite",
        row: 3,
        price: 1
    },
    {
        id: 5,
        name: "Poptart",
        row: 3,
        price: 2
    },
]
// ​
// // Practice Ideas:
// Map - map each product in this style: "Row 1 - $1 Doritos"
let productMap = products.map(products => 'Row ' + products.row + " - $" + products.price + " " + products.name);
console.log(productMap);
// Filter - filter for all products in row 3 (Sprite, Poptart)
let productFilter = products.filter(products => products.row === 3);
console.log(productFilter);
// Filter - filter for all products that are cheaper than $2 (Doritos, Water Bottle, Sprite)
let productFilter2 = products.filter(products => products.price < 2);
productFilter2 = productFilter2.map(products => products.name);
console.log(productFilter2);
// Find - find the product with the id of 2 (Water Bottle)
let productFind1 = products.find(products => products.id === 2);
productFind1 = productFind1.name;
console.log(productFind1);
// Find - find the product in row 2 with a price of 3 (Power Bar)
let productFind2 = products.find(products => products.row === 2 && products.price === 3);
console.log(`${productFind2.name} is the product with a price of $${productFind2.price}
and located in row #${productFind2.row}`);
// ​
const appointments = [
    {
        id: 0,
        startTime: "12 PM",
        endTime: "1 PM",
        date: "Feb 3rd",
        name: "Lunch",
        important: false
    },
    {
        id: 1,
        startTime: "1 PM",
        endTime: "3 PM",
        date: "Feb 3rd",
        name: "Meeting with Boss",
        important: true
    },
    {
        id: 2,
        startTime: "7 PM",
        endTime: "9 PM",
        date: "Feb 4th",
        name: "Date",
        important: true
    },
]
// ​
// Practice Ideas:
// Map - map each appointment in this style: "Feb 3rd, 12 PM - 1 PM -- Lunch"
let appointmentsMap = appointments.map(appointments => appointments.date + ', ' + appointments.startTime + ' - ' + appointments.endTime + " -- " + appointments.name);
console.log(appointmentsMap);
// Filter - filter for all important appointments (Meeting with Boss, Date)
let importantFilter = appointments.filter(appointments => appointments.important);
importantFilter = importantFilter.map(appointments => appointments.name);
console.log(importantFilter);
// Filter - filter for all appointments on Feb 3rd (Lunch, Meeting with Boss)
let thirdFilter = appointments.filter(appointments => appointments.date === "Feb 3rd");
console.log(thirdFilter);
// Find - find the appointment with the id of 2 (Date)
let findID2 = appointments.find(appointments => appointments.id === 2);
console.log(findID2.date);
// Find - find the appointment on Feb 3rd that starts at 1 PM (Meeting with Boss)
let findBossMeeting = appointments.find(appointments => appointments.name = "Meeting with Boss");
console.log(findBossMeeting); 