import { useResume, ExperienceItem } from '@entities/resume';
import type { ExperienceErrorType } from '@app/types/ExperienceErrorType';

export const useExperienceManager = () => {
  const { resume, actions } = useResume();

  const updateFieldExperience = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
  };

  const deleteExperience: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const idElement = target.dataset.id;

    if (!idElement) return;
    actions.deleteExperience(idElement);
  };

  const addExperience = (
    setExperienceError: React.Dispatch<
      React.SetStateAction<ExperienceErrorType>
    >,
  ) => {
    if (resume.Experience.length > 1) return;
    actions.addExperience();
    setExperienceError((prev) => [
      ...prev,
      {
        type: 'manual',
        message: 'Ошибка, что бы рендер в начале не сработал',
      },
    ]);
  };

  return {
    list: resume.Experience,
    updateFieldExperience,
    deleteExperience,
    addExperience,
  };
};
