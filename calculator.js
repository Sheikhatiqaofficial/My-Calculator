#! /usr/bin/env node
import inquirer from "inquirer";
import add from "./add.js";
import sub from "./sub.js";
import mult from "./mult.js";
import div from "./div.js";
import chalk from "chalk";
async function main() {
    const answer = await inquirer.prompt([{
            type: "number",
            name: "n1",
            message: "ENTER FIRST NUMBER!"
        },
        {
            type: "number",
            name: "n2",
            message: "ENTER SECOND NUMBER!"
        },
        {
            type: "list",
            name: "operation",
            message: "choose one operator to perform operation",
            choices: [
                { name: 'addition', value: add },
                { name: 'subtraction', value: sub },
                { name: 'multiplication', value: mult },
                { name: 'division', value: div }
            ]
        }
    ]);
    console.log(chalk.red.italic(`Your answer is ${answer.operation(answer.n1, answer.n2)}`));
}
main();
