export type Category = string;

export type QueryParams = {
  sort?: 'desc' | 'asc';
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  image: string;
};
