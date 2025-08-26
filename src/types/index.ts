export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  description?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  department?: string;
  period: string;
  location?: string;
  responsibilities: string[];
  image?: string;
  companyLogo?: string;
}

export interface VolunteerWork {
  id: string;
  organization: string;
  position: string;
  period: string;
  description: string;
  achievements?: string[];
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  image?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category: 'technical' | 'soft';
}
