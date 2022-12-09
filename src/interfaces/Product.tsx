interface IProductDetails {
  name: string;
  productId: string;
  code: string;
  seller: string;
  deliveryDate: Date;
}

export interface IProductsDetails {
  details: IProductDetails[];
}

interface ICategories {
  categories: string;
}

interface IProductSpecifications {
  specificationSubtitles: string;
  specificationsInfo: string;
  specificationCares: string;
}

export interface IProductSpecifications {}
