//Daily Practice

//Exercise - Monkey with Strings
//Write a program that tells me the the number of characters in your name.
//Tell me what 123+456 is. Now tell me what "123" + "456" is.

alert("Paula".length);

alert("123" + "456".length);

//Exercise: Thanks for all the fish
//In your JavaScript file, create a variable called farewell and give it a value of "Thanks for all the fish"
//Pop your farewell variable up in an alert box.

var farewell = "Thanks for all the fish!";

alert(farewell);

//Exercise: What's for dinner…
//Create a variable called question. Give it a value of "What's for dinner?"
//Create a variable called answer. Give it a value of "Fish"
//Add the two variables together and put the result in an alert box.

question = "What's for dinner?";
var answer = "Fish";
alert(question + " " + answer);

//Exercise - equality
//Try this now, alert (1 + 1) === 2, what do you get?
//Now alert (5 + 5) === 10

alert(1 + 1);
alert(5 + 5);
alert(5 + (5 == 2));
alert(5 + (5 == 5));

//Exercise: Sandwich Calculator

var slices = 12;
var sandwich = 2;
var numSandwiches = slices / sandwich;
alert(numSandwiches);

//Exercise: Doing Sums

console.log(5 - 2);

console.log(10 * 9);

console.log(50 - 30);

console.log(100 / 2);

console.log(744 + 1);

//Make a sandwich

function makeSandwich() {
    console.log("Open bread bag");
    console.log("Take two pieces of bread");
    console.log("Add ham and cheese");
    console.log("Put it in a sanwich bag");
};

makeSandwich();
makeSandwich();
makeSandwich();
makeSandwich();
makeSandwich();

var makeSandwich1 = function () {
    console.log("Get bread");
    console.log("Spread the butter");
    console.log("Spread the jam");
    console.log("Cut off the crusts");
    console.log("Put in a little bag");
};

makeSandwich1();
makeSandwich1();
makeSandwich1();
makeSandwich1();
makeSandwich1();

var makeSandwich2 = function (filling) {
    console.log("Get bread");
    console.log("Spread the butter");
    console.log("Spread the " + filling);
    console.log("Cut off the crusts");
    console.log("Put in a little bag");
};

makeSandwich2("marmite");
makeSandwich2("jam");
makeSandwich2("squeezy cheez");

function crabSandwich(something){

    console.log("bread" + something);
    console.log("crab");
    console.log("eat");
};

crabSandwich("mustard");