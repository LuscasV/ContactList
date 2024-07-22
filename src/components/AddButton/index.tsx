import { IoPersonAdd } from "react-icons/io5";
import { Botao, Container } from "./styles";

const AddButton = () => {
  return (
    <Container>
      <Botao>
        <IoPersonAdd />
      </Botao>
    </Container>
  );
};

export default AddButton;
