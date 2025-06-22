import avatar from '@assets/img/avatar.jpg';
import styles from './CvPreview.module.css';
import iconEmail from '@assets/icon/mail.png';
import iconAdress from '@assets/icon/adress.png';
import iconPhone from '@assets/icon/chat.png';
import { useResume } from '@entities/resume';
import { useEffect } from 'react';
import propsCvPrevies from './types/propsCvPreview';

const CvPreview: React.FC<propsCvPrevies> = ({ ExperienceError }) => {
  const { resume } = useResume();

  useEffect(() => {
    console.log('Ошибки опыта обновлены:', ExperienceError);
  }, [ExperienceError]);

  const renderExperiance = resume.Experience.map((job, index) =>
    ExperienceError[index] === undefined ||
    (ExperienceError[index] &&
      Object.keys(ExperienceError[index]).length === 0) ? (
      <div key={job.id}>
        <div className={styles.ExperianceDate}>
          <p>Название компании: {job.Company}</p>
          <p>Должность: {job.Role}</p>
          <p className={styles.ExperianceDateStart}>
            Дата начала работы: {job.StartDate}
          </p>
          <p className={styles.ExperianceDateEnd}>
            Дата окончания работы: {job.EndDate}
          </p>
          <p>Описание: {job.Description}</p>
        </div>
      </div>
    ) : null,
  );
  return (
    <div className={styles.resumeRender}>
      <div className={styles.resumeRenderA4}>
        <div className={styles.resumeRenderA4Left}>
          <img
            className={styles.avatar}
            style={{ width: '150px', height: '150px' }}
            src={resume.img || avatar}
            alt=''
          />
        </div>
        <div className={styles.resumeRenderA4Right}>
          <div className={styles.A4RightTop}>
            <div className={styles.A4RightTopName}>
              <p className={styles.A4RightTopNameText}>
                {resume.FirstName} {resume.LastName}{' '}
              </p>
            </div>
            <div className={styles.A4RightProfession}>
              <p>{resume.Profession}</p>
            </div>
            <div className={styles.A4RightEmailandAdress}>
              <div className={styles.A4RightEmail}>
                <img className={styles.A4RightImg} src={iconEmail} alt='' />{' '}
                <p className={styles.A4RightEmailText}>{resume.Email}</p>
              </div>
              <div className={styles.A4RightAdress}>
                <img className={styles.A4RightImg} src={iconAdress} alt='' />
                {resume.Country} Г. {resume.City}
              </div>
            </div>
            <div className={styles.A4RightPhone}>
              <img className={styles.A4RightImg} src={iconPhone} alt='' />
              {resume.Phone}
            </div>
          </div>
          <div className={styles.A4RightMidle}>
            <div className={styles.A4RightMidleText}>
              <p>ПРОФЕССИОНАЛЬНЫЙ</p>
              <p>ОПЫТ</p>
            </div>
            <div className={styles.A4RightMidleExperience}>
              {renderExperiance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CvPreview };
