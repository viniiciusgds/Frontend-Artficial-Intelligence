import React from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import Loader from "react-loader-spinner";

import { Container, Information, Image } from "./styles";

const File = ({ file }) => {
  return (
    <>
      {!!file.name && (
        <Container>
          <Information>
            <Image src={file.url}></Image>
            <div>
              <a target="_blank" href={file.url}>
                {file.name}
              </a>
              <span>{file.readableSize}</span>
            </div>
          </Information>

          <div>
            {!file.upload && !file.error && (
              <Loader type="Oval" color="#00BFFF" height={24} width={24} />
            )}

            {file.upload && <FiCheckCircle size={24} color="#78e5d5" />}
            {file.error && <FiAlertCircle size={24} color="#e57878" />}
          </div>
        </Container>
      )}
    </>
  );
};

export default File;
