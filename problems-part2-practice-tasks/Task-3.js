// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicsBudget(laptop, tablets,mobile){
 const laptopPrice = 35000;
 const tabletPrice = 15000; 
 const mobilePrice = 20000;

  return ((laptopPrice*laptop)+(tabletPrice*tablets)+(mobilePrice*mobile));

}


const laptops = 2;
const tablets = 1;
const mobiles = 3;

const total = calculateElectronicsBudget(laptops, tablets, mobiles);
console.log("Total budget required: " + total + " tk");