import s from "./input-label.module.scss";

type InputLabelProps = {
  label: string
  name: string,
};

const InputLabel = ({ name, label }: InputLabelProps) => (
  <label htmlFor={name} className={s.root}>{label}</label>
);

export default InputLabel;
