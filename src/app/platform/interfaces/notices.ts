export interface Notices {
  id?: string;
  description: string;
  location: Location;
  category: Category;
}

export interface Location {
  lat: string;
  long: string;
}

export interface Category {
  id?: string;
  name: string;
}
