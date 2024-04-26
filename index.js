#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedName",
        type: "number",
        message: "Please guess a number from 1 to 5:",
    },
]);
if (answers.userGuessedName === randomNumber) {
    console.log("Congrats! You guessed the right number.");
}
else {
    console.log("You guessed the wrong number");
}
