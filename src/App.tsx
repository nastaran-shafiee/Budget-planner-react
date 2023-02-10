import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BudgetCart from "./component/budget-cart/budget-cart";
import ExpenseCarts from "./component/expense-carts/expense-carts";
import Input from "./component/input/input";
import Button from "./component/button/button";
import AppProvider from "./context/context";
import AddToCart from "./component/addToCart/addToCart";
import BudgetCarts from "./component/Budget-carts/BudgetCarts";
import EditModal from "./component/EditModal/editmodal";
import DeletModal from "./component/deletModal/deletemodal";

function App() {
  return (
    <AppProvider>
      <DeletModal />
      <div className="App">
        <h2>My Budget Planner</h2>
        <BudgetCarts />
        <h3>Expenses</h3>
        <Input
          type="search"
          placeholder="type to search"
          className="search-input"
        />
        <div className="Expense_cart_container">
          <ExpenseCarts />
        </div>

        <div className="AddExpense">
          <h3>Add Expense</h3>
          <div className="Add-container">
            <div className="lable">
              <label htmlFor="">Name</label>
              <label htmlFor="">Cost</label>
            </div>
            <div className="input-container">
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
