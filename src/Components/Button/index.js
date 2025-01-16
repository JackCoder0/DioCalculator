import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, color, font }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      color={color}
      font={font}
    >
      {label}
    </ButtonContainer>
  );
}

export default Button;
