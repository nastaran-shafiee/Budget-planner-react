import styles from "../../styls/ExpenseCart.module.css";
interface ChildrenProps {
  name: string;
  cost: string | number;
  onClick: any;
}

function ExpenseCart({ name, cost, onClick }: ChildrenProps) {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles.rightcontainer}>
        <div>{cost}</div>
        <div onClick={onClick}>*</div>
      </div>
    </div>
  );
}
export default ExpenseCart;
