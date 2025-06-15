import { useResume } from '@entities/resume';
import avatar from '@assets/img/avatar.jpg';
export const useImageUpload = () => {
    const { resume, actions } = useResume();
    const updateImage = (fileImg) => {
        actions.updateImage(fileImg);
    };
    const img = !resume.img
        ? avatar
        : typeof resume.img === 'string'
            ? resume.img
            : URL.createObjectURL(resume.img);
    return {
        img,
        updateImage,
    };
};
