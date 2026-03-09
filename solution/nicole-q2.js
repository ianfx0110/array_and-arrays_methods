//Object Iteration
/*Create an object representing a product (name, price, brand).

Write code that displays all keys and their values in a readable format.*/

let product = {
    name: "Lip Gloss",
    price: 9.99,
    brand: "Fenty Beauty"
};
console.log("Product Details:");
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}   
