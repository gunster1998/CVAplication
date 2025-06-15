import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputUx } from '@shared/ui/Input/InputUx';
import styles from './ExperienceList.module.css';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import { useExperienceManager } from '@features/cv-editor/hooks/useExperienceManager';
const ExperienceList = ({ register, errors }) => {
    const { list, updateFieldExperience, deleteExperience } = useExperienceManager();
    const experience = list;
    const experienceList = experience.map((item, index) => (_jsxs("div", { className: styles.wrapperExperience, children: [_jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, value: item.Company, "data-id": item.id, label: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438', ...register(`Experience.${index}.Company`, {
                            onChange: (e) => {
                                updateFieldExperience(e);
                            },
                        }), error: errors.Experience?.[index]?.Company?.message }), _jsx(InputUx, { maxLength: 15, value: item.Role, "data-id": item.id, label: '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ...register(`Experience.${index}.Role`, {
                            onChange: (e) => {
                                updateFieldExperience(e);
                            },
                        }), error: errors.Experience?.[index]?.Role?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, value: item.StartDate, type: 'month', "data-id": item.id, label: '\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u044B', ...register(`Experience.${index}.StartDate`, {
                            onChange: (e) => {
                                updateFieldExperience(e);
                            },
                        }), error: errors.Experience?.[index]?.StartDate?.message }), _jsx(InputUx, { maxLength: 15, value: item.EndDate, type: 'month', "data-id": item.id, label: '\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B', ...register(`Experience.${index}.EndDate`, {
                            onChange: (e) => {
                                updateFieldExperience(e);
                            },
                        }), error: errors.Experience?.[index]?.EndDate?.message })] }), _jsxs("div", { className: styles.teaxtAreaWrapper, children: [_jsx("label", { htmlFor: 'Description', children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }), _jsx("textarea", { className: styles.input, id: 'Description', value: item.Description, onChange: updateFieldExperience, name: 'Description', "data-id": item.id })] }), _jsx(ButtonUi, { className: styles.deleteButton, onClick: deleteExperience, "data-id": item.id, children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }, item.id)));
    return _jsx("div", { className: styles.wrapperExperience, children: experienceList });
};
export default ExperienceList;
