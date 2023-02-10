import { createPortal } from "react-dom";
import Button from "../button/button";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../context/context";

// style component------------------------------------------------------------------------------------
const pStyle: object = {
  color: "white",
  position: "absolute",
  top: "1px",
  left: "11px",
  fontSize: "30px",
};
const ModalContainerDelete = styled.div`
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
  color: black;
`;
const ModalbackgroundDelete = styled.div`
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
// delete Modal Component--------------------------------------------------------------------
function DeletModal() {
  const {
    showModalDelete,
    setShowModalDelete,
    List,
    id,
    setList,
    CostDelete,
    setCostDelete,
    dispatchYourBudget,
  } = useContext(AppContext);
  // function close modal----------------------
  function closeModal() {
    setShowModalDelete(false);
  }
  // function changing modal --------------

  // function deletetodo------------------
  function deleteTodo() {
    setShowModalDelete(false);
    let array: any = [];
    List.map((item) => {
      if (id !== item.id) {
        const obj = {
          name: item.name,
          cost: item.cost,
          id: item.id,
        };
        return array.push(obj);
      }
      if (id === item.id) {
        setCostDelete(Number(item.cost));
      }
    });
    dispatchYourBudget({ type: "delete" });
    return setList(array);
  }
  return (
    <>
      {showModalDelete &&
        createPortal(
          <ModalbackgroundDelete>
            <Close>
              <p style={pStyle} onClick={closeModal}>
                x
              </p>
            </Close>
            <ModalContainerDelete className="editmodal">
              <p>Are you sure to delete this budget</p>
              <Button title="Delete" onClick={deleteTodo} />
            </ModalContainerDelete>
          </ModalbackgroundDelete>,
          document.getElementById("modal")
        )}
    </>
  );
}
export default DeletModal;
