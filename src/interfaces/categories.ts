export type Category = {
  id: number;
  user_id: number;
  categoryName: string;
};

export type CategoryContextType = {
  categories: Array<Category>;
  setCategories: (value: Array<Category>) => void;
  getCategories: () => void;
  baseApiUrl: string;
};
