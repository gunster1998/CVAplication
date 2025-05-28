import type { resumDataType } from '../../types/data';
import avatar from '../../assets/img/avatar.jpg';
import styles from './ResumeRender.module.css';
import iconEmail from '../../assets/icon/mail.png';
import iconAdress from '../../assets/icon/adress.png';
import iconPhone from '../../assets/icon/chat.png';

interface resumeProps {
  resum: resumDataType;
}

const ResumeRender: React.FC<resumeProps> = ({ resum }) => {
  const renderExperiance = resum.Experience.map((job) => (
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
        <p>{job.Description}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.resumeRender}>
      <div className={styles.resumeRenderA4}>
        <div className={styles.resumeRenderA4Left}>
          <img
            className={styles.avatar}
            style={{ width: '150px', height: '150px' }}
            src={resum.img || avatar}
            alt=''
          />
        </div>
        <div className={styles.resumeRenderA4Right}>
          <div className={styles.A4RightTop}>
            <div className={styles.A4RightTopName}>
              <p className={styles.A4RightTopNameText}>
                {resum.FirstName} {resum.LastName}{' '}
              </p>
            </div>
            <div className={styles.A4RightProfession}>
              <p>{resum.Profession}</p>
            </div>
            <div className={styles.A4RightEmailandAdress}>
              <div className={styles.A4RightEmail}>
                <img className={styles.A4RightImg} src={iconEmail} alt='' />{' '}
                <p className={styles.A4RightEmailText}>{resum.Email}</p>
              </div>
              <div className={styles.A4RightAdress}>
                <img className={styles.A4RightImg} src={iconAdress} alt='' />
                {resum.Counrty} Г. {resum.City}
              </div>
            </div>
            <div className={styles.A4RightPhone}>
              <img className={styles.A4RightImg} src={iconPhone} alt='' />
              {resum.Phone}
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

export { ResumeRender };
