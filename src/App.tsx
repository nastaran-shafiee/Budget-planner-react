import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BudgetCart from "./component/budget-cart/budget-cart";
import ExpenseCarts from "./component/expense-carts/expense-carts";

function App() {
  return (
    <div className="App">
      <h2>My Budget Planner</h2>
      <div className="budget_cart_container">
        <BudgetCart title="Budget:" className="budget" />
        <BudgetCart title="Remaining:" className="remaining" />
        <BudgetCart title="Spent so far:" className="Spent" />
      </div>
      <h3>Expenses</h3>
      <div className="Expense_cart_container">
        <ExpenseCarts />
      </div>
      <h3>Add Expense</h3>

      <div className="Add-container"></div>
    </div>
  );
}

export default App;
