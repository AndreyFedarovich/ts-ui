import { useState, FormEvent } from "react";
import { DropdownSearch } from ".";

const defaultOptions = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test5",
  "test6",
  "test7",
];

export const DropdownSearchMultipleDemo = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState([] as string[]);

  const onSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSearchValue(value);
  };

  const onSelect = (option: string): void => {
    if (!selected.includes(option)) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter((el) => el !== option));
    }
  };

  return (
    <DropdownSearch
      label="Dropdown search"
      placeholder="Dropdown test placeholder"
      name="dropdownSearchTest"
      options={defaultOptions}
      selected={selected}
      isMultiple
      searchValue={searchValue}
      onSearch={onSearch}
      onSelect={(option) => onSelect(option)}
    />
  );
};

export const DropdownSearchDemo = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState([] as string[]);

  const onSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSearchValue(value);
  };

  const onSelect = (option: string): void => {
    setSelected([option]);
  };

  return (
    <DropdownSearch
      label="Dropdown search"
      placeholder="Dropdown test placeholder"
      name="dropdownSearchTest"
      options={defaultOptions}
      selected={selected}
      searchValue={searchValue}
      onSearch={onSearch}
      onSelect={(option) => onSelect(option)}
    />
  );
};
