//path to get images a little tool
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
