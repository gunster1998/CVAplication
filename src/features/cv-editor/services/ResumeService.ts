import type { ResumeDataType, ExperienceItem } from '@entities/resume';

export const resumeService = {
  updateField(
    resume: ResumeDataType,
    fieldName: keyof ResumeDataType,
    value: string,
  ): ResumeDataType {
    return { ...resume, [fieldName]: value };
  },

  updateImage(resume: ResumeDataType, fileImg: string | File): ResumeDataType {
    return {
      ...resume,
      img: typeof fileImg !== 'string' ? URL.createObjectURL(fileImg) : fileImg,
    };
  },

  updateFieldExperience(
    resume: ResumeDataType,
    experienceId: string,
    fieldName: keyof ExperienceItem,
    value: string,
  ): ResumeDataType {
    return {
      ...resume,
      Experience: resume.Experience.map((element) =>
        element.id === experienceId
          ? { ...element, [fieldName]: value }
          : element,
      ),
    };
  },

  deleteExperience(
    resume: ResumeDataType,
    experienceId: string,
  ): ResumeDataType {
    return {
      ...resume,
      Experience: resume.Experience.filter((experience) => {
        return experience.id !== experienceId;
      }),
    };
  },

  addExperience(resume: ResumeDataType): ResumeDataType {
    return {
      ...resume,
      Experience: [
        ...resume.Experience,
        {
          id: crypto.randomUUID(),
          Company: '',
          Role: '',
          StartDate: '',
          EndDate: '',
          Description: '',
        },
      ],
    };
  },

  createEmptyResume(): ResumeDataType {
    return {
      img: undefined,
      FirstName: 'Константин',
      LastName: 'Дрягин',
      Profession: 'FronteEnd разработчик',
      City: 'Москва',
      Country: 'Россия',
      PostalCode: '612960',
      Phone: '+79991001741',
      Email: 'gunster98@gmail.com',
      Experience: [],
    };
  },
};
