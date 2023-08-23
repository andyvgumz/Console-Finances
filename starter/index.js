let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099],
  ];

//Pseudocode:

//To desplay our Console_Finance heading we type:    
console.log("Financial Analysis")     
//console.log("This will run the code")

//As a first step, we find the number of months.
//To obtain the number of months, we determine length of array: totalMonths = length of array
//As var is less used in morden versions of JavaScript, therefore, we are going to use "let" to declare our variables.

//Create a variable for total number of months by using .length attribute: 
let totalMonths = finances.length;

//We can now display our results by typing:        
console.log("Total months:" + totalMonths);

//Now we can workout the "netTotalProfit/Losses"
//From the amounts columns, we can find the sum of the objects and the valiable would be:

netTotalProfitLoss = 0;

for (let index = 0; index < totalMonths; index++) {
    netTotalProfitLoss += finances[index][1];
}   //The above will sup up the objects from the columns.

//We can now run our code to display results:

console.log("The Net Total Profit/Loss: " + netTotalProfitLoss);

//Find the total average of Profit/Loss change for the whole period:
//1. Determine the total average changes and devide by total number of months:
// *totalAvgProfitLoss = totalAvgChanges / totalMonths

//2. To obtain the total average changes for the entire period:
//* We find the average change, the sum of all average changes

//2. We can workout the difference between previous month and the next:
//*By subtracting the previous month from the following month

// In order to make make it eaiser to do our calculation, we can do a reverse order method using "for loop" 
//this allows us to decrement to console_finance array for both dates and amount arrays:

let dateReversed = [];

let amountReversed = [];

//The "for loop" will reverse the order of the console_finance array
for (let index = totalMonths - 1; index >= 0; index--) {
    const [date, amount] = finances[index];
    //Run code to check: console.log(date);     
    dateReversed.push(date)

    // Run code to check: console.log(amount);   
    amountReversed.push(amount);
}

//We can now check if the dateReversed and amountReversed have been generated:
// Run the code: console.log(dateReversed);      
// Run the code: console.log(amountReversed);

//Array of average changes:

let avgChanges = []

//Variable of total average changes    
let totalAvgChanges = 0;

// The "for loop" calculates monthly differencesa and sums up arrays
for (let index = 0; index < totalMonths - 1; index++) {

    avgChanges.push(amountReversed[index] - amountReversed[index + 1]);

    totalAvgChanges += avgChanges[index];
}

// Run the code: console.log(avgChanges);

//Below is the workout differences and for total average changes and we can fix the figures to 2 decimal places:

let totalAvgProfitLoss = totalAvgChanges / avgChanges.length;

console.log("Average change: " + totalAvgProfitLoss.toFixed(2));

//In order to obtail the greatest increase in profits we have to find the highest amount of change between each month
// The greatestProfit = the highest monthly value changes

//We can create a variable using math.max for highest value from avgChanges array    
let greatestProfitAmount = Math.max(...avgChanges);

//Run the code to retrieve the highest value change:

// console.log("The greatest increase in profits is at index " + avgChanges.indexOf(greatestProfitAmount));

let greatestProfitDate = dateReversed[60];

//We can now create another variable and retrieve the date from the dateReversed index and run code to display the highest increase in profit:

console.log("Greatest increase in profits: " + greatestProfitDate + " ($" + greatestProfitAmount + ")")

//To determine the greatest decrease in losses we can follow similar procedure as per greatest increase:
//However, this time we find the lowest negative change between each month for the entire period.

//greatestLossAmount = lowest negative per month, a variable for obtaining the lowest change is created using math.min:

let greatestLossAmount = Math.min(...avgChanges);

//We can run the code on the console to see the change in value: 
// console.log("The greatest decrease in losses is at index " +avgChanges.indexOf(greatestLossAmount));

//A variable to retrieve the date from dateReesrved array

greatestLossDate = dateReversed[41];

//Run code on the console to display results:
console.log("Greatest Decrease Profits: " + greatestLossDate + " ($" + greatestLossAmount + ")")  