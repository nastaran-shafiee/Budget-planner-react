import { createContext, FC, useEffect, useReducer, useState } from "react";
import { ContectInterFace, JsxChilderen } from "../typs/type";
// provider context-----------------------------------------------------------------------------
export const AppContext = createContext<ContectInterFace>({
  Name: " ",
  setName: () => {},
  Cost: 0,
  setCost: () => {},
  List: [],
  setList: () => {},
  yourBudget: 2000,
  dispatchYourBudget: () => {},
  showModal: false,
  setShowModal: () => {},
  budgetChange: 0,
  setBudgetChange: () => {},
  inputChange: " ",
  setInputChange: () => {},
  setShowModalDelete: () => {},
  showModalDelete: " ",
  setId: () => {},
  id: " ",
  setCostDelete: () => {},
  CostDelete: " ",

  searchedList: [],

  setSerchList: () => {},
});
// function App provider-------------------------------------------------------------------------------
const AppProvider: FC<JsxChilderen> = ({ children }) => {
  // stats--------------------------------------------------------
  const [Name, setName] = useState<string>(" ");
  const [Cost, setCost] = useState<number>(0);
  const [CostDelete, setCostDelete] = useState<number>(0);
  const [List, setList] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<any>(false);
  const [showModalDelete, setShowModalDelete] = useState<any>(false);
  const [budgetChange, setBudgetChange] = useState<number>(100);
  const [inputChange, setInputChange] = useState<any>(" ");
  const [id, setId] = useState<any>(" ");

  const [searchedList, setSerchList] = useState<any>([]);

  // rediouser-------------------------------------------------------------
  const [yourBudget, dispatchYourBudget] = useReducer<any>(manageBudget, {
    count: budgetChange,
    count1: budgetChange,
    count2: 0,
  });
  // manage budget function-----------------------------------------------
  function manageBudget(state: any, action: any) {
    switch (action.type) {
      case "edit":
        return {
          count: Number(inputChange),
          count1: Number(inputChange) - Number(state.count2),
          count2: Number(state.count2),
        };
      case "remaining":
        return {
          count: Number(state.count),
          count1: Number(state.count1) - Number(Cost),
          count2: Number(state.count2) + Number(Cost),
        };
      case "delete":
        return {
          count: Number(state.count),
          count1: Number(state.count1) + CostDelete,
          count2: Number(state.count2) - CostDelete,
        };
      default:
        break;
    }
  }
  // return function----------------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        Name,
        setName,
        Cost,
        setCost,
        List,
        setList,
        yourBudget,
        dispatchYourBudget,
        showModal,
        setShowModal,
        budgetChange,
        setBudgetChange,
        setInputChange,
        inputChange,
        showModalDelete,
        setShowModalDelete,
        id,
        setId,
        CostDelete,
        setCostDelete,
        searchedList,
        setSerchList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
