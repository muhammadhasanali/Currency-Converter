#! /usr/bin/env node
import inquirer from 'inquirer'

let currency:any = {
    USD:1, //base currency
    EUR: 0.93,
    GBP: 0.79,
    INR: 83.49,
    PKR: 278.24
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Convert Currency From?",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "to",
        message: "Convert Currency To?",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "amount",
        message: "Enter Amount",
        type:"number",
    }
])

let fromcurrency = currency[user_answer.from]
let tocurrency = currency[user_answer.to]
let useramount = user_answer.amount
let baseconvert = useramount / fromcurrency
let finalresult = baseconvert * tocurrency
console.log(`Your Currency Conversion is ` + Math.round(finalresult))
