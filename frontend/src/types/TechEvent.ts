export interface TechEvent {
  _id: string;
  title: string;
  responsible: string;
  image: string;
  images: string[];
  description: string;
  date: string;
  hour: string;
  day: string;
  type: string;
  city: string;
  location?: string;
  link?: string;
}
