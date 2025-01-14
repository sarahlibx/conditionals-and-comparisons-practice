var stringNumber = "12";
var number = 12;
if (stringNumber === number) {
  console.log("These two variable values & types are the same.");
} else if (stringNumber == number) {
  console.log("These two variable values are the same");
} else {
  console.log("These values are not equal at all!");
}

var numPrompt = Number(
  prompt("Between 0-12 hours, how many hours did you sleep last night?")
);
if (numPrompt > 12) {
  console.log("Let's hear how long you really slept.");
} else if (numPrompt >= 8) {
  console.log("What a great sleep!");
} else if (numPrompt >= 5) {
  console.log("Maybe try to go to bed earlier tonight.");
} else {
  console.log("You should really get more sleep!");
}

var chocPrompt = Number(
  prompt(
    "How many pieces of chocolate would you like? You can have anywhere from 0-10 pieces!"
  )
);
var chocRemaining = 10 - chocPrompt;
if (chocRemaining === 10) {
  alert("You didn't want any chocolate?");
} else if (chocRemaining >= 6) {
  alert(`There are still ${chocRemaining} pieces of chocolate left!`);
} else if (chocRemaining >= 1) {
  alert(`Almost gone, there is ${chocRemaining} piece of chocolate left.`);
} else {
  alert("You ate all the chocolate!");
}
