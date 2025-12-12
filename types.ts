export interface Package {
  id: string;
  type: 'Umroh' | 'Haji';
  category: 'Regular' | 'Plus' | 'VIP' | 'Khusus';
  name: string;
  price: string;
  duration: string;
  departureDate: string;
  hotel: string;
  airline: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ManasikSchedule {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  mentor: string;
}

export interface ManasikMaterial {
  id: string;
  title: string;
  duration: string; // e.g. "5 min video" or "3 min read"
  type: 'video' | 'article';
}