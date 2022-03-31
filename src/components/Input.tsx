import React from "react";
import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  title: string;
  placeholder: string;
  required?: boolean;
  fullWidth?: boolean;
  error?: string;
  type?: "text" | "phone" | "email";
}

type FullWidth = Pick<InputProps, "fullWidth">;
type TSpan = Pick<InputProps, "title">;

const InputCssStyled = css`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #353238;
  height: 42px;
  margin-left: 2px;
  width: 98%;
  margin-top: 5px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  padding: 0 15px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

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

export const Label = styled.label`
  display: block;
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 50px;
  z-index: 1;
`;

export const BorderSpan = styled.span<TSpan>`
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

export const SpanError = styled.span`
  display: block;
  margin-top: 8px;
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #eb5e55;
`;

const InputStyled = styled.input<InputProps>`
  ${InputCssStyled}
`;

// TODO: подумать, как убрать повторяющиеся стили
const InputStyledtMask = styled(InputMask)`
  ${InputCssStyled}
`;

const Wrapper = styled.div<FullWidth>`
  margin-bottom: 10px;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "180px")};
  width: 100%;
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
    className,
    ...otherProps
  } = props;

  const isError = (error && error.length > 0 ? "error" : "").trim();

  return (
    <Wrapper fullWidth={fullWidth}>
      <Label title={title} className={className}>
        {type === "phone" ? (
          <>
            <InputStyledtMask
              {...otherProps}
              mask="+7 (999) 999-99-99"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={isError}
            />
          </>
        ) : (
          <InputStyled
            {...otherProps}
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
        <BorderSpan title={title} />
      </Label>
      {isError && <SpanError>{error}</SpanError>}
    </Wrapper>
  );
};
