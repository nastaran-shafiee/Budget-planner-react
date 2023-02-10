import React, { Children, FC } from "react";
import { BudgetCartInterFace } from "../../typs/type";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../context/context";

// style component---------------------------------------------------------------------------------
const BudgetContainer = styled.div`
  flex: 1;
  height: 2.8rem;
  border-radius: 0.3125rem;
  padding: 1rem;
`;
// budget component--------------------------------------------------------------------------------------
function BudgetCart({
  className,
  title,
  money,
  children,
}: BudgetCartInterFace) {
  return (
    <BudgetContainer className={className}>
      <p>
        {title} <span>{money}</span>
      </p>
      {children}
    </BudgetContainer>
  );
}
export default BudgetCart;
