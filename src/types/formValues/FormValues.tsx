export interface EducationValue {
  University: string;
  Educationalevel: string;
  EducationField: string;
  AcademicYear: string;
  LastAcademicYear: string;
  isStudying: boolean;
  isLastDegree: boolean;
  isPublic: boolean;
  profileImage: null | File;

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
export interface workPlaceValue {
  country: string;
  provincess: string;
  city: string;
  district: string;
  workPlaceLocation: string;
  postalCode: string;
  location: string;
}

export interface workHistoryValue {
  job:string;
  institution: string;
  jobPosition: string;
  jobYear: string;
  lastJobYear: string;
  isbusy: boolean;
  isPublic: boolean;

}
export interface supportValue {
  unit: string;
  Priority:string;
  RelatedTo: string;
  subject:string;
  messages:string;
  attachment:File | null;
}