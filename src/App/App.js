import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResumeProvider } from '@entities/resume';
import { CvEditor } from '../features/cv-editor/CvEditor';
import { ResumeRender } from '../features/cv-preview/ResumeRender';
import styles from './App.module.css';
const App = () => {
    return (_jsx(ResumeProvider, { children: _jsxs("div", { className: styles.CVPage, children: [_jsx(CvEditor, {}), _jsx(ResumeRender, {})] }) }));
};
export { App };
