import { ResumeContext } from './ResumeContext';
import { useContext } from 'react';
import { resumeService } from './ResumeService';
import { ResumeDataType, ExperienceItem } from '../types/ResumeDataType';

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error('Вызван не внутри контекста нужного');
  }

  const { resume, setResume } = ctx;

  return {
    resume,
    actions: {
      updateField: (fieldName: keyof ResumeDataType, value: string) => {
        setResume((prev) => resumeService.updateField(prev, fieldName, value));
      },
      updateImage: (fileImg: string | File) => {
        setResume((prev) => resumeService.updateImage(prev, fileImg));
      },
      updateFieldExperience: (
        experienceId: string,
        fieldName: keyof ExperienceItem,
        value: string,
      ) => {
        setResume((prev) =>
          resumeService.updateFieldExperience(
            prev,
            experienceId,
            fieldName,
            value,
          ),
        );
      },
      deleteExperience: (experienceId: string) => {
        setResume((prev) => resumeService.deleteExperience(prev, experienceId));
      },
      addExperience: () => {
        setResume((prev) => resumeService.addExperience(prev));
      },
    },
  };
};
