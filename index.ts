#!/usr/bin/env node
import inquirer from "inquirer";

// 1 computer will generate random number
// 2 user input for guessing number
// 3 compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 10) + 1;

inquirer
  .prompt([
    {
      name: "userguessnumber",
      type: "number",
      message: "Please guess a number:"
    }
  ])
  .then((answers) => {
    const userguessnumber = answers.userguessnumber;
    if (userguessnumber === randomnumber) {
      console.log("Congratulations! You guessed the right number.");
    } else {
      console.log("You guessed the wrong number.");
    }
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });