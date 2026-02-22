export interface EducationValue {
  University: string;
  Educationalevel: string;
  EducationField: string;
  AcademicYear: string;
  LastAcademicYear: string;
  isStudying: boolean;
  isLastDegree: boolean;
  isPublic: boolean;
  profileImage: null;
}

export interface nationalCodeValues {
  nationalCode: string;
  AttorneysLicense: string;
  AttorneysLicenseNumber: string;
  JurisdictionCity: string;
  AddressPage: string;
}

export interface languageValue {
  languages: {
    language: string;
    level: string;
  }[];
}
export interface WorkSkillValue {
  mainAbility: {
    id: number;
    title: string;
    ability: string[];
  }[];
  subAbility: {
    id: number;
    title: string;
    ability: string[];
  }[];
  accepted: boolean;
}
export interface personalValues {
  name: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  profileAddress: string;
  description: string;
  profileImage: any;
}
export interface MainAreasCardProps {
  id: number;
  title: string;
  abilities: string[];
  main: string;
  topAccardeon: string;
  bottomAccardeon: string;
}