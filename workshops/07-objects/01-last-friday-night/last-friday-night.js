// YOUR CODE BELOW

function lastFridayNight(transactions) {

    let i;
    let total = 0;

    for (i=0; i<transactions.length; i++) {
        console.log(transactions[i].amount);
        total += transactions[i].amount;
    }

    console.log("total:", total);
    return total;
}

let transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];
  
  lastFridayNight(transactions) // => 10512