export const getSmallImage = (image: string): string => {
  return image.replace(/\.[^.]+$/, "/portrait_small$&");
};
