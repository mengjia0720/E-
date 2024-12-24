export interface Campsite {
  id: string;
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  price: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviews: Review[];
  type: 'tent' | 'rv' | 'cabin';
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[];
}