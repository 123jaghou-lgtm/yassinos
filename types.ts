export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // FontAwesome icon class
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface UserReview {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Business {
  id: string;
  categorySlug: string;
  name: string;
  image: string;
  address: string;
  phone: string;
  workingHours: string;
  coordinates: Coordinates;
  rating: number;
  reviews: UserReview[];
  isPharmacyOnDuty?: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  category: string;
  description: string;
  contact: string;
  postedDate: string;
  status: 'pending' | 'approved';
}

export interface ProfessionalService {
  id: string;
  name: string;
  profession: string;
  phone: string;
  whatsapp?: string;
  rating: number;
  image: string;
}

export interface NewsItem {
  id: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  favorites: string[]; // Array of business/service IDs
  posts: (Job | ProfessionalService)[];
}