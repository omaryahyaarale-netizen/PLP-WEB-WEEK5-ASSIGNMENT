# SpendWise

## What the project does
SpendWise is a simple budgeting web app. The user enters a monthly budget and a list of expenses. The app adds up the expenses, works out the remaining balance and the percentage of the budget used, and shows the results in the browser console. It warns the user if they are over budget.

## How to run it
1. Open `index.html` in a browser.
2. Press F12 and open the **Console** tab.
3. Click **Enter My Budget** and answer the prompts.
4. Read the summary in the console.

## JavaScript concepts implemented
- Variables (`let` and `const`)
- Data types: numbers, strings, arrays and objects
- User input with `prompt()`
- Type conversion with `Number()`
- Arithmetic calculations
- Loops (`for`, `while`) and conditionals (`if / else`)
- Functions with parameters and return values
- Console output with `console.log()`
- A button click event listener

## How variables are used
- `budget` (number) stores the monthly budget.
- `expenses` (array) stores each expense as an object with a `name` and an `amount`.
- `userName` (string) stores the user's name.
- Local variables such as `totalSpent` and `remaining` hold calculated values inside functions.

## How user input is collected
The `collectInput()` function uses `prompt()` to ask for the user's name, budget, number of expenses, and each expense's name and amount. Because `prompt()` returns text, the helper function `askForNumber()` converts it with `Number()` and keeps asking if the value is not a valid, non-negative number. Each expense is saved with `expenses.push()`.

## How calculations are performed
- Total expenses: a loop adds every expense amount together.
- Remaining balance: `budget - totalSpent`.
- Percentage used: `(totalSpent / budget) * 100`.

## How functions help organize the code
Each job has its own function, which keeps the code readable and reusable:
- `askForNumber()` validates numeric input.
- `collectInput()` gathers all user data.
- `calculateTotal()`, `calculateRemaining()` and `calculatePercentSpent()` do the budget math.
- `displayResults()` prints the labeled summary.
- `startSpendWise()` runs the whole process when the button is clicked.

## Files
- `index.html`: page structure
- `style.css`: styling
- `script.js`: application logic
- `README.md`: project documentation