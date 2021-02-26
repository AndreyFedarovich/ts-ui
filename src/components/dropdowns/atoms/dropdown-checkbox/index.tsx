import s from './dropdown-checkbox.module.scss';

interface IDropdownCheckboxProps {
  isActive: boolean;
}

const DropdownCheckbox = ({ isActive }: IDropdownCheckboxProps) => (
  <span className={s.wrap}>
    {isActive ? '-' : '+'}
  </span>
);

export default DropdownCheckbox;
