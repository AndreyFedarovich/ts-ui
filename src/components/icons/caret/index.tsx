import s from "./caret.module.scss";
import cn from "classnames";

type CaretProps = {
  className?: string,
};

const Caret = ({ className }: CaretProps) => (
  <span className={cn(s.root, className)} />
);

export default Caret;
