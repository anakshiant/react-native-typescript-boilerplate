export type FlickrResponse = {
  photos: Photos;
};

export type Photos = {
  page: number;
  perPage: number;
  pages: number;
  total: number;
  photo: Photo[];
};

export type Photo = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  url?: string;
};


