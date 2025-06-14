import { ResumeProvider } from '@entities/resume';
import { CvEditor } from '../features/cv-editor/CvEditor';
import { ResumeRender } from '../features/cv-preview/ResumeRender';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <div className={styles.CVPage}>
        <CvEditor />
        <ResumeRender />
      </div>
    </ResumeProvider>
  );
};

export { App };
