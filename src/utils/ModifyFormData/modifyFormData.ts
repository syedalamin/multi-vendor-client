export const modifyPayload = (payload: object, file?: File) => {
  const formData = new FormData();

  const data = JSON.stringify(payload);

  formData.append("data", data);

  if (file instanceof File) {
    formData.append("file", file);
  } else if (Array.isArray(file) && file[0]) {
    formData.append("file", file[0]);
  }

  return formData;
};

export const modifyProductPayload = (payload: object, file?: File | File[]) => {
  const formData = new FormData();

  formData.append("data", JSON.stringify(payload));

  if (file instanceof File) {
    formData.append("file", file);
  } else if (Array.isArray(file)) {
    file.forEach((f) => {
      formData.append("file", f);
    });
  }

  return formData;
};
export const modifyPayloads = (
  payload: object,
  files?: { logo?: File; banner?: File }
) => {
  const formData = new FormData();
  const data = JSON.stringify(payload);
  formData.append("data", data);

  if (files?.logo) {
    formData.append("logo", files.logo);
  }
  if (files?.banner) {
    formData.append("banner", files.banner);
  }

  return formData;
};
export const modifyHomePayloads = (
  payload: object,
  files?: {
    sliderImages?: File;
    heroImages?: File;
    hotDealImages?: File;
    hotMainImages?: File;
    reviewImages?: File;
    reviewMainImages?: File;
    footerImages?: File;
  }
) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(payload));

  if (files?.sliderImages) {
    formData.append("sliderImages", files.sliderImages);
  }
  if (files?.heroImages) {
    formData.append("heroImages", files.heroImages);
  }
  if (files?.hotMainImages) {
    formData.append("hotMainImages", files.hotMainImages);
  }
  if (files?.reviewImages) {
    formData.append("reviewImages", files.reviewImages);
  }
  if (files?.reviewMainImages) {
    formData.append("reviewMainImages", files.reviewMainImages);
  }
  if (files?.footerImages) {
    formData.append("footerImages", files.footerImages);
  }

  return formData;
};
