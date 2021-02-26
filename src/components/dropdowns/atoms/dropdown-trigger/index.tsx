import React, { forwardRef, FormEvent } from "react";
import cn from "classnames";
import onBlurMenu from "../../helpers/blur-menu.helper";
import s from "./dropdown-trigger.module.scss";

interface IDropdownTriggerProps {
  name: string;
  isOpen: boolean;
  toggleOpen: (a: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  error?: string;
  placeholder?: string;
  label?: string;
  value?: string
  onSearch?: (e: FormEvent<HTMLInputElement>) => void;
  readOnly?: boolean
}

const DropdownTrigger = forwardRef<HTMLDivElement, IDropdownTriggerProps>(
  (
    {
      name,
      isOpen,
      toggleOpen,
      label,
      placeholder,
      error,
      menuRef,
      value,
      onSearch,
      readOnly
    },
    ref
  ) => {

    return (
      <div className={cn(s.wrap, { [s.error]: error })}>
        {label && (
          <label htmlFor={name} className={s.label}>
            {label}
          </label>
        )}
        <div ref={ref} className={cn(s.trigger, { [s.open]: isOpen })}>
          <input
            id={name}
            readOnly={readOnly}
            placeholder={placeholder}
            className={s.input}
            onFocus={() => toggleOpen(true)}
            onBlur={() => onBlurMenu({ menuRef, toggleOpen })}
            value={value}
            onChange={onSearch}
          />
        </div>
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    );
  }
);

export default DropdownTrigger;
