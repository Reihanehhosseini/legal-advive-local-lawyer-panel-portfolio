export interface Country {
  id: number;
  title: string;
}

export interface Province {
  id: number;
  title: string;
  countryId: number;
}

export interface City {
  id: number;
  title: string;
  provinceId: number;
}

export interface District {
  id: number;
  title: string;
  cityId: number;
}

export const countries:Country[] = [
  { id: 1, title: "ایران" },
  { id: 2, title: "ترکیه" },
  { id: 3, title: "عمان" },
];

export const provincess: Province[] = [
  { id: 1, title: "تهران", countryId: 1 },
  { id: 2, title: "اصفهان", countryId: 1 },
  { id: 3, title: "یزد", countryId: 1 },

  { id: 4, title: "استانبول", countryId: 2 },
  { id: 5, title: "آنکارا", countryId: 2 },

  { id: 6, title: "مسقط", countryId: 3 },
  { id: 7, title: "ظفار", countryId: 3 },
];

export const cities :City[] = [
  { id: 1, title: "تهران", provinceId: 1 },
  { id: 2, title: "ری", provinceId: 1 },
  { id: 3, title: "اصفهان", provinceId: 2 },
  { id: 4, title: "یزد", provinceId: 3 },

  { id: 5, title: "استانبول", provinceId: 4 },
  { id: 6, title: "بشیکتاش", provinceId: 4 },

  { id: 7, title: "آنکارا", provinceId: 5 },

  { id: 8, title: "مسقط", provinceId: 6 },

  { id: 9, title: "صلاله", provinceId: 6 },
];

export const districts: District[] = [
  { id: 1, title: "نیاوران", cityId: 1 },
  { id: 2, title: "دولت آباد", cityId: 2 },
  { id: 3, title: "چهارباغ بالا", cityId: 3 },
  { id: 4, title: "شریعتی", cityId: 4 },
  { id: 5, title: "لونت", cityId: 5 },
  { id: 6, title: "اور تاکوی", cityId: 6 },
  { id: 7, title: "چانکایا", cityId: 7 },
  { id: 8, title: "القرم", cityId: 8 },
  { id: 9, title: "الحافه", cityId: 9 },
];
