import { InputInterFace } from "../../typs/type";
function Input({
  type,
  placeholder,
  className,
  onChange,
  value,
}: InputInterFace) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
}
export default Input;
