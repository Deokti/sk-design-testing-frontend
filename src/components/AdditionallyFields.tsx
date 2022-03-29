import React, { ReactElement } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { WidthFull } from "./common/WidthFull";

export interface AdditionallyFieldsProps {
  open?: boolean;
  onOpen?: () => void;
  title: string;
  children: ReactElement;
}

const Inner = styled.div<Pick<AdditionallyFieldsProps, "open">>`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  ${({ open }) =>
    open &&
    `
      svg {
        transform: rotate(180deg);
      }
  `}
`;

const Text = styled.h5`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 0;
  color: #353238;

  margin-right: 8px;
`;

export const AdditionallyFields = (props: AdditionallyFieldsProps) => {
  const { children, onOpen, title, open } = props;
  return (
    <WidthFull>
      <Inner onClick={onOpen} open={open}>
        <Text>{title}</Text>
        <Arrow />
      </Inner>
      {open && <WidthFull>{children}</WidthFull>}
    </WidthFull>
  );
};
