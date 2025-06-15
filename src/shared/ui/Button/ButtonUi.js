import { jsx as _jsx } from "react/jsx-runtime";
import styles from './ButtonUi.module.css';
const buttonUi = ({ children, variant = 'default', ...rest }) => {
    return (_jsx("button", { className: `${styles[variant]} ${styles.base}`, ...rest, children: children }));
};
export default buttonUi;
