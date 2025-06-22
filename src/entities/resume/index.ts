// хук с м етодами
export { useResume } from '../../features/cv-editor/hooks/useResume';

//состояние && контекст
export { ResumeProvider, ResumeContext } from './service/ResumeContext';

export { useResumeContext } from './service/useResumeContext';

//типа

export type { ResumeDataType, ExperienceItem } from './types/ResumeDataType';

export * from '../../features/cv-editor/services/ResumeService';
