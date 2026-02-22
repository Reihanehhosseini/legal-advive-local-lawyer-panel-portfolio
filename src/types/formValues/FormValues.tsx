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

export interface LanguagesValues {
  languages: {
    language: string;
    level: string;
  }[];
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
