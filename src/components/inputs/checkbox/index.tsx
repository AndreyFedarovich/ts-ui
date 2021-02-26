import { forwardRef } from 'react';
import cn from 'classnames';
import s from './checkbox.module.scss';

type CheckboxProps = {
  name: string;
  label?: string;
  isActive?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  name, label, isActive = false, ...props
}, ref) => (
  <button
    type="button"
    className={cn(s.root, { [s.active]: isActive })}
    {...props}
  >
    <span
      ref={ref}
      className={s.checkbox}
    />
    {label && <span className={s.label}>{label}</span>}
  </button>
));

export default Checkbox;
