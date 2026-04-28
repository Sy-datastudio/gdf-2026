export interface Speaker {
  name: string;
  role: string;
  organization: string;
  image?: string;
}

export interface Panel {
  title: string;
  subtitle: string;
  points: string[];
}

export interface EventDetail {
  label: string;
  value: string;
}