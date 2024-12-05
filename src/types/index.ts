export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: string[];
  price: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
}