import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
import { resumeService } from './ResumeService';
export const ResumeContext = createContext(null);
export const ResumeProvider = ({ children }) => {
    const [resume, setResume] = useState(resumeService.createEmptyResume());
    return (_jsx(ResumeContext, { value: { resume, setResume }, children: children }));
};
