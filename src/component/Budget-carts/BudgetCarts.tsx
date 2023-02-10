import BudgetCart from "../budget-cart/budget-cart";
import styled from "styled-components";
import { Children, useContext, useState } from "react";
import AppProvider, { AppContext } from "../../context/context";
import Button from "../button/button";
import { createPortal, render } from "react-dom";
import EditModal from "../EditModal/editmodal";
import { useEffect } from "react";
import { ReactDOM } from "react";
// style-----------------------------------------------------------------------------
const Budget_cart_container = styled.div`
  width: 90%;
  display: flex;
  gap: 1.875rem;
`;
// budget carts component----------------------------------------------------------------
function BudgetCarts() {
  const { dispatchYourBudget, yourBudget, setShowModal, budgetChange } =
    useContext(AppContext);

  useEffect(() => {
    console.log("object");
  }, [budgetChange]);
  // editfunction---------------------------------------------
  const a: any = document.getElementById("modal");
  function Edit() {
    setShowModal(true);
  }
  // return for function---------------------------------------------
  return (
    <Budget_cart_container className="budget_cart_container">
      <EditModal />
      <BudgetCart title="Budget:" className="budget" money={yourBudget.count}>
        <Button title="Edit" onClick={Edit} />
      </BudgetCart>

      <BudgetCart
        title="Remaining:"
        className="remaining"
        money={yourBudget.count1}
        children=" "
      />
      <BudgetCart
        title="Spent so far:"
        className="Spent"
        money={yourBudget.count2}
        children=" "
      />
    </Budget_cart_container>
  );
}
export default BudgetCarts;
