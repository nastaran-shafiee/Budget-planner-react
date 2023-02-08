import styls from "../../styls/button.module.css";
interface childerenprops {
  title: string;
}
function Button({ title }: childerenprops) {
  return <button className={styls.btn}>{title}</button>;
}
export default Button;
