import React, { useState, useRef } from "react";
import cn from "classnames";
import DropdownTrigger from "../../atoms/dropdown-trigger";
import DropdownMenu from "./dropdown-menu";
import DropdownSelected from "../../atoms/dropdown-selected";
import s from "./dropdown.module.scss";

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

const Dropdown: React.FC<IDropdownProps> = ({
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, toggleOpen] = useState(false);

  const getValue = (): string => {
    if (!isMultiple && selected.length) return selected[0];
    return "";
  };

  return (
    <div className={cn(s.wrap, className)}>
      <DropdownTrigger
        name={name}
        readOnly
        label={label}
        ref={triggerRef}
        menuRef={menuRef}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        value={getValue()} // ?
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
