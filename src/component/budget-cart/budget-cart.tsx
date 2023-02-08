import { Children } from "react";
// interFace---------------------------------------------------------------------------------------
interface ChildrenProps {
  className: string;
  title: string;
  Children: any;
}
// budget jsx---------------------------------------------------------------------------------------
function budgetCart({ className, title, Children }: ChildrenProps) {
  return (
    <div className={className}>
      <p>{title}</p>
      <>{Children}</>
    </div>
  );
}
export default budgetCart;
