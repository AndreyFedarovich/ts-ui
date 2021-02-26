import React from "react";
import Input from "./components/inputs/input";
import Checkbox from "./components/inputs/checkbox";
import s from "./app.module.scss";

function App() {
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
        <Checkbox label="Test checkbox" name="test-checkbox" />
      </div>
    </div>
  );
}

export default App;
