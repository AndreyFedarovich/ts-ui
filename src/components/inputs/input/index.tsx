import { forwardRef, FormEvent, ReactElement } from 'react';
import cn from 'classnames';
import InputLabel from '../input-label';
import s from './input.module.scss';

type InputProps = {
  name: string;
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void
  icon?: ReactElement,
  onBlur?: React.EventHandler<any>;
  onFocus?: React.EventHandler<any>;
  readOnly?: boolean
  value?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, name, error, className, placeholder, onBlur, onFocus, onChange, icon, readOnly, value
}, ref) => (
  <div className={cn(s.root, className, {
    [s.error]: error,
  })}
  >
    {label && <InputLabel label={label} name={name} />}
    <div className={s.wrap}>
      {icon}
      <input
        id={name}
        name={name}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        className={s.input}
      />
    </div>
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

export default Input;
