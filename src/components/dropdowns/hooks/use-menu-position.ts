import { useEffect, useState, RefObject, MutableRefObject } from "react";

interface IMenuPositionProps {
  triggerRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
  scrollRef?: RefObject<HTMLDivElement>;
}

const getMenuPosition = ({
  scrollRef,
  triggerRef,
  menuRef,
}: IMenuPositionProps): string => {
  const { current: trigger } = triggerRef;
  const { current: menu } = menuRef as RefObject<HTMLDivElement>;

  if (!trigger || !menu) return "";
  const { top } = trigger.getBoundingClientRect();
  const { height: menuHeight } = menu.getBoundingClientRect();
  let scrollHeight = document.documentElement.clientHeight;

  if (scrollRef) {
    const { current: scroll } = scrollRef;
    if (!scroll) return "";
    scrollHeight = scroll.clientHeight;
  }
  if (scrollHeight as number - menuHeight < top) return "upward";
  return "";
};

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  scrollRef,
  isOpen,
}: IMenuPositionProps): { menuPosition: string } {
  const [menuPosition, setMenuPosition] = useState("");
  useEffect(() => {
    setMenuPosition(
      getMenuPosition({
        isOpen,
        menuRef,
        triggerRef,
        scrollRef,
      })
    );
  }, [menuRef, triggerRef, scrollRef, isOpen]);
  return { menuPosition };
}
