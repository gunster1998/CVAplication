import type { ResumeDataType } from '@entities/resume/types/ResumeDataType';
import { useForm } from 'react-hook-form';
import styles from './CvEditor.module.css';
import { ImageUpload } from './components/ImageUpload/ImageUpload';
import PersonalInfoSection from './components/PersonalInfoSection/PersonalInfoSection';
import ExperianceList from './components/ExperianceList/ExperienceList';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema, zodTypeForm } from './services/validationServices';
import { useExperienceManager } from '@features/cv-editor/hooks/useExperienceManager';
import { useEffect } from 'react';

const CvEditor: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeDataType>({
    mode: 'onChange',
    resolver: zodResolver(resumeSchema),
  });

  const onSubmit = (data: ResumeDataType) => {
    console.log('Данные проверены', data);
  };

  const { addExperience, syncedExperianceErrorForm } = useExperienceManager();

  useEffect(() => {
    console.log(
      'Объект с ошибками обновился на сведитор - ',
      errors.Experience,
    );
    syncedExperianceErrorForm((errors.Experience as unknown[]) ?? []);
  }, [errors.Experience]);

  return (
    <>
      <div className={styles.CVMaker}>
        <div className='CVMaker__person-details'>
          <h2 className={styles.CVMaker__personText}>Личные данные</h2>
          <form
            className={styles.SVMaker__personForm}
            action=''
            onSubmit={handleSubmit(onSubmit)}
          >
            <ImageUpload />

            <PersonalInfoSection register={register} errors={errors} />

            <h2 className={styles.CVMaker__personText}>
              История трудоустройства
            </h2>

            <ExperianceList register={register} errors={errors} />

            <ButtonUi
              type='submit'
              onClick={() =>
                addExperience((errors.Experience as unknown[]) ?? [])
              }
            >
              Добавить место работы
            </ButtonUi>
          </form>
        </div>
      </div>
    </>
  );
};

export { CvEditor };
