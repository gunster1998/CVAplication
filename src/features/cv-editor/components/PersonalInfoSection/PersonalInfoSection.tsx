import styles from './PersonalInfoSection.module.css';
import { InputUx } from '@shared/ui/Input/InputUx';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { zodTypeForm } from '@/features/cv-editor/model/validationServices';
import { userPersonalInfo } from '@features/cv-editor/hooks/usePersonalInfo';

interface ResumeProps {
  register: UseFormRegister<zodTypeForm>;
  errors: FieldErrors<zodTypeForm>;
}

const PersonalInfoSection: React.FC<ResumeProps> = ({ register, errors }) => {
  const { data, onChange } = userPersonalInfo();

  return (
    <>
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          label='Имя'
          {...register('FirstName', {
            maxLength: 5,
            onChange: (e) => {
              onChange('FirstName', e.target.value);
            },
          })}
          error={errors.FirstName?.message}
        />
        <InputUx
          maxLength={15}
          label='Фамилия'
          {...register('LastName', {
            onChange: (e) => {
              onChange('LastName', e.target.value);
            },
          })}
          error={errors.LastName?.message}
        />
      </div>

      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          label='Профессия'
          {...register('Profession', {
            onChange: (e) => {
              onChange('Profession', e.target.value);
            },
          })}
          error={errors.Profession?.message}
        />
        <InputUx
          maxLength={15}
          label='Город'
          {...register('City', {
            onChange: (e) => {
              onChange('City', e.target.value);
            },
          })}
          error={errors.City?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          label='Страна'
          {...register('Country', {
            onChange: (e) => {
              onChange('Country', e.target.value);
            },
          })}
          error={errors.Country?.message}
        />
        <InputUx
          maxLength={6}
          label='Индекс'
          {...register('PostalCode', {
            onChange: (e) => {
              onChange('PostalCode', e.target.value);
            },
          })}
          error={errors.PostalCode?.message}
        />
      </div>
      <div className={styles.inputSeparator}>
        <InputUx
          maxLength={15}
          label='Телефон'
          {...register('Phone', {
            onChange: (e) => {
              onChange('Phone', e.target.value);
            },
          })}
          error={errors.Phone?.message}
        />
        <InputUx
          maxLength={20}
          label='Email'
          {...register('Email', {
            onChange: (e) => {
              onChange('Email', e.target.value);
            },
          })}
          error={errors.Email?.message}
        />
      </div>
    </>
  );
};

export default PersonalInfoSection;
