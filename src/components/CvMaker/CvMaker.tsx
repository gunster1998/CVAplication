import type { resumDataType } from '../../types/data';
import { useForm } from 'react-hook-form';
import styles from './CvMaker.module.css';
import { ImageUpload } from './ImageUpload/ImageUpload';
import PersonalInfoSection from './PersonalInfoSection/PersonalInfoSection';
import ExperianceList from './ExperianceList/ExperianceList';
import ButtonUi from '../../shared/ui/Button/ButtonUi';

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
