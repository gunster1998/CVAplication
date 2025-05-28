import avatar from '../../../assets/img/avatar.jpg';
import styles from './ImageUpload.module.css';

interface UploadImageProps {
  img?: string | File;
  handleImageChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const ImageUpload: React.FC<UploadImageProps> = ({
  img,
  handleImageChange,
}) => {
  return (
    <div className={styles.photoResume}>
      <label htmlFor='inputUploadAvatar' className={styles.inputUploadAvatar}>
        <img className={styles.avatar} src={img || avatar} alt='' />
        <div className={styles.buttonAddImage}>Загрузить фото</div>
        <input
          style={{ display: 'none' }}
          id='inputUploadAvatar'
          type='file'
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export { ImageUpload };
