import { ResumeProvider } from '@entities/resume';
import { CvEditor } from '../features/cv-editor/CvEditor';
import { CvPreview } from '../features/cv-preview/CvPreview';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <div className={styles.CVPage}>
        <CvEditor />
        <CvPreview />
      </div>
    </ResumeProvider>
  );
};

export { App };
