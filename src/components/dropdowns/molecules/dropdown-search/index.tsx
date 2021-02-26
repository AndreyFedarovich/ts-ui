import React, { useState, useRef, FormEvent } from "react";
import cn from "classnames";
import DropdownTrigger from "../../atoms/dropdown-trigger";
import DropdownSearchMenu from "./dropdown-search-menu";
import DropdownSelected from "../../atoms/dropdown-selected";
import { searchOptions } from "../../helpers/search-options.helper";
import s from "./dropdown-search.module.scss";

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

const DropdownSearch = ({
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
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);


  return (
    <div className={cn(s.wrap, className)}>
      <DropdownTrigger
        name={name}
        label={label}
        ref={triggerRef}
        menuRef={menuRef}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        onSearch={onSearch} // ?
      />
      <DropdownSearchMenu
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
      </DropdownSearchMenu>
    </div>
  );
};

export default DropdownSearch;
