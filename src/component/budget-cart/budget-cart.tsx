import React, { Children } from "react";
// interFace---------------------------------------------------------------------------------------
interface ChildrenProps {
  className: string;
  title: string;
}
// budget jsx---------------------------------------------------------------------------------------
function BudgetCart({ className, title }: ChildrenProps) {
  return (
    <div className={className}>
      <p>{title}</p>
    </div>
  );
}
export default BudgetCart;
