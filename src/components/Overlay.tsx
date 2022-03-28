import React, { ReactNode } from "react";
import styled from "styled-components";

export interface OverlayProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  padding: 40px 30px;
  max-width: 440px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`;

export const Overlay = ({ children }: OverlayProps): React.ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};
