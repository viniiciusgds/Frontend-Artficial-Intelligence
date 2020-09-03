import React from "react";
import Dropzone from "react-dropzone";

import { Container, Message } from "./styles";

const Upload = ({ onUpload }) => {
  const text = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <Message>Arraste seu arquivo aqui!</Message>;
    }

    if (isDragReject) {
      return <Message>Arquivo incompatível!</Message>;
    }

    return <Message>Solte aqui!</Message>;
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Container
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {text(isDragActive, isDragReject)}
        </Container>
      )}
    </Dropzone>
  );
};

export default Upload;
