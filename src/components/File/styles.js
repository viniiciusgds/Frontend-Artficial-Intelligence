import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #444;

  div + div {
    display: flex;
    align-items: center;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      color: #212121;
      text-align: left;
      font-weight: bold;
    }

    span {
      width: 100%;
      text-align: left;
      font-size: 12px;
      color: #212121;
      margin-top: 5px;
    }
  }
`;

export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
