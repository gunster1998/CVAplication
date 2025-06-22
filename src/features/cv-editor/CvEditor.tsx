import type { ResumeDataType } from '@entities/resume';
import { useForm, FieldError } from 'react-hook-form';
import styles from './CvEditor.module.css';
import { ImageUpload } from '@componentsCvEditor/ImageUpload/ImageUpload';
import PersonalInfoSection from '@componentsCvEditor/PersonalInfoSection/PersonalInfoSection';
import ExperianceList from '@componentsCvEditor/ExperianceList/ExperienceList';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema } from './model/validationServices';
import { useExperienceManager } from '@features/cv-editor/hooks/useExperienceManager';
import { useEffect } from 'react';
import type propsCvEditor from './types/propsCvEditorType';

const CvEditor: React.FC<propsCvEditor> = ({ setExperienceError }) => {
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

  const { addExperience } = useExperienceManager();

  useEffect(() => {
    console.log(
      'Объект с ошибками обновился на сведитор - ',
      errors.Experience,
    );
    setExperienceError((errors.Experience as FieldError[]) ?? []);
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
              onClick={() => addExperience(setExperienceError)}
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
