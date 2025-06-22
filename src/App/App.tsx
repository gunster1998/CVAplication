import { ResumeProvider } from '@entities/resume';
import { CvEditor } from '../features/cv-editor/CvEditor';
import { CvPreview } from '../features/cv-preview/CvPreview';
import { createContext, useContext, useState } from 'react';
import styles from './App.module.css';
import type ExperienceErrorType from '@app/types/ExperienceErrorType';

const App: React.FC = () => {
  const [ExperienceError, setExperienceError] = useState<ExperienceErrorType>(
    [],
  );

  return (
    <ResumeProvider>
      <div className={styles.CVPage}>
        <CvEditor setExperienceError={setExperienceError} />
        <CvPreview ExperienceError={ExperienceError} />
      </div>
    </ResumeProvider>
  );
};

export { App };
