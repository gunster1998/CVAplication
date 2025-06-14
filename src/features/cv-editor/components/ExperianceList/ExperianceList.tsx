import { InputUx } from '@shared/ui/Input/InputUx';
import { useForm } from 'react-hook-form';
import styles from './ExperianceList.module.css';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { zodTypeForm } from '@features/cv-editor/services/validationServices';
import { useResume } from '@entities/resume/index';
import { useExperienceManager } from '@features/cv-editor/hooks/useExperienceManager';
interface ResumeProps {
  register: UseFormRegister<zodTypeForm>;
  errors: FieldErrors<zodTypeForm>;
}

const ExperienceList: React.FC<ResumeProps> = ({ register, errors }) => {
  const { list, updateFieldExperience, deleteExperience } =
    useExperienceManager();
  const experience = list;

  const experienceList = experience.map((item, index) => (
    <div key={item.id}>
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          value={item.Company}
          data-id={item.id}
          label='Название компании'
          {...register(`Experience.${index}.Company`, {
            onChange: (e) => {
              updateFieldExperience(e);
            },
          })}
          error={errors.Experience?.[index]?.Company?.message}
        />
        <InputUx
          maxLength={15}
          value={item.Role}
          data-id={item.id}
          label='Должность'
          {...register(`Experience.${index}.Role`, {
            onChange: (e) => {
              updateFieldExperience(e);
            },
          })}
          error={errors.Experience?.[index]?.Role?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          value={item.StartDate}
          type='month'
          data-id={item.id}
          label='Дата начала работы'
          {...register(`Experience.${index}.StartDate`, {
            onChange: (e) => {
              updateFieldExperience(e);
            },
          })}
          error={errors.Experience?.[index]?.StartDate?.message}
        />
        <InputUx
          maxLength={15}
          value={item.EndDate}
          type='month'
          data-id={item.id}
          label='Дата окончания работы<'
          {...register(`Experience.${index}.EndDate`, {
            onChange: (e) => {
              updateFieldExperience(e);
            },
          })}
          error={errors.Experience?.[index]?.EndDate?.message}
        />
      </div>
      <div className={styles.teaxtAreaWrapper}>
        <label htmlFor='Description'>Описание</label>
        <textarea
          className={styles.input}
          id='Description'
          value={item.Description}
          onChange={updateFieldExperience}
          name='Description'
          data-id={item.id}
        />
      </div>
      <ButtonUi
        className={styles.deleteButton}
        onClick={deleteExperience}
        data-id={item.id}
      >
        Удалить
      </ButtonUi>
    </div>
  ));
  return <>{experienceList}</>;
};

export default ExperienceList;

//
