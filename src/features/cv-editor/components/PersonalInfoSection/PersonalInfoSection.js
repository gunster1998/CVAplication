import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './PersonalInfoSection.module.css';
import { InputUx } from '@shared/ui/Input/InputUx';
import { userPersonalInfo } from '@features/cv-editor/hooks/usePersonalInfo';
const PersonalInfoSection = ({ register, errors }) => {
    const { data, onChange } = userPersonalInfo();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, label: '\u0418\u043C\u044F', ...register('FirstName', {
                            maxLength: 5,
                            onChange: (e) => {
                                onChange('FirstName', e.target.value);
                            },
                        }), error: errors.FirstName?.message }), _jsx(InputUx, { maxLength: 15, label: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F', ...register('LastName', {
                            onChange: (e) => {
                                onChange('LastName', e.target.value);
                            },
                        }), error: errors.LastName?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, label: '\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F', ...register('Profession', {
                            onChange: (e) => {
                                onChange('Profession', e.target.value);
                            },
                        }), error: errors.Profession?.message }), _jsx(InputUx, { maxLength: 15, label: '\u0413\u043E\u0440\u043E\u0434', ...register('City', {
                            onChange: (e) => {
                                onChange('City', e.target.value);
                            },
                        }), error: errors.City?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, label: '\u0421\u0442\u0440\u0430\u043D\u0430', ...register('Country', {
                            onChange: (e) => {
                                onChange('Country', e.target.value);
                            },
                        }), error: errors.Country?.message }), _jsx(InputUx, { maxLength: 6, label: '\u0418\u043D\u0434\u0435\u043A\u0441', ...register('PostalCode', {
                            onChange: (e) => {
                                onChange('PostalCode', e.target.value);
                            },
                        }), error: errors.PostalCode?.message })] }), _jsxs("div", { className: styles.inputSeparator, children: [_jsx(InputUx, { maxLength: 15, label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', ...register('Phone', {
                            onChange: (e) => {
                                onChange('Phone', e.target.value);
                            },
                        }), error: errors.Phone?.message }), _jsx(InputUx, { maxLength: 20, label: 'Email', ...register('Email', {
                            onChange: (e) => {
                                onChange('Email', e.target.value);
                            },
                        }), error: errors.Email?.message })] })] }));
};
export default PersonalInfoSection;
