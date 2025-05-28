import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './PersonalInfoSection.module.css';
import InputUx from '../../../shared/ui/Input/InputUx';
import { useForm } from 'react-hook-form';
const PersonalInfoSection = ({ resum, handleChange }) => {
    const { register, formState: { errors }, } = useForm({
        mode: 'onChange',
    });
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: resum.FirstName, label: '\u0418\u043C\u044F', ...register('FirstName', {
                            required: 'Имя обязательно',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('FirstName').onChange(e);
                            if (!errors.FirstName || resum.FirstName.length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.FirstName?.message }), _jsx(InputUx, { value: resum.LastName, label: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F', ...register('LastName', {
                            required: 'Фамилия обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('LastName').onChange(e);
                            if (!errors.LastName || resum.LastName.length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.LastName?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: resum.Profession, label: '\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F', ...register('Profession', {
                            required: 'Профессия обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('Profession').onChange(e);
                            if (!errors.Profession || resum.Profession.length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.Profession?.message }), _jsx(InputUx, { value: resum.City, label: '\u0413\u043E\u0440\u043E\u0434', ...register('City', {
                            required: 'Город обязателен',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('City').onChange(e);
                            if (!errors.City || resum.City.length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.City?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: resum.Counrty, label: '\u0421\u0442\u0440\u0430\u043D\u0430', ...register('Counrty', {
                            required: 'Страна обязательна',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('Counrty').onChange(e);
                            if (!errors.Counrty || resum.Counrty.length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.Counrty?.message }), _jsx(InputUx, { value: resum.PostalCode, label: '\u0418\u043D\u0434\u0435\u043A\u0441', ...register('PostalCode', {
                            required: 'Индекс обязателен',
                            maxLength: {
                                value: 14,
                                message: 'Максимум 14 символов',
                            },
                        }), onChange: (e) => {
                            register('PostalCode').onChange(e);
                            if (!errors.PostalCode ||
                                resum.PostalCode.toString().length === 0) {
                                handleChange(e);
                            }
                        }, error: errors.PostalCode?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { value: resum.Phone, maxLength: 15, label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', ...register('Phone', {
                            required: 'Телефон обязателен',
                            pattern: {
                                value: /^\+?[0-9\s\-()]{10,15}$/,
                                message: 'Некорректный формат телефона',
                            },
                        }), onChange: (e) => {
                            register('Phone').onChange(e);
                            handleChange(e);
                        }, error: errors.Phone?.message }), _jsx(InputUx, { value: resum.Email, maxLength: 20, label: 'Email', ...register('Email', {
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Некорректный формат email',
                            },
                        }), onChange: (e) => {
                            register('Email').onChange(e);
                            handleChange(e);
                        }, error: errors.Email?.message })] })] }));
};
export default PersonalInfoSection;
