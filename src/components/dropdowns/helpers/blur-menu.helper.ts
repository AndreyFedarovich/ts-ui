import { MutableRefObject, RefObject, FocusEvent } from "react";

interface IBlurMenuProps {
  e: FocusEvent;
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
  toggleOpen: (a: boolean) => void;
}

export default function onBlurMenu({ e, menuRef, toggleOpen }: IBlurMenuProps) {
  const { current: menu } = menuRef as RefObject<HTMLDivElement>;
  if (menu?.contains(e.relatedTarget as HTMLInputElement | HTMLButtonElement))
    return;
  toggleOpen(false);
}
