import React from "react";

import { Container, TextView } from "./styles";

const Text = ({ children }) => {
  return (
    <>
      <Container>
        <TextView>{children}</TextView>
      </Container>
    </>
  );
};

export default Text;
