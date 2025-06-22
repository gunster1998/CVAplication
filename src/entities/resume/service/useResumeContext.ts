import { ResumeContext } from '@/entities/resume';
import { useContext } from 'react';
export const useResumeContext = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      'useResumeContext должен использоваться только внутри ResumeProvider',
    );
  }
  return context;
};
