export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface Service {
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}
