import Input from "../input/input";
import Button from "../button/button";
import { useContext, useEffect } from "react";
import AppProvider, { AppContext } from "../../context/context";
// function add to cart------------------------------------------------------------------------
function AddToCart() {
  const {
    setName,
    setCost,
    setList,
    Name,
    Cost,
    dispatchYourBudget,
    yourBudget,
    budgetChange,
  } = useContext(AppContext);

  //get name and cost------------------------------------------------------------------------------------
  function changeName(event: any) {
    setName(event.target.value);
  }
  function changeCoset(event: any) {
    setCost(event.target.value);
  }
  // submit to cart function--------------------------------------------------------------------------
  function Submit(event: any) {
    const save = [];
    event.preventDefault();
    const obj = {
      name: Name,
      cost: Cost,
      id: Date.now(),
    };
    setList((prev: any) => {
      return [...prev, obj];
    });
    dispatchYourBudget({ type: "remaining" });
  }
  return (
    <>
      <Input
        type="text"
        placeholder=" "
        className="text-input"
        onChange={changeName}
        value={Name}
      />
      <Input
        type="text"
        placeholder=" "
        className="text-input"
        onChange={changeCoset}
        value={Cost}
      />
      <Button title="Save" onClick={Submit} />
    </>
  );
}
export default AddToCart;
