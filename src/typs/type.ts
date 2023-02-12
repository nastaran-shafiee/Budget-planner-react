
   // children interface----------------------------------------------------------------------------
   export interface JsxChilderen {
    children: JSX.Element | JSX.Element[];
  }
  
  // budget cart interface------------------------------------------------------------------
 export interface BudgetCartInterFace {
    className: string;
    title: string;
    money:any;
    children:  React.ReactNode
  }
// button interface-------------------------------------------------------------------------
  export interface ButtonInterFace {
    title: string;
    onClick: any;
  }
// expence cart interface----------------------------------------------------------------
  export interface ExpenseCartInterFace {
    name: string;
    cost: string | number;
    onClick: any;
  }
  // input interface-------------------------------------------------------------------
  export interface InputInterFace {
    type: string;
    placeholder: string;
    className: string;
    onChange: any;
    value: string | number;
  }
 
  // list interface------------------------------------------------------------------------------
  interface list {
    name: string;
    cost: number;
    id: number;
  }
  
  export interface ModalAction {
    type: string;
  }
  // all interface from conttext=-----------------------------------------------------------------------
  export interface ContectInterFace {
    Name: string,
    setName: (a:string) => void,
    Cost: string|number,
    setCost: (a:number) => void,
    yourBudget:any,
    dispatchYourBudget:(a:any)=>void,
    List:any[]
    setList:(a:any)=>void,
    setShowModal:(a:any)=>void,
    showModal:any,
    budgetChange:string|number,
    setBudgetChange : (a:any)=>void,
    setInputChange :(a:any)=>void,
    inputChange:any
    setShowModalDelete: (a:any)=>void,
    showModalDelete: any,
    setId: (a:any)=>void,
    id: any,
    CostDelete: any, 
    setCostDelete :(a:any)=>void,
    searchedList: any,
    setSerchList: (a:any) => void,
    

  }