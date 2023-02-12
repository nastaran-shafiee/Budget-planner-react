import { useContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BudgetCart from "./component/budget-cart/budget-cart";
import ExpenseCarts from "./component/expense-carts/expense-carts";
import Input from "./component/input/input";
import Button from "./component/button/button";
import AppProvider, { AppContext } from "./context/context";
import AddToCart from "./component/addToCart/addToCart";
import BudgetCarts from "./component/Budget-carts/BudgetCarts";
import EditModal from "./component/EditModal/editmodal";
import DeletModal from "./component/deletModal/deletemodal";
import styled from "styled-components";
// style component--------------------------------
const AppContainer = styled.div`
  width: 62.5rem;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
  background-color: white;
  padding-top: 1.25rem;
  align-items: center;
`;
const Expense_cart_container = styled.div`
  width: 90%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid gray;
  border-radius: 0.3rem;
  overflow-y: scroll;
`;
const AddExpense = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 62.5rem;
  text-emphasis: none;
  padding-left: 2rem;
`;
const Add_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
// app function---------------------------------------------------------------
function App() {
  const { List, setSerchList, searchedList } = useContext(AppContext);

  // search list function-------------------------------------------------------------
  const searchList = (event: any) => {
    setSerchList([]);
    const searchInput = event.target.value.toLowerCase();
    if (searchInput.length > 0) {
      List.map((item) => {
        const newItem = item.name.toLowerCase();

        if (newItem.includes(searchInput)) {
          setSerchList((prevList: any) => [...prevList, item]);
        }
      });
    }
  };
  // return App function-----------------------------------
  return (
    <>
      <DeletModal />
      <AppContainer className="App">
        <h2>My Budget Planner</h2>
        <BudgetCarts />
        <h3>Expenses</h3>
        <input
          type="search"
          placeholder="type to search"
          className="search-input"
          // onChange={searchChanging}
          onChange={searchList}
        />
        <Expense_cart_container>
          <ExpenseCarts />
        </Expense_cart_container>

        <AddExpense>
          <h3>Add Expense</h3>
          <Add_container>
            <div className="lable">
              <label htmlFor="">Name</label>
              <label htmlFor="">Cost</label>
            </div>
            <div className="input-container">
              <AddToCart />
            </div>
          </Add_container>
        </AddExpense>
      </AppContainer>
    </>
  );
}

export default App;
