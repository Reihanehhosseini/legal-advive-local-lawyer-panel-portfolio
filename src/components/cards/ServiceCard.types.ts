import type { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;                 
  icon: ReactNode;               
  statusLabel: string;           
  statusVariant?: "active" | "inactive";

  price: number;                 
  currency?: string;             
  commissionPercent: number;     

  preConsultActive: boolean;     
  isActive: boolean;             

  onTogglePreConsult: (value: boolean) => void;
  onToggleActive: (value: boolean) => void;

  onManageOffers?: () => void;
  onHelpClick?: () => void;
}
