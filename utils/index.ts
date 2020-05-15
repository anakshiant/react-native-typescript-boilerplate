import { Photo } from "../services/flickr/dto";

export const processPhotoGrid = (photos: Photo[], count: number) => {
  return photos.reduce(
    (accumlator: Photo[][], current: Photo) => {
      if (accumlator[accumlator.length - 1].length < count) {
        accumlator[accumlator.length - 1].push(current);
      } else {
        accumlator.push([current]);
      }
      return accumlator;
    },
    [[]]
  );
};
