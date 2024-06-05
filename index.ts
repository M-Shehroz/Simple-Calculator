//npmjs.com >>>> be tahashaaaa third party packages
// install npm i inquirer
// install npm i @types/inquirer

import inquirer from "inquirer";
const input1 = await inquirer. prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your first no:"
})
const input2= await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kidnly enter your second no:"
})
let total: number= input1.num1 + input2.num2
console.log(total)
// Home work slide 129 to 131