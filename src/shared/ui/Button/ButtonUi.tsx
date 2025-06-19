import styles from './ButtonUi.module.css';

interface propsButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'delete' | 'default';
  type?: 'button' | 'submit' | 'reset';
}

const buttonUi: React.FC<propsButton> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  return (
    <button className={`${styles[variant]} ${styles.base}`} {...rest}>
      {children}
    </button>
  );
};

export default buttonUi;
