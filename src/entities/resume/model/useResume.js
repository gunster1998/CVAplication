import { ResumeContext } from './ResumeContext';
import { useContext } from 'react';
import { resumeService } from './ResumeService';
export const useResume = () => {
    const ctx = useContext(ResumeContext);
    if (!ctx) {
        throw new Error('Вызван не внутри контекста нужного');
    }
    const { resume, setResume } = ctx;
    return {
        resume,
        actions: {
            updateField: (fieldName, value) => {
                setResume((prev) => resumeService.updateField(prev, fieldName, value));
            },
            updateImage: (fileImg) => {
                setResume((prev) => resumeService.updateImage(prev, fileImg));
            },
            updateFieldExperience: (experienceId, fieldName, value) => {
                setResume((prev) => resumeService.updateFieldExperience(prev, experienceId, fieldName, value));
            },
            deleteExperience: (experienceId) => {
                setResume((prev) => resumeService.deleteExperience(prev, experienceId));
            },
            addExperience: () => {
                setResume((prev) => resumeService.addExperience(prev));
            },
        },
    };
};
