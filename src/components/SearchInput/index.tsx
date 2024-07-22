import { useDispatch, useSelector } from "react-redux";
import { Container, Input } from "./styles";
import { RootReducer } from "../../store";
import { termSwitch } from "../../store/reducers/filter";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);
  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar"
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(termSwitch(e.target.value))
        }
      />
    </Container>
  );
};

export default SearchInput;
