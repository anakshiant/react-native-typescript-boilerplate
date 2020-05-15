import { client, normalizeResponse } from "../index";
import { FlickrResponse, Photo } from "./dto";

const PER_PAGE = 20;
const API_KEY = "5cd86a0637d856ac8e66a2b22b7b868f";

export const getPhotos = async (text: string, page: number) => {
  const flickrResponse = await normalizeResponse<FlickrResponse>(
    client.get("/rest", {
      params: {
        method: "flickr.photos.search",
        text,
        per_page: PER_PAGE,
        page,
        api_key: API_KEY,
        format: "json",
        nojsoncallback: 1,
      },
    })
  );

  if (flickrResponse.type === "success") {
    console.log(flickrResponse.data.photos.page);
    flickrResponse.data.photos.photo = flickrResponse.data.photos.photo.map(
      (photo: Photo) => ({
        ...photo,
        url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      })
    );
  }

  return flickrResponse;
};
