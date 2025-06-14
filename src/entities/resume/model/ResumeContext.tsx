import { createContext, useContext, useState } from 'react';
import type { ResumeDataType } from '../types/ResumeDataType';
import { resumeService } from './ResumeService';
import ResumeContextType from '../types/ContextResumeType';

export const ResumeContext = createContext<null | ResumeContextType>(null);

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [resume, setResume] = useState<ResumeDataType>(
    resumeService.createEmptyResume(),
  );

  return (
    <ResumeContext value={{ resume, setResume }}>{children}</ResumeContext>
  );
};
