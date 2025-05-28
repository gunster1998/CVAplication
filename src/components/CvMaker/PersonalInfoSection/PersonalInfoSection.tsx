import styles from './PersonalInfoSection.module.css';
import type { resumDataType } from '../../../types/data';
import InputUx from '../../../shared/ui/Input/InputUx';
import { useForm } from 'react-hook-form';

interface ResumProps {
  resum: resumDataType;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const PersonalInfoSection: React.FC<ResumProps> = ({ resum, handleChange }) => {
  const {
    register,
    formState: { errors },
  } = useForm<resumDataType>({
    mode: 'onChange',
  });

  return (
    <>
      <div className={styles.inputSeparator}>
        <InputUx
          value={resum.FirstName}
          label='Имя'
          {...register('FirstName', {
            required: 'Имя обязательно',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('FirstName').onChange(e);
            if (!errors.FirstName || resum.FirstName.length === 0) {
              handleChange(e);
            }
          }}
          error={errors.FirstName?.message}
        />
        <InputUx
          value={resum.LastName}
          label='Фамилия'
          {...register('LastName', {
            required: 'Фамилия обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('LastName').onChange(e);
            if (!errors.LastName || resum.LastName.length === 0) {
              handleChange(e);
            }
          }}
          error={errors.LastName?.message}
        />
      </div>

      <div className={styles.inputSeparator}>
        <InputUx
          value={resum.Profession}
          label='Профессия'
          {...register('Profession', {
            required: 'Профессия обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('Profession').onChange(e);
            if (!errors.Profession || resum.Profession.length === 0) {
              handleChange(e);
            }
          }}
          error={errors.Profession?.message}
        />

        <InputUx
          value={resum.City}
          label='Город'
          {...register('City', {
            required: 'Город обязателен',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('City').onChange(e);
            if (!errors.City || resum.City.length === 0) {
              handleChange(e);
            }
          }}
          error={errors.City?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          value={resum.Counrty}
          label='Страна'
          {...register('Counrty', {
            required: 'Страна обязательна',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('Counrty').onChange(e);
            if (!errors.Counrty || resum.Counrty.length === 0) {
              handleChange(e);
            }
          }}
          error={errors.Counrty?.message}
        />
        <InputUx
          value={resum.PostalCode}
          label='Индекс'
          {...register('PostalCode', {
            required: 'Индекс обязателен',
            maxLength: {
              value: 14,
              message: 'Максимум 14 символов',
            },
          })}
          onChange={(e) => {
            register('PostalCode').onChange(e);
            if (
              !errors.PostalCode ||
              resum.PostalCode.toString().length === 0
            ) {
              handleChange(e);
            }
          }}
          error={errors.PostalCode?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          value={resum.Phone}
          maxLength={15}
          label='Телефон'
          {...register('Phone', {
            required: 'Телефон обязателен',
            pattern: {
              value: /^\+?[0-9\s\-()]{10,15}$/,
              message: 'Некорректный формат телефона',
            },
          })}
          onChange={(e) => {
            register('Phone').onChange(e);
            handleChange(e);
          }}
          error={errors.Phone?.message}
        />
        <InputUx
          value={resum.Email}
          maxLength={20}
          label='Email'
          {...register('Email', {
            required: 'Email обязателен',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Некорректный формат email',
            },
          })}
          onChange={(e) => {
            register('Email').onChange(e);
            handleChange(e);
          }}
          error={errors.Email?.message}
        />
      </div>
    </>
  );
};

export default PersonalInfoSection;
