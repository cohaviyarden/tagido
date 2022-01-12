
import './style';
import { ButtonStyled, Label } from './style';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = (props: ButtonProps)=> {
    return (
        <ButtonStyled {...props}>
          <Label>{props.children}</Label>
        </ButtonStyled>
    );
  };
  
  export default Button;