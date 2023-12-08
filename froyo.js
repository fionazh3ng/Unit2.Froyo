// Prompt the user for a list of flavors separated by commas
const userInputString = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the input strings into an array of strings.
const stringArray = userInputString.split(",");
const flavors = stringArray;

// Create the initial Object
const myOrder = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};

// Iterate through the array of strings to find flavors
for (let i = 0; i < flavors.length; i++) {
  if (flavors[i] === "vanilla") {
    myOrder.vanilla++;
  }

  if (flavors[i] === "strawberry") {
    myOrder.strawberry++;
  }

  if (flavors[i] === "coffee") {
    myOrder.coffee++;
  }
}

// displaying the result
console.log(myOrder);
