import type { resumDataType } from '../types/data';
import { useForm } from "react-hook-form"
import avatar from '../assets/img/avatar.jpg';
import styles from './CvMaker.module.css';

interface CvMakerProps {
  resum: resumDataType;
  setResum: React.Dispatch<React.SetStateAction<resumDataType>>;
}

const CvMaker: React.FC<CvMakerProps> = ({ resum, setResum }) => {

  const {register, handleSubmit,formState: {errors},} = useForm<resumDataType>({
    mode: 'onChange',
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    setResum({ ...resum, [name]: e.target.value });
  };

  const onSubmit = (data: resumDataType) => {
    console.log("Данные проверены", data)
   };

  const handleImageChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return

    setResum((prev) => ({
        ...prev,
        img: URL.createObjectURL(file),
    }));
  }

    const handleChangeExperiance: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value} = e.target;
    const idElement = e.target.dataset.id;
    const nameRight = (fieldName: string) => {
      const result = fieldName.split('.')
      return result[result.length - 1]
    }

    const fieldKey = nameRight(name)

    const updateExperiance = resum.Experience.map((job)=> {
      if (job.id === idElement) {
        return {...job,
          [fieldKey]: value
        }
      }
        return job;
    })
    setResum({ ...resum,
       Experience: updateExperiance});
  };

  const handleDeleteExperiance: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const idElement = target.dataset.id;

    const updateExperiance = resum.Experience.filter((job)=> {
      if (job.id === idElement) {
        return false
      }
        return true;
    })
    setResum({ ...resum,
       Experience: updateExperiance});
  }

  const handleNewExperiance: React.MouseEventHandler<HTMLButtonElement | HTMLTextAreaElement> = () => {
    if (resum.Experience.length < 3) {
      setResum((prev)=> ({
        ...prev,
        Experience: [...prev.Experience,
          {
              id: crypto.randomUUID(),
              Company: "",
              Role: "",
              StartDate: "",
              EndDate: "",
              Description: "",
          }
        ]
      }))
    }
  }

  const ExperianceList = resum.Experience.map ((item,index)=> (
            <div key={item.id}>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor={`Company-${item.id}`}>Название компании {errors.Experience?.[index]?.Company &&
                 <span className={styles.error}>
                  - {errors.Experience?.[index].Company.message}
                  </span>}
                  </label>
                <input
                    {...register(`Experience.${index}.Company`, {
                  required: 'Название компании обязательно',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                  className={styles.input}
                  id={`Company-${item.id}`}
                  onChange={(e)=> {
                    handleChangeExperiance(e);
                    register(`Experience.${index}.Company`).onChange(e)

                  }}
                  type="text"
                  data-id= {item.id}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="Role">Должность {errors.Experience?.[index]?.Role &&
                 <span className={styles.error}>
                  - {errors.Experience?.[index].Role.message}
                  </span>}</label>
                <input
                    {...register(`Experience.${index}.Role`, {
                  required: 'Должность обязательна',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                  className={styles.input}
                  id="Role"
                  value={item.Role}
                  onChange={(e)=> {
                    handleChangeExperiance(e);
                    register(`Experience.${index}.Role`).onChange(e)
                  }}
                  type="text"
                  data-id= {item.id}
                />
              </div>
            </div>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor="StartDate">Дата начала работы</label>
                <input
                  className={styles.input}
                  id="StartDate"
                  value={item.StartDate}
                  onChange={handleChangeExperiance}
                  type="month"
                  name="StartDate"
                  data-id= {item.id}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="EndDate">Дата окончания работы</label>
                <input
                  className={styles.input}
                  id="EndDate"
                  value={item.EndDate}
                  onChange={handleChangeExperiance}
                  type="month"
                  name="EndDate"
                  data-id= {item.id}
                />
              </div>
            </div>
                          <div className={styles.teaxtAreaWrapper}>
                <label htmlFor="Description">Описание</label>
                <textarea
                  className={styles.input}
                  id="Description"
                  value={item.Description}
                  onChange={handleChangeExperiance}
                  name="Description"
                  data-id= {item.id}
                />
              </div>
              <button
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    background: 'red',
                    color: 'white',
                    padding: '15px 20px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'Roboto',
                    border: '0px',
                    marginLeft: 'calc(10% - 10px)',
                  }}
                  onClick={handleDeleteExperiance}
                  data-id= {item.id}
                >
                  Удалить
                </button>
            </div>
            
  ))

  return (
    <>
      <div className={styles.CVMaker}>
        <div className="CVMaker__person-details">
          <h2 className={styles.CVMaker__personText}>Личные данные</h2>
          <form
            className={styles.SVMaker__personForm}
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.photoResume}>
              <label
                htmlFor="inputUploadAvatar"
                className={styles.inputUploadAvatar}
              >
                <img
                  className={styles.avatar}
                  style={{ width: '200px',
                    height:'200px',
                   }}
                  src={resum.img || avatar}
                  alt=""
                />
                <div
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    background: '#43b3a4',
                    color: 'white',
                    padding: '15px 20px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'Roboto',
                  }}
                >
                  Загрузить фото
                </div>
                <input
                  style={{ display: 'none' }}
                  id="inputUploadAvatar"
                  type="file"
                  onChange={handleImageChange} 
                />
              </label>
            </div>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor="firstName">Имя {errors.FirstName && <span className={styles.error}>- {errors.FirstName.message}</span>}</label>

                <input
                {...register('FirstName', {
                  required: 'Имя обязательно',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                  className={styles.input}
                  id="firstName"
                  value={resum.FirstName}
                  onChange={(e) => {
                    handleChange(e);
                    register('FirstName').onChange(e);
                  }}
                  type="text"
                  name="FirstName"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="lastName">Фамилия {errors.LastName && <span className={styles.error}>- {errors.LastName.message}</span>}</label>
                <input
                    {...register('LastName', {
                  required: 'Фамилия обязательна',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                  className={styles.input}
                  id="lastName"
                  value={resum.LastName}
                  onChange={(e)=> {
                    handleChange(e);
                    register('LastName').onChange(e);
                  }}
                  type="text"
                  name="LastName"
                />
              </div>
            </div>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor="Profession">Профессия {errors.Profession && <span className={styles.error}>- {errors.Profession.message}</span>}</label>
                <input
                    {...register('Profession', {
                  required: 'Профессия обязательна',
                  maxLength: {
                    value: 20,
                    message: 'Максимум 20 символов'
                  }
                })}
                  className={styles.input}
                  id="Profession"
                  value={resum.Profession}
                  onChange={(e)=> {
                    handleChange(e);
                    register('Profession').onChange(e);
                  }}
                  type="text"
                  name="Profession"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="City">Город  {errors.City && <span className={styles.error}>- {errors.City.message}</span>}</label>
                <input
                  {...register('City', {
                  required: 'Город обязателен',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                  className={styles.input}
                  id="City"
                  value={resum.City}
               onChange={(e)=> {
                    handleChange(e);
                    register('City').onChange(e);
                  }}
                  type="text"
                  name="City"

                />
              </div>
            </div>
            <div className={styles.inputSeparator}>
            <div className={styles.inputWrapper}>
              <label htmlFor="Counrty">Страна {errors.Counrty && <span className={styles.error}>- {errors.Counrty.message}</span>}</label>
              <input

                  {...register('Counrty', {
                  required: 'Страна обязательна',
                  maxLength: {
                    value: 14,
                    message: 'Максимум 14 символов'
                  }
                })}
                className={styles.input}
                id="Counrty"
                value={resum.Counrty}
               onChange={(e)=> {
                    handleChange(e);
                    register('Counrty').onChange(e);
                  }}
                type="text"
                name="Counrty"
              />
            </div>
            <div className={styles.inputWrapper}>
            <label htmlFor="PostalCode">Индекс {errors.PostalCode && <span className={styles.error}>- {errors.PostalCode.message}</span>}</label>
            <input
                {...register('PostalCode', {
                  required: 'Индекс обязателен',
                  maxLength: {
                    value: 6,
                    message: 'Максимум 6 символов'
                  }
                })}
              className={styles.input}
              id="PostalCode"
              value={resum.PostalCode}
               onChange={(e)=> {
                    handleChange(e);
                    register('PostalCode').onChange(e);
                  }}
              type="text"
              name="PostalCode"
            />
            </div>
            </div>
                        <div className={styles.inputSeparator}>
                        <div className={styles.inputWrapper}>
            <label htmlFor="Phone">Телефон {errors.Phone && <span className={styles.error}>- {errors.Phone.message}</span>}</label>
            <input
                {...register('Phone', {
                  required: 'Телефон обязателен',
                  pattern: {
                    value: /^\+?[0-9\s\-()]{10,15}$/,
                    message: 'Некорректный формат телефона'
                  },
                  
                })}
              className={styles.input}
              id="Phone"
              value={resum.Phone}
               onChange={(e)=> {
                    handleChange(e);
                    register('Phone').onChange(e);
                  }}
              type="text"
              name="Phone"
            />
            </div>
            <div className={styles.inputWrapper}>
            <label htmlFor="Email">Email {errors.Email && <span className={styles.error}>- {errors.Email.message}</span>}</label>
            <input
                {...register('Email', {
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Некорректный формат email'
                  },
                  
                })}
              className={styles.input}
              id="Email"
              value={resum.Email}
               onChange={(e)=> {
                    handleChange(e);
                    register('Email').onChange(e);
                  }}
              type="text"
              name="Email"
            />
            </div>
            </div>

            <h2 className={styles.CVMaker__personText}>История трудоустройства</h2>
            <div className={styles.CVMaker__ExperianceList}>
              {ExperianceList}
            </div>
              <button
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    background: '#43b3a4',
                    color: 'white',
                    padding: '15px 20px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'Roboto',
                    border: '0px',
                    marginLeft: 'calc(10% - 10px)',
                  }}
                  onClick={handleNewExperiance}
                >
                  Добавить место работы
                </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { CvMaker };
