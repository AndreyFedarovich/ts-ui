import React, { useState, useRef, FormEvent } from "react";
import cn from "classnames";
import DropdownSelected from "../../atoms/dropdown-selected";
import { searchOptions } from "../../helpers/search-options.helper";
import onBlurMenu from "../../helpers/blur-menu.helper";
import Input from "../../../inputs/input";
import Caret from "../../../icons/caret";
import DropdownMenu from "../../atoms/dropdown-menu";
import s from "../../styles/dropdown.module.scss";
interface IDropdownSearchProps {
  name: string;
  options: string[];
  onSelect: (a: string) => void;
  selected: string[];
  className?: string;
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  onSearch: (e: FormEvent<HTMLInputElement>) => void;
  searchValue?: string;
}

export const DropdownSearch = ({
  options,
  isMultiple,
  onSearch,
  onSelect,
  searchValue,
  name,
  label,
  placeholder,
  scrollRef,
  className,
  selected,
}: IDropdownSearchProps) => {
  const triggerRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className={cn(s.wrap, className)}>
      <Input
        name={name}
        label={label}
        ref={triggerRef}
        placeholder={placeholder}
        onChange={onSearch}
        value={isMultiple ? undefined : selected[0]}
        onFocus={() => toggleOpen(true)}
        onBlur={() => onBlurMenu({ menuRef, toggleOpen })}
        icon={<Caret className={isOpen ? s.caretDown : s.caretUp} />}
      />
      <DropdownMenu
        ref={menuRef}
        selected={selected}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={searchOptions(searchValue || '', options)}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        isOpen={isOpen}
      >
        {isMultiple && (
          <DropdownSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownMenu>
    </div>
  );
};

export default DropdownSearch;
