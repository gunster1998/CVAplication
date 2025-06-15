import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import styles from './InputUx.module.css';
const InputUx = forwardRef(({ label, error, name, ...rest }, ref) => {
    return (_jsxs("div", { className: styles.inputWrapper, children: [_jsxs("label", { htmlFor: name, children: [label, " ", error && _jsxs("span", { className: styles.error, children: ["- ", error] })] }), _jsx("input", { ref: ref, className: styles.input, id: name, name: name, ...rest })] }));
});
export { InputUx };
