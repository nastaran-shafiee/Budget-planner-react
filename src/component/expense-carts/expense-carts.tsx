import ExpenseCart from "../expense-cart/expesCart";
import AppProvider, { AppContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";

function ExpenseCarts() {
  const {
    List,
    setList,
    setShowModal,
    setShowModalDelete,
    setId,
    searchedList,
  } = useContext(AppContext);
  function deleteBudget(e: any) {
    setId(e);
    setShowModalDelete(true);
  }

  return (
    <>
      {searchedList.length > 0
        ? searchedList.map((item: any) => {
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
          })
        : List.map((item: any) => {
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
