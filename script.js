var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));
var tip = Number(prompt("Tip amount (ex. 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("Number of people dining (ex. 3)"));
console.log(
  `Your meal cost is $${mealCost}, and with the tip it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);

/* Example of result in console when the meal cost was $40, tip was 20% and 2 people ate out:
Your meal cost is $40, and with the tip it comes to $48.00. Your share is $24.00. Hope it was delicious! */
