import { 
  AlertCircle, 
  Monitor, 
  Users, 
  GitPullRequest, 
  Shield, 
  Headphones, 
  Wifi, 
  Database, 
  AppWindow, 
  HardDrive,
  FileText,
  UserPlus,
  Briefcase,
  Plane,
  Server
} from 'lucide-react';
import { Category, Activity } from './types';

export const RECENT_ACTIVITY: Activity[] = [
  { id: '1', ticketId: 'INC-2023-001', summary: 'Outlook connecting issues', status: 'In Progress', date: '2 mins ago' },
  { id: '2', ticketId: 'SR-2023-049', summary: 'Request for VPN access', status: 'Open', date: '1 hour ago' },
  { id: '3', ticketId: 'HR-2023-112', summary: 'Leave balance inquiry', status: 'Resolved', date: 'Yesterday' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'incidents',
    name: 'Incidents',
    shortName: 'INC',
    description: 'Report an issue or outage affecting your work.',
    icon: AlertCircle,
    services: [
      { id: 'i1', name: 'Report Outage', description: 'Critical system down or unavailable.', icon: AlertCircle },
      { id: 'i2', name: 'Software Issue', description: 'Errors in installed applications.', icon: AppWindow },
      { id: 'i3', name: 'Hardware Issue', description: 'Broken laptop, monitor, or peripherals.', icon: HardDrive },
    ]
  },
  {
    id: 'it-service',
    name: 'IT Service Catalog',
    shortName: 'IT SC',
    description: 'Request hardware, software, or access.',
    icon: Monitor,
    services: [
      { id: 'it1', name: 'System Access', description: 'Request access to internal banking systems (SAM).', icon: Shield },
      { id: 'it2', name: 'Service Desk', description: 'General IT support and inquiries.', icon: Headphones },
      { id: 'it3', name: 'Network & VPN', description: 'Internet, Wi-Fi, and remote access.', icon: Wifi },
      { id: 'it4', name: 'Database Services', description: 'SQL, Oracle DB provisioning and access.', icon: Database },
      { id: 'it5', name: 'Application Support', description: 'Core banking application assistance.', icon: AppWindow },
      { id: 'it6', name: 'Infrastructure', description: 'Server provisioning and cloud resources.', icon: Server },
    ]
  },
  {
    id: 'hr-service',
    name: 'HR Services',
    shortName: 'HR SC',
    description: 'Employee requests, benefits, and letters.',
    icon: Users,
    services: [
      { id: 'hr1', name: 'Onboarding', description: 'New employee setup and orientation.', icon: UserPlus },
      { id: 'hr2', name: 'Letters & Certificates', description: 'Salary certificates and employment proof.', icon: FileText },
      { id: 'hr3', name: 'Leave Management', description: 'Vacation, sick leave, and time off.', icon: Plane },
      { id: 'hr4', name: 'Benefits', description: 'Health insurance and allowance claims.', icon: Briefcase },
    ]
  },
  {
    id: 'change-req',
    name: 'Change Request',
    shortName: 'CR',
    description: 'Submit RFCs for production changes.',
    icon: GitPullRequest,
    restricted: true,
    services: [
      { id: 'cr1', name: 'Standard Change', description: 'Pre-authorized low risk changes.', icon: FileText },
      { id: 'cr2', name: 'Normal Change', description: 'Requires CAB approval.', icon: GitPullRequest },
      { id: 'cr3', name: 'Emergency Change', description: 'Urgent fix for critical incidents.', icon: AlertCircle },
    ]
  }
];