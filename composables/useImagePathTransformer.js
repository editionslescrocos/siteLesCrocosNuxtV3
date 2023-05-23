const useImagePathTransformer = () => {
  const imagePath = (image) => image.replace("static/", "/");
  return { imagePath };
};

export { useImagePathTransformer };
