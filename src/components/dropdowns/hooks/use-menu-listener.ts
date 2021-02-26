import { useEffect, useCallback, RefObject, MutableRefObject } from "react";

interface IMenuCloseListenerProps {
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
  toggleOpen: (a: boolean) => void;
  triggerRef: RefObject<HTMLDivElement>;
}

export default function useMenuListener({
  menuRef,
  triggerRef,
  toggleOpen,
}: IMenuCloseListenerProps) {
  const handleClick = useCallback(
    (e) => {
      const { current: trigger } = triggerRef;
      const { current: menu } = menuRef as RefObject<HTMLDivElement>;
      console.log('menu: ', menu);
      console.log('trigger: ', trigger);
      console.log('e.target: ', e.target);
      
      if (menu?.contains(e.target) || trigger?.contains(e.target)) return;
      toggleOpen(false);
    },
    [menuRef, triggerRef, toggleOpen]
  );

  console.log("menuRef: ", menuRef);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
