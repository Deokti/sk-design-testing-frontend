import { useState } from "react";

type TReturn = [isToggle: boolean, toogle: () => void];

export const useToogle = (initialValue = false): TReturn => {
  const [isToggle, onToggle] = useState(initialValue);

  const toggle = () => onToggle((p) => !p);

  return [isToggle, toggle];
};
