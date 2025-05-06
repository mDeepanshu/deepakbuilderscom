import axios from "axios";

const uploadFileToS3 = async (
  file,
  fileName,
  contentType,
  projectName,
  folder = ""
) => {

  // Call your Lambda/API to get a presigned URL
  const data = await axios.post(
    "https://bxt246g708.execute-api.ap-south-1.amazonaws.com/default/rkconstructions-dev-getPresignedUrl",
    {
      projectName,
      fileName,
      contentType,
      folder,
    }
  );

  await axios.put(data.data.url, file, {
    headers: { "Content-Type": contentType },
  });

  return data.data.finalUrl; // the final public URL of the file
};

export default uploadFileToS3;
