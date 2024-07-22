import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 8px 20px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid ${variables.blue};
  color: #eee;
`;
