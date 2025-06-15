import { useResume } from '@entities/resume';
export const useExperienceManager = () => {
    const { resume, actions } = useResume();
    const updateFieldExperience = (e) => {
        const { name, value } = e.target;
        if (!e.target.dataset.id)
            return;
        const idElement = e.target.dataset.id;
        const nameRight = (fieldName) => {
            const result = fieldName.split('.');
            return result[result.length - 1];
        };
        const fieldName = nameRight(name);
        actions.updateFieldExperience(idElement, fieldName, value);
    };
    const deleteExperience = (e) => {
        const target = e.target;
        const idElement = target.dataset.id;
        if (!idElement)
            return;
        actions.deleteExperience(idElement);
    };
    const addExperience = () => {
        if (resume.Experience.length > 1)
            return;
        actions.addExperience();
    };
    return {
        list: resume.Experience,
        updateFieldExperience,
        deleteExperience,
        addExperience,
    };
};
