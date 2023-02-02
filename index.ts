#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("Welcome to Quiz App"));
console.log(chalk.bgBlackBright("Each questions carry one mark. Best of Luck!!!"));
console.log(chalk.bgBlueBright("Lets start"));
async function main() {
    let score: number = 0;//Global score
    //Different prompt for each question, can be done in one i quess
    let ques1 = async function q1() {
        await inquirer.prompt([{
            type: "list",
            name: "ques",
            message: ("What is the capital of Pakistan"),
            choices: ["Karachi", "Islamabad", "Peshawar", "Lahore"]
        }
        ]).then(async (answers) => {
            if (answers.ques == "Islamabad") {
                score++;
            }
        }
        )
    }
    let ques2 = async function q2() {
        await inquirer.prompt([{
            type: "list",
            name: "ques",
            message: "What is the capital of KPK",
            choices: ["Mardan", "Peshawar", "Lahore", "Sawabi"]
        }
        ]).then(async (answers) => {
            if (answers.ques == "Peshawar") {
                score++;
            }
        }
        )
    }
    let ques3 = async function q3() {
        await inquirer.prompt([{
            type: "list",
            name: "ques",
            message: "Who is the current Prime minister of Pakistan",
            choices: ["Nawaz Sharif", "Imran Khan", "Shehbaz Sharif", "Haji COAS"]
        }
        ]).then(async (answers) => {
            if (answers.ques == "Shehbaz Sharif") {
                score++;
            }
        }
        )
    }
    let ques4 = async function q4() {
        await inquirer.prompt([{
            type: "list",
            name: "ques",
            message: "Which of the following was the first capital of Pakistan",
            choices: ["Mardan", "Peshawar", "Lahore", "Karachi"]
        }
        ]).then(async (answers) => {
            if (answers.ques == "Karachi") {
                score++;
            }
        }
        )
    }
    //Array of Questions
    let questions = [ques1, ques2, ques3, ques4];
    //For running questions randomly
    const questionSize = questions.length;
    for (let index = 0; index < questionSize; index++) {
        let randomNum = Math.floor(Math.random() * ((questions.length) - 1));//Random question showing
        await questions[randomNum]();
        //Removing question that is asked once
        questions.splice(randomNum, 1);
    }
    console.log(chalk.bgBlueBright("You have answered " + score + " questions correctly"));
}
async function continueChoice() {
    do {
        await main();
        var choice = await inquirer.prompt(
            {
                type: "input",
                name: "qa",
                message: chalk.bgGrey("Do you want to play again? Press Y or y to continue")
            })
    }
    while (choice.qa == 'yes' || choice.qa == 'Yes' || choice.qa == 'YES' || choice.qa == 'y' || choice.qa == 'Y');
}
continueChoice();