import { IoPersonAdd } from "react-icons/io5";
import { Botao, Container } from "./styles";

const AddButton = () => {
  return (
    <Container>
      <Botao to="/new">
        <IoPersonAdd />
      </Botao>
    </Container>
  );
};

export default AddButton;
