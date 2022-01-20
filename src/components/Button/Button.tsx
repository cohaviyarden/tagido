import { useState } from "react";
import "./style";
import { ButtonStyled } from "./style";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  addOrRemove: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [touched, setTouched] = useState<Boolean>(false);
  const changeColor = () => {
    setTouched(!touched);
    props.addOrRemove();
  };

  return (
    <ButtonStyled
      style={{ backgroundColor: `${touched ? "#66CDAA" : "grey"}` }}
      onClick={changeColor}
      {...props}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
