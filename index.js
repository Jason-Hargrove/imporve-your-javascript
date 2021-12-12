// Log everything.
const log = console.log;

// ====================================================
// 7 Little-Known Techniques to Improve Your JavaScript
// ====================================================

// ===== 1. Shorthand nullish filtering. =====
// const groceries = ['Tea', null, 'Oat Milk', 'Carrots', undefined, 'Bread', ''];
//
// const cleanList = groceries.filter(Boolean);
//
// log(groceries);
// log(cleanList);


// ===== 2. Formattin numbers with Numeric Seperators. =====
// Stage 4 proposal.
// const bigNumber = 1_000_000;
// log(bigNumber); // 1000000


// ===== 3. Combined array/object destructuring =====
// const people = [
//   {
//     name: "Lisa",
//     age: 20
//   },
//   {
//     name: "Pete",
//     age: 22
//   },
//   {
//     name: "Caroline",
//     age: 60
//   }
// ];

// const [{age}] = people;
// log(age);
//
// const [{name}] = people;
// log(name);


// ===== 4. Ignoring values in array destructuring. =====
// const [, , caroline] = people;
// log(caroline);

// const [, , {age}] = people;
// log(age);


// ===== 5. Renaming variables during object destructuring. =====
// const caroline = {
//   firstNm: 'Caroline',
//   ag: 27
// };
// log(caroline);
//
// const {firstNm: firstName, ag: age} = caroline;
// log(firstName, age);


// ===== 6. Directly chaining an await clause. =====
// const chainDirectly = (await fetch('https://www.people.com'))
//   .filter(person => age > 20)
//   .filter(person => nationality === 'NL')
// log(chainDirectly);


// ===== 7. Directly chaining an await clause. =====
