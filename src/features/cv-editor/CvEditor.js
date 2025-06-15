import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import styles from './CvEditor.module.css';
import { ImageUpload } from './components/ImageUpload/ImageUpload';
import PersonalInfoSection from './components/PersonalInfoSection/PersonalInfoSection';
import ExperianceList from './components/ExperianceList/ExperienceList';
import ButtonUi from '@shared/ui/Button/ButtonUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema } from './services/validationServices';
import { useExperienceManager } from '@features/cv-editor/hooks/useExperienceManager';
const CvEditor = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: 'onChange',
        resolver: zodResolver(resumeSchema),
    });
    const onSubmit = (data) => {
        console.log('Данные проверены', data);
    };
    const { addExperience } = useExperienceManager();
    return (_jsx(_Fragment, { children: _jsx("div", { className: styles.CVMaker, children: _jsxs("div", { className: 'CVMaker__person-details', children: [_jsx("h2", { className: styles.CVMaker__personText, children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435" }), _jsxs("form", { className: styles.SVMaker__personForm, action: '', onSubmit: handleSubmit(onSubmit), children: [_jsx(ImageUpload, {}), _jsx(PersonalInfoSection, { register: register, errors: errors }), _jsx("h2", { className: styles.CVMaker__personText, children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430" }), _jsx("div", { className: styles.CVMaker__ExperianceList, children: _jsx(ExperianceList, { register: register, errors: errors }) }), _jsx(ButtonUi, { variant: 'default', onClick: addExperience, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B" })] })] }) }) }));
};
export { CvEditor };
