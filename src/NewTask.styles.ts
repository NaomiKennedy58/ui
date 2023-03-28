import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  margin: 4em auto;
  width: 400px;
  input {
    background-color: #eee;
    padding: 1em;
    border: 0;
    flex: 1;
  }

  button {
    border: 0;
    background-color: #ccc;
    padding: 1em;
    cursor: pointer;
  }
`;

const styles = {
  SearchContainer,
};

export default styles;