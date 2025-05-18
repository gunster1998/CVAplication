import type { resumDataType } from '../types/data';
import avatar from '../assets/img/avatar.jpg';
import styles from './CvMaker.module.css';

interface CvMakerProps {
  resum: resumDataType;
  setResum: React.Dispatch<React.SetStateAction<resumDataType>>;
}

const CvMaker: React.FC<CvMakerProps> = ({ resum, setResum }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setResum({ ...resum, [name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
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

    const updateExperiance = resum.Experience.map((job)=> {
      if (job.id === idElement) {
        return {...job,
          [name]: value
        }
      }
        return job;
    })
    setResum({ ...resum,
       Experience: updateExperiance});
  };

  const handleDeleteExperiance: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const idElement = e.target.dataset.id;

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

  const ExperianceList = resum.Experience.map ((item)=> (
            <div key={item.id}>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor="companyName">Название компании</label>
                <input
                  className={styles.input}
                  id="companyName"
                  value={item.Company}
                  onChange={handleChangeExperiance}
                  type="text"
                  name="Company"
                  data-id= {item.id}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="Role">Должность</label>
                <input
                  className={styles.input}
                  id="Role"
                  value={item.Role}
                  onChange={handleChangeExperiance}
                  type="text"
                  name="Role"
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
                    marginLeft: '10%',
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
            onSubmit={handleSubmit}
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
                <label htmlFor="firstName">Имя</label>
                <input
                  className={styles.input}
                  id="firstName"
                  value={resum.FirstName}
                  onChange={handleChange}
                  type="text"
                  name="FirstName"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="lastName">Фамилия</label>
                <input
                  className={styles.input}
                  id="lastName"
                  value={resum.LastName}
                  onChange={handleChange}
                  type="text"
                  name="LastName"
                />
              </div>
            </div>
            <div className={styles.inputSeparator}>
              <div className={styles.inputWrapper}>
                <label htmlFor="Profession">Профессия</label>
                <input
                  className={styles.input}
                  id="Profession"
                  value={resum.Profession}
                  onChange={handleChange}
                  type="text"
                  name="Profession"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="City">Город</label>
                <input
                  className={styles.input}
                  id="City"
                  value={resum.City}
                  onChange={handleChange}
                  type="text"
                  name="City"
                />
              </div>
            </div>
            <div className={styles.inputSeparator}>
            <div className={styles.inputWrapper}>
              <label htmlFor="Counrty">Страна</label>
              <input
                className={styles.input}
                id="Counrty"
                value={resum.Counrty}
                onChange={handleChange}
                type="text"
                name="Counrty"
              />
            </div>
            <div className={styles.inputWrapper}>
            <label htmlFor="PostalCode">Индекс</label>
            <input
              className={styles.input}
              id="PostalCode"
              value={resum.PostalCode}
              onChange={handleChange}
              type="text"
              name="PostalCode"
            />
            </div>
            </div>
                        <div className={styles.inputSeparator}>
                        <div className={styles.inputWrapper}>
            <label htmlFor="Phone">Телефон</label>
            <input
              className={styles.input}
              id="Phone"
              value={resum.Phone}
              onChange={handleChange}
              type="text"
              name="Phone"
            />
            </div>
            <div className={styles.inputWrapper}>
            <label htmlFor="Email">Email</label>
            <input
              className={styles.input}
              id="Email"
              value={resum.Email}
              onChange={handleChange}
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
                    marginLeft: '10%',
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
