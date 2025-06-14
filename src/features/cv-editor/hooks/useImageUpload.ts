import { useResume } from '@entities/resume';

export const useImageUpload = () => {
  const { resume, actions } = useResume();

  const updateImage = (fileImg: string | File) => {
    actions.updateImage(fileImg);
  };

  return {
    img: resume.img,
    updateImage,
  };
};
