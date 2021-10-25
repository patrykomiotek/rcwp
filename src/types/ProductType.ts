export type ProductType = {
  id: string;
  fields: {
    name: string;
    price: number;
  }
}

type ProductAddType = Omit<ProductType, "id">
