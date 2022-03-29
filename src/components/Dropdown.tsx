import React from "react";
import { SpanError } from "./Input";
import styled from "styled-components";
import ReactClickAwayListener from "react-click-away-listener";
import { WidthFull } from "./common/WidthFull";

export interface DropdownProps {
  open?: boolean;
  placeholder: string;
  options?: string[] | unknown[];
  selectedValue?: string;
  name: string;
  error?: string;
  onSelect?: (value: string) => void;
  onClose: () => void;
  onOpen: () => void;
}

const WidthFullMarginBottom = styled(WidthFull)`
  margin-bottom: 20px;
`;

const Wrapper = styled.div<Omit<DropdownProps, "onClose" | "onOpen">>`
  cursor: pointer;
  position: relative;
  padding: 13px 15px;
  min-height: 50px;
  max-width: "100%";
  width: 100%;
  background: #ffffff;
  border: 2px solid ${({ open }) => (open ? "#0086A8" : "#e3e3e3")};
  border-radius: 8px;

  &::before {
    position: absolute;
    left: 10px;
    top: 15px;
    content: "${({ placeholder }) => placeholder}";
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding: 0 3px;
    background-color: #fff;
    color: #353238;
    transition: all 0.2s linear;
  }

  ${({ open, selectedValue }) =>
    (open || (selectedValue as any)) &&
    `
    &::before {
      transform: translateY(-24px);
      font-size: 12px;
      color: ${!open && selectedValue ? "#828282" : "#0086A8"};
    }
  `};

  ${({ error }) =>
    error &&
    `
    border-color: #EB5E55;

    &::before {
      color: #EB5E55;
    }
  }
  
  `}
`;

const DropdownList = styled.ul<Pick<DropdownProps, "open">>`
  position: absolute;
  left: -3px;
  bottom: -3px;
  transform: translateY(100%);
  z-index: 5;
  width: 101.5%;
  background-color: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;

  opacity: 0;
  visible: hidden;
  pointer-events: none;

  ${({ open }) =>
    open &&
    `
    opacity: 1;
    visible: visible;
    pointer-events: all;
  `}
`;

const CurrentValue = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: #353238;
  margin: 0;
`;

const DropdownItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #353238;
  padding: 8px 13px;

  &:not(:last-child) {
    border-bottom: 1px solid #e3e3e3;
  }

  &:hover {
    background-color: rgba(227, 227, 227, 0.4);
  }
`;

export const Dropdown = (props: DropdownProps) => {
  const {
    selectedValue,
    options,
    name,
    open,
    placeholder,
    onOpen,
    onClose,
    onSelect,
    error,
  } = props;

  const select = (value: string) => (event: any) => {
    event.stopPropagation();
    onSelect && onSelect(value);
  };

  return (
    <ReactClickAwayListener onClickAway={onClose}>
      <WidthFullMarginBottom>
        <Wrapper
          placeholder={placeholder}
          selectedValue={selectedValue}
          open={open}
          name={name}
          error={error}
          onClick={open ? onClose : onOpen}
        >
          {selectedValue && <CurrentValue>{selectedValue as any}</CurrentValue>}
          <DropdownList
            open={open}
            onChange={() => {
              console.log("sdasds");
            }}
          >
            {options &&
              options.map((item: any) => {
                const key = item.id ? item.id : item;
                const selected = item.name ? item.name : item;

                return (
                  <DropdownItem key={key} onClick={select(selected)}>
                    {selected}
                  </DropdownItem>
                );
              })}
          </DropdownList>
        </Wrapper>
        {error && error.length > 0 && <SpanError>{error}</SpanError>}
      </WidthFullMarginBottom>
    </ReactClickAwayListener>
  );
};
