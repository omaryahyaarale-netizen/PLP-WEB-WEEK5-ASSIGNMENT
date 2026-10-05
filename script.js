// ===== SpendWise: JavaScript Foundation =====

console.log("SpendWise script loaded successfully.");

// ---------- 1. Application data (variables) ----------
let budget = 0;          // number: the user's monthly budget
let expenses = [];       // array of objects: { name: string, amount: number }
let userName = "";       // string: the user's name

// ---------- 2. Collect user input ----------
function askForNumber(message) {
  let value = Number(prompt(message));
  // Keep asking until the user enters a valid, non-negative number
  while (isNaN(value) || value < 0) {
    value = Number(prompt("Invalid input. " + message));
  }
  return value;
}

function collectInput() {
  userName = prompt("What is your name?") || "User";
  budget = askForNumber("Enter your monthly budget:");

  const count = askForNumber("How many expenses do you have?");
  for (let i = 0; i < count; i++) {
    const name = prompt("Expense " + (i + 1) + " name:") || "Expense " + (i + 1);
    const amount = askForNumber("Amount for " + name + ":");
    expenses.push({ name: name, amount: amount });
  }
}

// ---------- 3. Budget calculations (reusable functions) ----------
function calculateTotal(list) {
  let total = 0;
  for (const item of list) {
    total += item.amount;
  }
  return total;
}

function calculateRemaining(totalBudget, totalSpent) {
  return totalBudget - totalSpent;
}

function calculatePercentSpent(totalBudget, totalSpent) {
  if (totalBudget === 0) return 0;
  return (totalSpent / totalBudget) * 100;
}

// ---------- 4. Display results in the console ----------
function displayResults() {
  const totalSpent = calculateTotal(expenses);
  const remaining = calculateRemaining(budget, totalSpent);
  const percent = calculatePercentSpent(budget, totalSpent);

  console.log("===== SpendWise Summary for " + userName + " =====");
  console.log("Monthly budget: " + budget);
  console.log("--- Expenses ---");
  for (const item of expenses) {
    console.log(item.name + ": " + item.amount);
  }
  console.log("----------------");
  console.log("Total expenses: " + totalSpent);
  console.log("Remaining balance: " + remaining);
  console.log("Budget used: " + percent.toFixed(1) + "%");

  if (remaining < 0) {
    console.log("Warning: you are over budget by " + Math.abs(remaining) + "!");
  } else {
    console.log("Good job, you are within your budget.");
  }
}

// ---------- 5. Run the app ----------
function startSpendWise() {
  expenses = [];   // reset so the button can be used more than once
  collectInput();
  displayResults();
}

document.getElementById("startBtn").addEventListener("click", startSpendWise);