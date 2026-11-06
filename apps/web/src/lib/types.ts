export interface Certification {
  id: string;
  code: string;
  name: string;
  description: string;
  prerequisites: string[];
  audience: string;
  icon?: string;
  priceMember: string;
  priceNonMember: string;
  experienceLevel: string;
  type: "core" | "specialized";
  examDuration?: string;
  examQuestions?: string;
  maintenancePdus?: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
}
