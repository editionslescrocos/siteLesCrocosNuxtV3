const useImagePathTransformer = () => {
  const imagePath = (image) => image.replace("public/", "/");
  return { imagePath };
};

export { useImagePathTransformer };
