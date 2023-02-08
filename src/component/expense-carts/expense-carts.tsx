import ExpenseCart from "../expense-cart/expesCart";

function yes() {
  console.log("yes");
}

function ExpenseCarts() {
  return (
    <>
      <ExpenseCart name="nasi" cost="25 " onClick={yes} />
      <ExpenseCart name="nasi" cost="25 " onClick={yes} />
    </>
  );
}
export default ExpenseCarts;
