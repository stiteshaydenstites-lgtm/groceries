/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/**
 * @type {Item[]}
 * You can use this example array to test your functions.
 */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} ids of given items
 */
function getIds(items) {
  // TODO
  console.log("Running Function getIds");
  const id = function(items){
    const output = [];
    for(const element of items){
      const result = element.id;
      output.push(result);
      //console.log(`The ID of this element is ${result}`);
    }
      //console.log(`The Array of IDs looks like this ${output}`);
    return output;
  }
  
  return id(items);

}
console.log("Running Function getIds");
console.log(getIds(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {string[]} categories of given items
 */
function getCategories(items) {
  // TODO
 
  const categories = function(items){
    const output = [];
    for(const element of items){
      const result = element.category;
      output.push(result);
      //console.log(`The Category of this element is ${result}`);

    }
   // console.log(`The Array of Categories looks like this ${output}`);
  }
  return categories(items);

}
console.log("Running Function getCategories");
console.log(getCategories(INVENTORY));
/**
 * Vendors often use SKUs (Stock Keeping Units) to manage their inventory.
 * SKU formats are not standardized, so for this exercise, we will use the format
 * "[id]#[name]#[name length]"
 *
 * For example, the SKU of `{id: 91, name: "broccoli"}` would be "91#broccoli#8"
 * @param {Item[]} items
 * @returns {string[]} SKUs of given items
 */
function getSkus(items) {
  // TODO
  
  const sku = function(items){
    const output=[];
    for(const element of items){
      const nameLength = element.name.length;
      const result = element.id + "#"+ element.name +"#"+ nameLength;
      output.push(result);
      //console.log(`The Sku of this element looks like this ${result}`);
    }
    //console.log(`the Array of Sku's looks like this ${output}`);
    return output;
  }
  
  return sku(items);
}
console.log("Running Function getSkus");
console.log(getSkus(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {Item[]} all items in the "fruit" category
 */
function getFruits(items) {
  // TODO
  
  
  const fruitFilter = (items) => {
    const output = [];
    for(const element of items){
      const isFruit = (element) => element.category === "fruit";
      if(isFruit(element)){
        output.push(element);
        
      }
        
      
      
    }
    //console.log(`The Array of Items with the category of fruit looks like this ${output}`);
    return output;
  }
  return fruitFilter(items);
}
console.log("Running Function getFruits");
console.log(getFruits(INVENTORY));
/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]} all items in the given category
 */
function getItemsByCategory(items, category) {
  // TODO
  const categoryFilter = (items) => {
    const output = [];
    for(const element of items){
      const isCategory = (element) => element.category === category;
      if(isCategory(element)){
        output.push(element);
        //console.log(`The element ${element.name} is classified as a ${category}`);
      }else{
        //console.log(`the element ${element.name} is not classified as a ${category}`);
      }

    }
    return output;
  }
  return categoryFilter(items);
}
console.log("Running Function getItemsByCategory");
console.log(getItemsByCategory(INVENTORY,"vegetable"));
/**
 * An item is considered "cheap" if its price is $2.50 or less.
 * @param {Item[]} items
 * @returns {Item[]} all cheap items
 */
function getCheapItems(items) {
  // TODO
  const cheapFilter = (items) => {
    const output = [];
    for(const element of items){
      const isCheap = element.price <= 2.50;
      if(isCheap){
        output.push(element);
      }
    }
    return output;
  }
  return cheapFilter(items);
}
console.log("Running Function getCheapItems");
console.log(getCheapItems(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {number} the total quantity of all items given
 */
function countItems(items) {
  // TODO
  const totalItems = function(items){
    let result =0;
    for(const element of items){
      result+=element.quantity;
    }
    return result;
  }
  return totalItems(items);
}
console.log("Running Function countItems");
console.log(countItems(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {number} the cost of purchasing every single item
 */
function getTotalCost(items) {
  // TODO
  const totalCost = function(items){
    let result =0;
    for(const element of items){
      result+=element.quantity*element.price;
    }
    return result;
  }
  return totalCost(items);

}
console.log("Running Function getTotalCost");
console.log(getTotalCost(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {Item} the item with the highest price
 */
function getMostExpensiveItem(items) {
  // TODO
  // const array =items;
  // const initialPrice =0;
  // const priceWithInitial = array.reduce((accumulator, currentValue) => accumulator+currentValue, initialPrice);
  // return priceWithInitial;
  
  const mostExpensive = items.reduce((accumulator,currentValue) =>{
    return (currentValue.price > accumulator.price) ? currentValue : accumulator;

  });
  return mostExpensive;
}
console.log("Running getMostExpensiveItem");
console.log(getMostExpensiveItem(INVENTORY));
