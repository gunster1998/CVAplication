import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import styles from './CvMaker.module.css';
import { ImageUpload } from './ImageUpload/ImageUpload';
import PersonalInfoSection from './PersonalInfoSection/PersonalInfoSection';
import ExperianceList from './ExperianceList/ExperianceList';
import ButtonUi from '../../shared/ui/Button/ButtonUi';
const CvMaker = ({ resum, setResum }) => {
    const { 
    // register,
    handleSubmit,
    // formState: { errors },
     } = useForm({
        mode: 'onChange',
    });
    const handleChange = (e) => {
        const { name } = e.target;
        setResum({ ...resum, [name]: e.target.value });
    };
    const onSubmit = (data) => {
        console.log('Данные проверены', data);
    };
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        setResum((prev) => ({
            ...prev,
            img: URL.createObjectURL(file),
        }));
    };
    const handleChangeExperience = (e) => {
        const { name, value } = e.target;
        const idElement = e.target.dataset.id;
        const nameRight = (fieldName) => {
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
    const handleDeleteExperience = (e) => {
        const target = e.target;
        const idElement = target.dataset.id;
        const updateExperiance = resum.Experience.filter((job) => {
            if (job.id === idElement) {
                return false;
            }
            return true;
        });
        setResum({ ...resum, Experience: updateExperiance });
    };
    const handleNewExperiance = () => {
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
    return (_jsx(_Fragment, { children: _jsx("div", { className: styles.CVMaker, children: _jsxs("div", { className: 'CVMaker__person-details', children: [_jsx("h2", { className: styles.CVMaker__personText, children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435" }), _jsxs("form", { className: styles.SVMaker__personForm, action: '', onSubmit: handleSubmit(onSubmit), children: [_jsx(ImageUpload, { img: resum.img, handleImageChange: handleImageChange }), _jsx(PersonalInfoSection, { resum: resum, handleChange: handleChange }), _jsx("h2", { className: styles.CVMaker__personText, children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430" }), _jsx("div", { className: styles.CVMaker__ExperianceList, children: _jsx(ExperianceList, { experience: resum.Experience, handleChangeExperience: handleChangeExperience, handleDeleteExperience: handleDeleteExperience }) }), _jsx(ButtonUi, { variant: 'default', onClick: handleNewExperiance, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B" })] })] }) }) }));
};
export { CvMaker };
