export type Social = { label: string; href: string };
export type Highlight = { title: string; desc: string };
export type Data = {
  name: string;
  subtitle: string;
  location: string;
  bioShort: string;
  photo: string;
  heroCta: string;
  socials: Social[];
  highlights: Highlight[];
  achievements: string[];
  contactEmail: string;
};