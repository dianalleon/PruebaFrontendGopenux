export interface Paginator {
  limit: number;
  notices: Notices[];
  page: number;
  total: number;
}
export interface Notices {
  id?: string;
  locate: Locate;
  description: string;
  category: Category;
  status: string;
}
export interface Locate {
  long: number;
  lat: number;
}
export interface Category {
  id?: string;
  name: string;
  type?: string;
}

