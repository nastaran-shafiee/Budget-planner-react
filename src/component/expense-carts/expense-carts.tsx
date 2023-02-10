import ExpenseCart from "../expense-cart/expesCart";
import AppProvider, { AppContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";

function ExpenseCarts() {
  const { List, setList, setShowModal, setShowModalDelete, setId } =
    useContext(AppContext);
  function deleteBudget(e: any) {
    setId(e);
    setShowModalDelete(true);
  }
  return (
    <>
      {List.map((item: any) => {
        return (
          <ExpenseCart
            name={item.name}
            cost={item.cost}
            onClick={() => {
              deleteBudget(item.id);
            }}
            key={item.id}
          />
        );
      })}
    </>
  );
}
export default ExpenseCarts;
