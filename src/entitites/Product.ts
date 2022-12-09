export interface IProduct {
  name: string;
  productId: string;
  code: string;
  seller: string;
  deliveryDate: Date;
}

export interface IProductSpecifications {
  specificationSubtitles: string;
  specificationsInfo: string;
  specificationCares: string;
}
