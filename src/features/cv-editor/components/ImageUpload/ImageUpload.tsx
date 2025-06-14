import avatar from '@assets/img/avatar.jpg';
import styles from './ImageUpload.module.css';
import { useImageUpload } from '@features/cv-editor/hooks/useImageUpload';

const ImageUpload: React.FC = () => {
  const { img, updateImage } = useImageUpload();

  return (
    <div className={styles.photoResume}>
      <label htmlFor='inputUploadAvatar' className={styles.inputUploadAvatar}>
        <img className={styles.avatar} src={img || avatar} alt='' />
        <div className={styles.buttonAddImage}>Загрузить фото</div>
        <input
          style={{ display: 'none' }}
          accept='image/*'
          id='inputUploadAvatar'
          type='file'
          onChange={(e) => {
            if (e.target.files?.[0]) updateImage(e.target.files?.[0]);
          }}
        />
      </label>
    </div>
  );
};

export { ImageUpload };
