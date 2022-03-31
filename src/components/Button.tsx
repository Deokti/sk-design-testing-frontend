import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import loader from "../assets/gifs/loader.gif";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const ButtonStyled = styled.button<ButtonProps>`
  padding: ${({ isLoading }) => (isLoading ? "10px" : "18px")};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  border: none;
  background: #0086a8 ${({ isLoading }) => isLoading && "!important"};
  border-radius: 8px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  transition: ${({ isLoading }) =>
    isLoading ? "0" : "background 0.2s linear"};

  &:hover {
    background: #007693;
  }

  &:active {
    background: #00657e;
    transition: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #e3e3e3;
    color: #828282;
    cursor: auto;
  }
`;

const Loader = styled.img`
  width: 30px;
  height: 30px;
`;

export const Button = (props: ButtonProps): ReactElement => {
  const {
    children,
    disabled = false,
    fullWidth = false,
    isLoading = false,
    ...otherProps
  } = props;

  return (
    <ButtonStyled
      {...otherProps}
      disabled={disabled}
      fullWidth={fullWidth}
      isLoading={isLoading}
    >
      {isLoading ? <Loader src={loader} alt="Loading..." /> : children}
    </ButtonStyled>
  );
};
