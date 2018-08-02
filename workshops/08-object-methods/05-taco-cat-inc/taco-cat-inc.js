let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW

tacoCatInc.currentInventory = function() {
  let amount = 0;
  for (var prop in tacoCatInc) {
    if (typeof tacoCatInc[prop] === 'object') {      
      for (var item in tacoCatInc[prop]) {
        amount += tacoCatInc[prop][item].cost * tacoCatInc[prop][item].quantity
      }
    }
  }
  console.log("currentInventory:", amount);
  return amount;
}

tacoCatInc.sale = function(order) {
  let price = 0;

  for (let item in order) {
    //console.log("item", item, order[item]);
    //console.log(tacoCatInc[item][order[item]]);
    tacoCatInc[item][order[item]].quantity --;
    price += tacoCatInc[item][order[item]].cost;
  }

  console.log("sale price:", price);
  tacoCatInc.cash += price;
  return price;
}

/*
tacoCatInc.currentInventory(); // => 1710

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

tacoCatInc.sale(order); // => 7
tacoCatInc.sale(order); // => 7

console.log("salmon quantity:", tacoCatInc.gourmetFishFilling.salmon.quantity);

console.log("cash:", tacoCatInc.cash);


tacoCatInc.currentInventory(); // => 1696
*/