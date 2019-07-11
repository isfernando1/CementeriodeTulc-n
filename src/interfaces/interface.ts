

 
 
 
 
 export interface Article {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  content: Content;
  excerpt: Content;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  _links: Links;
  _embedded: Embedded;
}

export interface Embedded {
  'wp:featuredmedia': Wpfeaturedmedia[];
}

export interface Wpfeaturedmedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Guid;
  author: number;
  caption: Guid;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: Mediadetails;
  source_url: string;
  _links: Links2;
}

export interface Links2 {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Reply[];
  replies: Reply[];
}

export interface Mediadetails {
  width: number;
  height: number;
  file: string;
  sizes: Sizes;
  image_meta: Imagemeta;
}

 export interface Imagemeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes {
  thumbnail: Thumbnail;
  medium: Thumbnail;
  medium_large: Thumbnail;
  'post-thumbnail': Thumbnail;
  'envo-ecommerce-single': Thumbnail;
  'envo-ecommerce-med': Thumbnail;
  woocommerce_thumbnail: Woocommercethumbnail;
  woocommerce_single: Thumbnail;
  woocommerce_gallery_thumbnail: Thumbnail;
  shop_catalog: Thumbnail;
  shop_single: Thumbnail;
  shop_thumbnail: Thumbnail;
  full: Thumbnail;
}

export interface Woocommercethumbnail {
  file: string;
  width: number;
  height: number;
  uncropped: boolean;
  mime_type: string;
  source_url: string;
}

export interface Thumbnail {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  replies: Reply[];
  'wp:featuredmedia': Reply[];
  'wp:attachment': Self[];
  curies: Cury[];
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface Self {
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Guid {
  rendered: string;
}