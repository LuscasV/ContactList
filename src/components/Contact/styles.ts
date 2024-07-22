import styled from "styled-components";
import variables from "../../styles/variables";

export const Card = styled.div`
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  color: #eee;
  align-items: center;
`;

export const Titulo = styled.p`
  font-size: 18px;
`;

export const Numero = styled.span`
  font-size: 15px;
`;

export const Email = styled.p`
  font-size: 15px;
`;

export const Campo = styled.input`
  font-size: 15px;
  color: #eee;
  background-color: transparent;
  border: none;
  margin-right: 5px;
  width: 100%;
`;

export const Icons = styled.span`
  color: ${variables.blue};
  margin-right: 8px;
`;

export const ButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const RemoveButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${variables.red};
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const CancelButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${variables.red};
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const EditButton = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: ${variables.orange};
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const SaveButton = styled.button`
  color: ${variables.lightOrange};
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;
