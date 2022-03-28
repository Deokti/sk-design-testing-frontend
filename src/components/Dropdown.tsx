import React from "react";

export interface DropdownProps {
  onOpen: () => void;
  open: boolean;
  placeholder: string;
  list: unknown[];
  currentValue: unknown;
}
