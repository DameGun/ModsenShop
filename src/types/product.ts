export type Category = string;

export type FilterParams = {
  sort?: 'desc' | 'asc';
  category?: string;
  limit?: number;
  searchTerm?: string;
  priceConstants?: [number, number];
  priceSortValues?: [number, number];
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
