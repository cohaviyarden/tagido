import { useState } from "react";
import "./style";
import { ButtonStyled, Label } from "./style";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  addOrRemove: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [touched, setTouched] = useState<Boolean>(false);
  const changeColor = () => {
    setTouched(!touched); 
    props.addOrRemove();
  };

  return (
    <ButtonStyled style={{backgroundColor:`${touched ? 'green' : 'grey'}`}} onClick={changeColor} {...props}>
      <Label>{props.children}</Label>
    </ButtonStyled>
  );
};

export default Button;
