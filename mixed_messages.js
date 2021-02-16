// Affirmation Machine

// Part 1: Greeting

// Part 2: Positive Name

// Part 3: Action

const affirmations = { 
    greeting: ["Happy Day", "Greetings", "Hello", "Hi there"],
    name: ["King or Queen", "Friend", "Star", "Wonderful Human", "Fabulous Person"],
    action: ["Have an amazing day!", "You can do what is in front of you!", "You've got this!", "You have what it takes!", "Make it so!", "You are worthy of good things!", "Know your worth!", "You are fantastic!", "You deserve love!"]

}

function affirmationMachine() {
 let randomGreetIndex = Math.floor(Math.random() * affirmations["greeting"].length);
 let randomGreet = affirmations.greeting[randomGreetIndex];

 let nameIndex = Math.floor(Math.random() * affirmations["name"].length);
 let randomName = affirmations.name[nameIndex];

 let actionIndex = Math.floor(Math.random() * affirmations["action"].length);
 let randomAction = affirmations.action[actionIndex];

 console.log(`${randomGreet}, ${randomName}! ${randomAction}`);

}

affirmationMachine();
