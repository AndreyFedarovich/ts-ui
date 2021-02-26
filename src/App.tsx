import React, { useState, FormEvent } from "react";
import Input from "./components/inputs/input";
import Dropdown from "./components/dropdowns/molecules/dropdown";
import DropdownSearch from "./components/dropdowns/molecules/dropdown-search";
import s from "./app.module.scss";

const defaultOptions = ["test1", "test2", "test3", "test4", "test5", "test5", "test6", "test7"];

function App() {
  const [selected, setSelected] = useState([] as string[]);
  const [searchValue, setSearchValue] = useState('');

  const onSelectMultiple = (option: string): void => {
    if (!selected.includes(option)) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter((el) => el !== option));
    }
  };

  const onSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSearchValue(value);
  };

  return (
    <div className={s.wrap}>
      <div className={s.field}>
        <Input
          label="Input"
          placeholder="Input test placeholder"
          name="inputTest"
        />
      </div>
      <div className={s.field}>
        <Dropdown
          label="Dropdown"
          placeholder="Dropdown test placeholder"
          name="dropdownTest"
          options={defaultOptions}
          selected={selected}
          isMultiple
          onSelect={(option) => onSelectMultiple(option)}
        />
      </div>
      <div className={s.field}>
        <DropdownSearch
          label="Dropdown search"
          placeholder="Dropdown test placeholder"
          name="dropdownSearchTest"
          options={defaultOptions}
          selected={selected}
          isMultiple
          searchValue={searchValue}
          onSearch={onSearch}
          onSelect={(option) => onSelectMultiple(option)}
        />
      </div>
    </div>
  );
}

export default App;
