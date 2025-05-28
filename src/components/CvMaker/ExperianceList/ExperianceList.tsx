import type { resumDataType } from '../../../types/data';
import type { ExperienceItem } from '../../../types/data';
import InputUx from '../../../shared/ui/Input/InputUx';
import { useForm } from 'react-hook-form';
import styles from './ExperianceList.module.css';
import ButtonUi from '../../../shared/ui/Button/ButtonUI';

interface ExperienceProps {
  experience: ExperienceItem[];
  handleChangeExperience: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleDeleteExperience: React.MouseEventHandler<HTMLButtonElement>;
}

const ExperienceList: React.FC<ExperienceProps> = ({
  experience,
  handleChangeExperience,
  handleDeleteExperience,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<resumDataType>({
    mode: 'onChange',
  });

  const experienceList = experience.map((item, index) => (
    <div key={item.id}>
      <div className={styles.inputSeparator}>
        <InputUx
          value={item.Company}
          data-id={item.id}
          label='Название компании'
          {...register(`Experience.${index}.Company`, {
            required: 'Название компании обязательно',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register(`Experience.${index}.Company`).onChange(e);
            if (
              !errors.Experience?.[index]?.Company ||
              experience?.[index].Company.length === 0
            ) {
              handleChangeExperience(e);
            }
          }}
          error={errors.Experience?.[index]?.Company?.message}
        />
        <InputUx
          value={item.Role}
          data-id={item.id}
          label='Должность'
          {...register(`Experience.${index}.Role`, {
            required: 'Должность обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register(`Experience.${index}.Role`).onChange(e);
            if (
              !errors.Experience?.[index]?.Role ||
              experience?.[index].Role.length === 0
            ) {
              handleChangeExperience(e);
            }
          }}
          error={errors.Experience?.[index]?.Role?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          value={item.StartDate}
          type='month'
          data-id={item.id}
          label='Дата начала работы'
          {...register(`Experience.${index}.StartDate`, {
            required: 'Дата обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register(`Experience.${index}.StartDate`).onChange(e);
            if (
              !errors.Experience?.[index]?.StartDate ||
              experience?.[index].StartDate.length === 0
            ) {
              handleChangeExperience(e);
            }
          }}
          error={errors.Experience?.[index]?.StartDate?.message}
        />
        <InputUx
          value={item.EndDate}
          type='month'
          data-id={item.id}
          label='Дата окончания работы<'
          {...register(`Experience.${index}.EndDate`, {
            required: 'Дата обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register(`Experience.${index}.EndDate`).onChange(e);
            if (
              !errors.Experience?.[index]?.EndDate ||
              experience?.[index].EndDate?.length === 0
            ) {
              handleChangeExperience(e);
            }
          }}
          error={errors.Experience?.[index]?.EndDate?.message}
        />
      </div>
      <div className={styles.teaxtAreaWrapper}>
        <label htmlFor='Description'>Описание</label>
        <textarea
          className={styles.input}
          id='Description'
          value={item.Description}
          onChange={handleChangeExperience}
          name='Description'
          data-id={item.id}
        />
      </div>
      <ButtonUi
        className={styles.deleteButton}
        onClick={handleDeleteExperience}
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
