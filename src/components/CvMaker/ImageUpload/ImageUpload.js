import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import avatar from '../../../assets/img/avatar.jpg';
import styles from './ImageUpload.module.css';
const ImageUpload = ({ img, handleImageChange, }) => {
    return (_jsx("div", { className: styles.photoResume, children: _jsxs("label", { htmlFor: 'inputUploadAvatar', className: styles.inputUploadAvatar, children: [_jsx("img", { className: styles.avatar, src: img || avatar, alt: '' }), _jsx("div", { className: styles.buttonAddImage, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E" }), _jsx("input", { style: { display: 'none' }, id: 'inputUploadAvatar', type: 'file', onChange: handleImageChange })] }) }));
};
export { ImageUpload };
