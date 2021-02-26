import { useState } from "react";
import { Dropdown } from ".";

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

export const DropdownMultipleDemo = () => {
  const [selected, setSelected] = useState([] as string[]);

  const onSelect = (option: string): void => {
    if (!selected.includes(option)) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter((el) => el !== option));
    }
  };

  return (
    <Dropdown
      label="Dropdown"
      placeholder="Dropdown test placeholder"
      name="dropdownTest"
      options={defaultOptions}
      selected={selected}
      isMultiple
      onSelect={(option) => onSelect(option)}
    />
  );
};


export const DropdownDemo = () => {
  const [selected, setSelected] = useState([] as string[]);

  const onSelect = (option: string): void => {
    setSelected([option]);
  };

  return (
    <Dropdown
      label="Dropdown"
      placeholder="Dropdown test placeholder"
      name="dropdownTest"
      options={defaultOptions}
      selected={selected}
      onSelect={(option) => onSelect(option)}
    />
  );
};


