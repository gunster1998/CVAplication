import { useState } from 'react';
import type { resumDataType } from '../types/data';
import { CvMaker } from './CvMaker/CvMaker';
import { ResumeRender } from './ResumeRender/ResumeRender';
import styles from './App.module.css';

const App: React.FC = () => {
  const [resum, setResum] = useState<resumDataType>({
    img: undefined,
    FirstName: 'Константин',
    LastName: 'Дрягин',
    Profession: 'FronteEnd разработчик',
    City: 'Москва',
    Counrty: 'Россия',
    PostalCode: 612950,
    Phone: '+79991001741',
    Email: 'gunster98@gmail.com',
    Experience: [],
  });
  return (
    <div className={styles.CVPage}>
      <CvMaker resum={resum} setResum={setResum} />
      <ResumeRender resum={resum} />
    </div>
  );
};

export { App };
