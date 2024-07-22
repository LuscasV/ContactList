import { Provider } from "react-redux";
import store from "./store";

import EstiloGlobal, { Container } from "./styles/styles";

import Home from "./pages/Home/index";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Home />
      </Container>
    </Provider>
  );
}

export default App;
