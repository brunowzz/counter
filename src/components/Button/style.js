import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #00a83b;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    background: #00a83b;
  }
`;
