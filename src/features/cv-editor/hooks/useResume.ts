import { resumeService } from '../services/ResumeService';
import { ResumeDataType, ExperienceItem } from '@entities/resume';
import { useResumeContext } from '@/entities/resume';

export const useResume = () => {
  const { resume, setResume } = useResumeContext();

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
