import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const Botao = styled(Link)`
  height: 32px;
  width: 32px;
  background-color: ${variables.green};
  color: #eee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${variables.lightGreen};
  }
`;
