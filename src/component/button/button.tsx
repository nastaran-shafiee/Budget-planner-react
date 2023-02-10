import styled from "styled-components";
import { ButtonInterFace } from "../../typs/type";

// style component------------------------------------------------------------------------------------
const Button1 = styled.button`
  width: 60px;
  height: 30px;
  background-color: blue;
  color: white;
  border: none;
  padding: 0.625rem;
  border-radius: 0.1875rem;
`;
// component--------------------------------------------------------------------------------------------
function Button({ title, onClick }: ButtonInterFace) {
  return <Button1 onClick={onClick}>{title}</Button1>;
}
export default Button;
