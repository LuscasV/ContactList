import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        list-style: none;

        body {
          background-color: #222;
        }
    }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid #3498db;
  padding: 30px;
  border-radius: 10px;
`;

export default EstiloGlobal;
