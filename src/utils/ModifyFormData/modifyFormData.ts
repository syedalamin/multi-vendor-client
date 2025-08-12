
export const modifyPayload = (payload: object, file?: File) => {
  const formData = new FormData();
  const data = JSON.stringify(payload);
  formData.append("data", data);
  if (file) {
    formData.append("file", file);
  }

  return formData;
};
