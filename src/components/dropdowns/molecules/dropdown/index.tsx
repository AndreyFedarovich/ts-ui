import React, { useState, useRef } from "react";
import cn from "classnames";
import Input from "../../../inputs/input";
import DropdownMenu from "../../atoms/dropdown-menu";
import DropdownSelected from "../../atoms/dropdown-selected";
import onBlurMenu from "../../helpers/blur-menu.helper";
import Caret from "../../../icons/caret";
import s from "../../styles/dropdown.module.scss";

interface IDropdownProps {
  name: string;
  options: string[];
  onSelect: (a: string) => void;
  selected: string[];
  className?: string;
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  options,
  isMultiple,
  onSelect,
  name,
  label,
  placeholder,
  scrollRef,
  className,
  selected,
}) => {
  const triggerRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, toggleOpen] = useState(false);

  const getValue = (): string => {
    if (!isMultiple && selected.length) return selected[0];
    return "";
  };

  return (
    <div className={cn(s.root, className)}>
      <Input
        name={name}
        readOnly
        label={label}
        ref={triggerRef}
        placeholder={placeholder}
        value={getValue()}
        onFocus={() => toggleOpen(true)}
        onBlur={() => onBlurMenu({ menuRef, toggleOpen })}
        icon={<Caret className={isOpen ? s.caretDown : s.caretUp} />}
      />
      <DropdownMenu
        isOpen={isOpen}
        ref={menuRef}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={options}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        selected={selected}
      >
        {isMultiple && (
          <DropdownSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
