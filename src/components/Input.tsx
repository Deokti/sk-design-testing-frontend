import React, { useState } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  title: string;
  placeholder: string;
  required?: boolean;
  fullWidth?: boolean;
  error?: string;
  type?: "text" | "phone" | "email";
}

type TLabel = Pick<InputProps, "fullWidth">;
type TSpan = Pick<InputProps, "title">;

const Label = styled.label<TLabel>`
  display: block;
  position: relative;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "180px")};
  width: 100%;
  height: 50px;
  z-index: 1;
  margin-bottom: 20px;
`;

const Span = styled.span<TSpan>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  border-radius: 8px;
  z-index: -1;

  &::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    top: -8px;
    left: 8px;
    line-height: 100%;
    background-color: #fff;
    letter-spacing: 0.25px;
    padding: 0 3px;

    color: #828282;
  }
`;

const SpanError = styled.span`
  display: block;
  margin-top: 8px;
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #eb5e55;
`;

const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #353238;

  border: none;
  background-color: transparent;
  padding: 0 15px;

  &::placeholder {
    letter-spacing: 0.25px;

    color: #cdcad0;
  }

  &:focus {
    outline: none;
  }

  &:focus + span {
    border-color: #0086a8;

    &::before {
      color: #0086a8;
    }
  }

  &.error + span {
    border-color: #eb5e55;

    &::before {
      color: #eb5e55;
    }
  }
`;

// TODO: подумать, как убрать повторяющиеся стили
const InputStyledtMask = styled(InputMask)`
  width: 100%;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #353238;

  border: none;
  background-color: transparent;
  padding: 0 15px;

  &:focus {
    outline: none;
  }

  &:focus + span {
    border-color: #0086a8;

    &::before {
      color: #0086a8;
    }
  }
`;

export const Input = (props: InputProps) => {
  const {
    fullWidth = false,
    placeholder,
    required = false,
    title,
    type = "text",
    error,
    onChange,
    value,
  } = props;

  const isError = (error && error.length > 0 ? "error" : "").trim();

  return (
    <Label fullWidth={fullWidth} title={title}>
      {type === "phone" ? (
        <>
          <InputStyledtMask
            mask="+7 (999) 999-99-99"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </>
      ) : (
        <InputStyled
          type={type}
          placeholder={placeholder}
          error={error}
          value={value}
          onChange={onChange}
          required={required}
          title={title}
          className={isError}
        />
      )}
      <Span title={title} />
      {isError && <SpanError>{error}</SpanError>}
    </Label>
  );
};
