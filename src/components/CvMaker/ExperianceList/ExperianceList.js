import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InputUx from '../../../shared/ui/Input/InputUx';
import { useForm } from 'react-hook-form';
import styles from './ExperianceList.module.css';
import ButtonUi from '../../../shared/ui/Button/ButtonUi';
const ExperienceList = ({ experience, handleChangeExperience, handleDeleteExperience, }) => {
    const { register, formState: { errors }, } = useForm({
        mode: 'onChange',
    });
    const experienceList = experience.map((item, index) => (_jsxs("div", { children: [_jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: item.Company, "data-id": item.id, label: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438', ...register(`Experience.${index}.Company`, {
                            required: 'Название компании обязательно',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register(`Experience.${index}.Company`).onChange(e);
                            if (!errors.Experience?.[index]?.Company ||
                                experience?.[index].Company.length === 0) {
                                handleChangeExperience(e);
                            }
                        }, error: errors.Experience?.[index]?.Company?.message }), _jsx(InputUx, { value: item.Role, "data-id": item.id, label: '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ...register(`Experience.${index}.Role`, {
                            required: 'Должность обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register(`Experience.${index}.Role`).onChange(e);
                            if (!errors.Experience?.[index]?.Role ||
                                experience?.[index].Role.length === 0) {
                                handleChangeExperience(e);
                            }
                        }, error: errors.Experience?.[index]?.Role?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: item.StartDate, type: 'month', "data-id": item.id, label: '\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u044B', ...register(`Experience.${index}.StartDate`, {
                            required: 'Дата обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register(`Experience.${index}.StartDate`).onChange(e);
                            if (!errors.Experience?.[index]?.StartDate ||
                                experience?.[index].StartDate.length === 0) {
                                handleChangeExperience(e);
                            }
                        }, error: errors.Experience?.[index]?.StartDate?.message }), _jsx(InputUx, { value: item.EndDate, type: 'month', "data-id": item.id, label: '\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B<', ...register(`Experience.${index}.EndDate`, {
                            required: 'Дата обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register(`Experience.${index}.EndDate`).onChange(e);
                            if (!errors.Experience?.[index]?.EndDate ||
                                experience?.[index].EndDate?.length === 0) {
                                handleChangeExperience(e);
                            }
                        }, error: errors.Experience?.[index]?.EndDate?.message })] }), _jsxs("div", { className: styles.teaxtAreaWrapper, children: [_jsx("label", { htmlFor: 'Description', children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }), _jsx("textarea", { className: styles.input, id: 'Description', value: item.Description, onChange: handleChangeExperience, name: 'Description', "data-id": item.id })] }), _jsx(ButtonUi, { className: styles.deleteButton, onClick: handleDeleteExperience, "data-id": item.id, children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }, item.id)));
    return _jsx(_Fragment, { children: experienceList });
};
export default ExperienceList;
