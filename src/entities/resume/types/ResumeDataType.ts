interface ExperienceItem {
  id: string;
  Company: string;
  Role: string;
  StartDate: string;
  EndDate: string;
  Description: string;
}

type ExperienceErrorItem = unknown;

interface ResumeDataType {
  img?: string | undefined;
  FirstName: string;
  LastName: string;
  Profession: string;
  City: string;
  Country: string;
  PostalCode: string;
  Phone: string;
  Email: string;
  Experience: ExperienceItem[];
}

export { ExperienceItem, ResumeDataType };
