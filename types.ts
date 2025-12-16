import { LucideIcon } from 'lucide-react';

export interface SubService {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Category {
  id: string;
  name: string;
  shortName: string; // For the card display (e.g., "IT SC")
  description: string;
  icon: LucideIcon;
  restricted?: boolean; // For "Limited Access" badge
  services: SubService[];
}

export interface Activity {
  id: string;
  ticketId: string;
  summary: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  date: string;
}