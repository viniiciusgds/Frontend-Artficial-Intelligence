import React, { useState } from "react";
import filesize from "filesize";

import Upload from "../../components/Upload";
import File from "../../components/File";
import Text from "../../components/Text";

import { Container, Content } from "./styles";

import api from "../../services/api";

const Page = () => {
  const [uploadImage, setUploadImage] = useState([]);
  const [textFile, setTextFile] = useState("");

  const upload = (images) => {
    const uploadImage = images.map((file) => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      url: URL.createObjectURL(file),
      upload: false,
      error: false,
    }));

    setTextFile("");

    uploadImage.forEach(processImage);
  };

  const processImage = async (uploadImage) => {
    const data = new FormData();

    data.append("image", uploadImage.file, uploadImage.name);

    try {
      const response = await api.post("image", data, {
        onUploadProgress: (e) => {
          setUploadImage(uploadImage);
        },
      });

      if (response.status === 200) {
        uploadImage.upload = true;
        setUploadImage({ ...uploadImage });
        setTextFile(response.data.text);
      }
    } catch (error) {
      uploadImage.error = true;
      setUploadImage({ ...uploadImage });
    }
  };
  return (
    <Container>
      <Content>
        <Upload onUpload={upload} />
        <File file={uploadImage} />
      </Content>

      {!!textFile && <Text>{textFile}</Text>}
    </Container>
  );
};

export default Page;
