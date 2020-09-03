import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";

const slideInUpAnimation = keyframes`${slideInUp}`;

export const Container = styled.div`
  width: 50%;
  min-width: 500px;
  min-height: 200px;
  margin-top: 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  animation: 0.7s ${slideInUpAnimation};
`;

export const TextView = styled.p`
  width: 100%;
  color: #616161;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
