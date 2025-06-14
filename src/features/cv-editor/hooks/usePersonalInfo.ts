import { useResume } from '@entities/resume';

export const userPersonalInfo = () => {
  const { resume, actions } = useResume();

  const onChange = (field: keyof typeof resume, value: string) => {
    actions.updateField(field, value);
  };

  return {
    data: {
      FirstName: resume.FirstName,
      LastName: resume.LastName,
      Profession: resume.Profession,
      City: resume.City,
      Country: resume.Country,
      PostalCode: resume.PostalCode,
      Phone: resume.Phone,
      Email: resume.Email,
    },
    onChange,
  };
};
