export interface MainAreasCardProps {
  id: number;
  title: string;
  main: string;
  abilities: string[];
  topAccardeon: string;
  bottomAccardeon: string;
  checked: boolean;
  selectedAbility: string[];
  onToggle: (checked: boolean) => void;
  onToggleAbility: (ability: string) => void;
}

export interface ButtonFormikProps {
  active?: boolean;
  cancelButton?: () => void;
}