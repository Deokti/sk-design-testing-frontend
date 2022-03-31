import React from "react";
import { SKDesign } from "../components/SkDesign";
import { Container } from "../components/common/Container";
import { Fixed } from "../components/common/Fixed";
import { AppForm } from "../components/AppForm";

export const App = () => {
  return (
    <Fixed className="d-flex justify-between align-center">
      <Container className="d-flex justify-between align-center">
        <SKDesign />
        <AppForm />
      </Container>
    </Fixed>
  );
};
