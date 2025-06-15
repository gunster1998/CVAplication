import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ImageUpload.module.css';
import { useImageUpload } from '@features/cv-editor/hooks/useImageUpload';
const ImageUpload = () => {
    const { img, updateImage } = useImageUpload();
    return (_jsx("div", { className: styles.photoResume, children: _jsxs("label", { htmlFor: 'inputUploadAvatar', className: styles.inputUploadAvatar, children: [_jsx("img", { className: styles.avatar, src: img, alt: '' }), _jsx("div", { className: styles.buttonAddImage, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E" }), _jsx("input", { style: { display: 'none' }, accept: 'image/*', id: 'inputUploadAvatar', type: 'file', onChange: (e) => {
                        if (e.target.files?.[0])
                            updateImage(e.target.files?.[0]);
                    } })] }) }));
};
export { ImageUpload };
