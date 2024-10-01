"use strict";

const ps = require("prompt-sync");
const prompt = ps();


// Function to prompt user for input and log task
function getTaskForDay() {
    // Prompt user for a day of the week
    const day = prompt("Enter a day of the week (e.g., Monday, Tuesday):");
    
    // Initialize a variable to hold the task
    let task;
    
    // Use a switch statement to map days to tasks
    switch (day) {
    case "Monday":
    task = "Finish your assignments";
    break;
    case "Tuesday":
    task = "Attend team meeting";
    break;
    case "Wednesday":
    task = "Work on project presentation";
    break;
    case "Thursday":
    task = "Review code with peers";
    break;
    case "Friday":
    task = "Submit weekly report";
    break;
    case "Saturday":
    task = "Plan for next week";
    break;
    case "Sunday":
    task = "Relax and recharge";
    break;
    default:
    task = "Invalid input. Please enter a valid day of the week.";
    }
    
    // Log the task for that day to the console
    console.log(`Your task for ${day} is: ${task}`);
    }
    
    // Call the function
    getTaskForDay();