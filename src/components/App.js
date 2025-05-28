import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CvMaker } from './CvMaker/CvMaker';
import { ResumeRender } from './ResumeRender/ResumeRender';
import styles from './App.module.css';
const App = () => {
    const [resum, setResum] = useState({
        img: undefined,
        FirstName: 'Константин',
        LastName: 'Дрягин',
        Profession: 'FronteEnd разработчик',
        City: 'Москва',
        Counrty: 'Россия',
        PostalCode: 612950,
        Phone: '+79991001741',
        Email: 'gunster98@gmail.com',
        Experience: [],
    });
    return (_jsxs("div", { className: styles.CVPage, children: [_jsx(CvMaker, { resum: resum, setResum: setResum }), _jsx(ResumeRender, { resum: resum })] }));
};
export { App };
