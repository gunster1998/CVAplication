import { InputUx } from '@shared/ui/Input/InputUx';
import styles from './ExperienceList.module.css';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { zodTypeForm } from '@/features/cv-editor/model/validationServices';
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
    <div className={styles.wrapperExperience} key={item.id}>
      <input
        type='hidden'
        {...register(`Experience.${index}.id`)}
        defaultValue={item.id}
      />
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          value={item.Company}
          data-id={item.id}
          label='Название компании'
          {...register(`Experience.${index}.Company`, {
            onChange: (e) => {
              updateFieldExperience(e, (errors.Experience as unknown[]) ?? []);
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
              updateFieldExperience(e, (errors.Experience as unknown[]) ?? []);
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
              updateFieldExperience(e, (errors.Experience as unknown[]) ?? []);
            },
          })}
          error={errors.Experience?.[index]?.StartDate?.message}
        />
        <InputUx
          maxLength={15}
          value={item.EndDate}
          type='month'
          data-id={item.id}
          label='Дата окончания работы'
          {...register(`Experience.${index}.EndDate`, {
            onChange: (e) => {
              updateFieldExperience(e, (errors.Experience as unknown[]) ?? []);
            },
          })}
          error={errors.Experience?.[index]?.EndDate?.message}
        />
      </div>
      <div className={styles.teaxtAreaWrapper}>
        <label htmlFor='Description'>
          Описание
          {errors.Experience?.[index]?.Description?.message && (
            <span className={styles.error}>
              - {errors.Experience?.[index]?.Description?.message}
            </span>
          )}
        </label>
        <textarea
          className={styles.input}
          id='Description'
          {...register(`Experience.${index}.Description`, {
            onChange: (e) => {
              updateFieldExperience(e, (errors.Experience as unknown[]) ?? []);
            },
          })}
          data-id={item.id}
        ></textarea>
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
  return <div className={styles.wrapperExperience}>{experienceList}</div>;
};

export default ExperienceList;

//
