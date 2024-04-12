export interface Notices {
  id?: string;
  locate?: Locate;
  description: string;
  category: Category;
  status?: string;
}

export interface Locate {
  lat: number;
  long: number;
}

export interface Category {
  id?: string;
  name: string;
  type?: string;
}
