// Log everything.
const log = console.log;
// 7 Little-Known Techniques to Improve Your JavaScript

// 1. Shorthand nullish filtering

const groceries = ['Tea', null, 'Oat Milk', 'Carrots', undefined, 'Bread', ''];

const cleanList = groceries.filter(Boolean);

log(groceries);
log(cleanList);
