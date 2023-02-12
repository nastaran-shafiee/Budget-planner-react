import { createPortal } from "react-dom";
import Button from "../button/button";
import Input from "../input/input";

import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";

// style component------------------------------------------------------------------------------------
const pStyle: object = {
  color: "white",
  position: "absolute",
  top: "1px",
  left: "11px",
  fontSize: "30px",
};
const ModalContainerEdit = styled.div`
  width: 350px;
  height: 150px;
  background-color: white;
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 0.625rem;
  border-radius: 0.1875rem;
  position: absolute;
  top: 35%;
  left: 35%;
`;
const ModalbackgroundEdit = styled.div`
  width: 62.5rem;
  height: 90vh;
  background-color: rgba(128, 128, 128, 0.685);
  border-radius: 0.1875rem;
  position: absolute;
  top: 3rem;
  left: 13.4%;
  z-index: 5;
`;
const Close = styled.div`
  width:38px;
  height:38px;
  border-radius: 50%;
  background-color: black;
color:white
  border-radius: 0.1875rem;
  position: absolute;
  top: 10px;
  right:10px;
  z-index: 5;
 
`;
// edit Modal Component--------------------------------------------------------------------
function EditModal() {
  const {
    showModal,
    setShowModal,
    setBudgetChange,
    budgetChange,
    setInputChange,
    inputChange,
    dispatchYourBudget,
  } = useContext(AppContext);
  // function close modal------------------------------------------------
  function closeModal() {
    setShowModal(false);
  }
  // function changing modal -------------------------------------------
  function changingInput(e: any) {
    setInputChange(e.target.value);
  }
  // function submit budget-----------------------------------------------
  function submitBudget() {
    setShowModal(false);
    dispatchYourBudget({ type: "edit" });
  }
  // return edit modal function------------------------------------
  return (
    <>
      {showModal &&
        createPortal(
          <ModalbackgroundEdit>
            <Close>
              <p style={pStyle} onClick={closeModal}>
                x
              </p>
            </Close>
            <ModalContainerEdit className="editmodal">
              <Input
                type="text"
                placeholder="please enter your budget"
                onChange={changingInput}
              />
              <Button title="add " onClick={submitBudget} />
            </ModalContainerEdit>
          </ModalbackgroundEdit>,
          document.getElementById("modal") as HTMLDivElement
        )}
    </>
  );
}
export default EditModal;
