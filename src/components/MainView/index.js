import { Overview, Wrapper } from "./styled";

import { ControlWrapper } from "components/ControlWrapper";
import { Heading } from "@chakra-ui/react";
import React from "react";

export const MainView = () => {
  return (
    <Wrapper>
      <Heading>CosyWindows Generator</Heading>
      <Overview>Ściana ma wymiary: 10m x 3m</Overview>
      <ControlWrapper />
    </Wrapper>
  );
};
