export interface Notices {
  id?: string;
  locate: Locate;
  description: string;
  category: Category;
  status?: string;
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
