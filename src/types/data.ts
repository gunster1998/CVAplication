interface ExperienceItem {
  id: string;
  Company: string;
  Role: string;
  StartDate: string;
  EndDate?:string;
  Description?: string;
}

export interface resumDataType {
  img?: string | File;
  FirstName: string;
  LastName: string;
  Profession: string;
  City: string;
  Counrty: string;
  PostalCode: number;
  Phone: string;
  Email: string;
  Experience: ExperienceItem[];
}
