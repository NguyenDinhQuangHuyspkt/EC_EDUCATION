type TYPE_ASSETS = 'banner' | 'courses';

export const getImagesAssets = (imageName: string, type: TYPE_ASSETS): string => {
  return `/assets/${type}/${imageName}`;
}