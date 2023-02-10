import styled from "styled-components";
import { ExpenseCartInterFace } from "../../typs/type";

// style-----------------------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: -1px;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
`;
const Rightcontainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const CostContainer = styled.div`
  width: 6rem;
  height: 1.5rem;
  background-color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
`;
const Click = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
`;
// component------------------------------------------------------------------------------------------
function ExpenseCart({ name, cost, onClick }: ExpenseCartInterFace) {
  return (
    <Container>
      <p>{name}</p>
      <Rightcontainer>
        <CostContainer>$ {cost}</CostContainer>
        <Click onClick={onClick}>x</Click>
      </Rightcontainer>
    </Container>
  );
}
export default ExpenseCart;
