import { useResume, ExperienceItem } from '@entities/resume';
import { error } from 'console';
import type { ResumeDataType } from '@entities/resume';
import { FieldErrors } from 'react-hook-form';

export const useExperienceManager = () => {
  const { resume, actions } = useResume();

  const updateFieldExperience = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    errors: unknown[],
  ) => {
    const { name, value } = e.target;
    if (!e.target.dataset.id) return;
    const idElement = e.target.dataset.id;
    const nameRight = (fieldName: string) => {
      const result = fieldName.split('.');
      return result[result.length - 1];
    };
    const fieldName = nameRight(name) as keyof ExperienceItem;
    actions.updateFieldExperience(idElement, fieldName, value);
    // actions.syncedExperianceError(errors ?? []);
  };

  const deleteExperience: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const idElement = target.dataset.id;

    if (!idElement) return;
    actions.deleteExperience(idElement);
  };

  const addExperience = (errors: unknown[]) => {
    if (resume.Experience.length > 1) return;
    actions.addExperience();

    // actions.syncedExperianceError(errors);
  };

  const syncedExperianceErrorForm = (errors: unknown[]) => {
    actions.syncedExperianceError(errors ?? []);
  };

  return {
    list: resume.Experience,
    updateFieldExperience,
    deleteExperience,
    addExperience,
    syncedExperianceErrorForm,
  };
};
