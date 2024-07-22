import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ccc;

  h1 {
    font-weight: bold;
    font-size: 42px;
  }
`;

export const Forms = styled.form`
  max-width: 546px;
  width: 100%;
  font-size: 14px;
  color: #ccc;
  border: none;
  margin-top: 30px;
`;

export const Campo = styled.input`
  width: 100%;
  padding: 6px;
  display: block;
  margin-bottom: 18px;
  margin-top: 5px;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  margin: auto;
  margin-top: 15px;
  padding: 4px 10px;
  background-color: ${variables.green};
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${variables.lightGreen};
  }
`;

export const CancelButton = styled(Link)`
  margin: auto;
  margin-top: 15px;
  padding: 4px 10px;
  background-color: ${variables.red};
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    background-color: ${variables.lightRed};
  }
`;
