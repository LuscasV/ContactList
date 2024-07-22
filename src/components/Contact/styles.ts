import styled from "styled-components";

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

export const TextArea = styled.textarea`
  font-size: 15px;
  color: #eee;
  background-color: transparent;
  border: none;
  resize: none;
  margin-right: 5px;
  width: 100%;
`;

export const Icons = styled.span`
  color: #3498db;
  margin-right: 8px;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const RemoveButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: #e74c3c;
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const CancelButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: #e74c3c;
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const EditButton = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: #f0932b;
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;

export const SaveButton = styled.button`
  color: #ffbe76;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: #444;
  margin: 0 5px;
`;
