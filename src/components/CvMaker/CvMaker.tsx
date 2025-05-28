import type { resumDataType } from '../../types/data';
import { useForm } from 'react-hook-form';
import styles from './CvMaker.module.css';
import { ImageUpload } from './ImageUpload/ImageUpload';
import PersonalInfoSection from './PersonalInfoSection/PersonalInfoSection';
import ExperianceList from './ExperianceList/ExperianceList';
import ButtonUi from '../../shared/ui/Button/ButtonUI';

interface CvMakerProps {
  resum: resumDataType;
  setResum: React.Dispatch<React.SetStateAction<resumDataType>>;
}

const CvMaker: React.FC<CvMakerProps> = ({ resum, setResum }) => {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm<resumDataType>({
    mode: 'onChange',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    setResum({ ...resum, [name]: e.target.value });
  };

  const onSubmit = (data: resumDataType) => {
    console.log('Данные проверены', data);
  };

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setResum((prev) => ({
      ...prev,
      img: URL.createObjectURL(file),
    }));
  };

  const handleChangeExperience: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    const idElement = e.target.dataset.id;
    const nameRight = (fieldName: string) => {
      const result = fieldName.split('.');
      return result[result.length - 1];
    };

    const fieldKey = nameRight(name);

    const updateExperiance = resum.Experience.map((job) => {
      if (job.id === idElement) {
        return { ...job, [fieldKey]: value };
      }
      return job;
    });
    setResum({ ...resum, Experience: updateExperiance });
  };

  const handleDeleteExperience: React.MouseEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    const target = e.target as HTMLButtonElement;
    const idElement = target.dataset.id;

    const updateExperiance = resum.Experience.filter((job) => {
      if (job.id === idElement) {
        return false;
      }
      return true;
    });
    setResum({ ...resum, Experience: updateExperiance });
  };

  const handleNewExperiance: React.MouseEventHandler<
    HTMLButtonElement | HTMLTextAreaElement
  > = () => {
    if (resum.Experience.length < 3) {
      setResum((prev) => ({
        ...prev,
        Experience: [
          ...prev.Experience,
          {
            id: crypto.randomUUID(),
            Company: '',
            Role: '',
            StartDate: '',
            EndDate: '',
            Description: '',
          },
        ],
      }));
    }
  };

  // const ExperianceList = resum.Experience.map((item, index) => (
  //   <div key={item.id}>
  //     <div className={styles.inputSeparator}>
  //       <div className={styles.inputWrapper}>
  //         <label htmlFor={`Company-${item.id}`}>
  //           Название компании{' '}
  //           {errors.Experience?.[index]?.Company && (
  //             <span className={styles.error}>
  //               - {errors.Experience?.[index].Company.message}
  //             </span>
  //           )}
  //         </label>
  //         <input
  //           {...register(`Experience.${index}.Company`, {
  //             required: 'Название компании обязательно',
  //             maxLength: {
  //               value: 14,
  //               message: 'Максимум 14 символов',
  //             },
  //           })}
  //           className={styles.input}
  //           id={`Company-${item.id}`}
  //           onChange={(e) => {
  //             handleChangeExperiance(e);
  //             register(`Experience.${index}.Company`).onChange(e);
  //           }}
  //           type='text'
  //           data-id={item.id}
  //         />
  //       </div>
  //       <div className={styles.inputWrapper}>
  //         <label htmlFor='Role'>
  //           Должность{' '}
  //           {errors.Experience?.[index]?.Role && (
  //             <span className={styles.error}>
  //               - {errors.Experience?.[index].Role.message}
  //             </span>
  //           )}
  //         </label>
  //         <input
  //           {...register(`Experience.${index}.Role`, {
  //             required: 'Должность обязательна',
  //             maxLength: {
  //               value: 14,
  //               message: 'Максимум 14 символов',
  //             },
  //           })}
  //           className={styles.input}
  //           id='Role'
  //           value={item.Role}
  //           onChange={(e) => {
  //             handleChangeExperiance(e);
  //             register(`Experience.${index}.Role`).onChange(e);
  //           }}
  //           type='text'
  //           data-id={item.id}
  //         />
  //       </div>
  //     </div>
  //     <div className={styles.inputSeparator}>
  //       <div className={styles.inputWrapper}>
  //         <label htmlFor='StartDate'>Дата начала работы</label>
  //         <input
  //           className={styles.input}
  //           id='StartDate'
  //           value={item.StartDate}
  //           onChange={handleChangeExperiance}
  //           type='month'
  //           name='StartDate'
  //           data-id={item.id}
  //         />
  //       </div>
  //       <div className={styles.inputWrapper}>
  //         <label htmlFor='EndDate'>Дата окончания работы</label>
  //         <input
  //           className={styles.input}
  //           id='EndDate'
  //           value={item.EndDate}
  //           onChange={handleChangeExperiance}
  //           type='month'
  //           name='EndDate'
  //           data-id={item.id}
  //         />
  //       </div>
  //     </div>
  //     <div className={styles.teaxtAreaWrapper}>
  //       <label htmlFor='Description'>Описание</label>
  //       <textarea
  //         className={styles.input}
  //         id='Description'
  //         value={item.Description}
  //         onChange={handleChangeExperiance}
  //         name='Description'
  //         data-id={item.id}
  //       />
  //     </div>
  //     <button
  //       style={{
  //         marginTop: '20px',
  //         marginBottom: '20px',
  //         background: 'red',
  //         color: 'white',
  //         padding: '15px 20px',
  //         borderRadius: '10px',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         fontFamily: 'Roboto',
  //         border: '0px',
  //         marginLeft: 'calc(10% - 10px)',
  //       }}
  //       onClick={handleDeleteExperiance}
  //       data-id={item.id}
  //     >
  //       Удалить
  //     </button>
  //   </div>
  // ));

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
            <ImageUpload
              img={resum.img}
              handleImageChange={handleImageChange}
            />

            <PersonalInfoSection resum={resum} handleChange={handleChange} />

            <h2 className={styles.CVMaker__personText}>
              История трудоустройства
            </h2>
            <div className={styles.CVMaker__ExperianceList}>
              <ExperianceList
                experience={resum.Experience}
                handleChangeExperience={handleChangeExperience}
                handleDeleteExperience={handleDeleteExperience}
              />
            </div>
            <ButtonUi variant='default' onClick={handleNewExperiance}>
              Добавить место работы
            </ButtonUi>
          </form>
        </div>
      </div>
    </>
  );
};

export { CvMaker };
