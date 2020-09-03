import styled, { css } from "styled-components";

const active = css`
  background-color: #69f0ae;
`;

const reject = css`
  background-color: #ff8a65;
`;

export const Container = styled.div.attrs({
  className: "dropzone",
})`
  background-color: #e0e0e0;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && active}
  ${(props) => props.isDragReject && reject}
`;

export const Message = styled.p`
  display: flex;
  color: #616161;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
