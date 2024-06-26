export type Category = string;

export type PriceSortType = [number, number];
export enum SortType {
  Asc = 'asc',
  Desc = 'desc',
}

export type FilterParams = {
  sort?: SortType;
  category?: string;
  limit?: number;
  searchTerm?: string;
  priceConstants?: PriceSortType;
  priceSortValues?: PriceSortType;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
