export type OffersResponse = {
  count: number;
  offers: Offer[];
};

export type Offer = {
  _id: string;
  product_name: string;
  product_description: string;
  product_price: number;
  product_details: ProductDetail[];
  product_pictures: Image[];
  product_image: Image;
  product_date: string;
  owner: Owner;
  __v: number;
};

export type ProductDetail = {
  [key: string]: string;
};

export type Image = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
  api_key: string;
};

export type Owner = {
  _id: string;
  account: {
    username: string;
    avatar: Image;
  };
};

export type SearchParams = {
  title?: string;
  priceMin?: number;
  priceMax?: number;
};
