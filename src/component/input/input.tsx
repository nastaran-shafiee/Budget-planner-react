interface ChildrenProps {
  type: string;
  placeholder: string;
  className: string;
}

function Input({ type, placeholder, className }: ChildrenProps) {
  return <input type={type} placeholder={placeholder} className={className} />;
}
export default Input;
