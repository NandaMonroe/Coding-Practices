// The Pizza Oven

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "traditional", "provolone", ["broccoli", "bacon"]);
console.log(pizza3);

var pizza4 = pizzaOven("stuffed", "traditional", "gorgonzola", ["fried garlic", "cherry tomatoes"]);
console.log(pizza4);


// BONUS - Random Pizza

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "broccolli",
    "onions",
    "mushrooms",
    "bacon"
];


// random pick to generate a number to select a value in the array of choices

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

// random range to generate a quantity of different cheeses or toppings (because we can choose more than one)
function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

// function to generate the pizza
function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());