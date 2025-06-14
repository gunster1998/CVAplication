import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './InputUx.module.css';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputUx = forwardRef<HTMLInputElement, PropsInput>(
  ({ label, error, name, ...rest }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <label htmlFor={name}>
          {label} {error && <span className={styles.error}>- {error}</span>}
        </label>
        <input
          ref={ref}
          className={styles.input}
          id={name}
          name={name}
          {...rest}
        />
      </div>
    );
  },
);

export { InputUx };
