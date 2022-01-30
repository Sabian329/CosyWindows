import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import overrides from "./theme/chakraGlobalTheme";
import { MainView } from "components/MainView";

export const App = () => {
  return (
    <ChakraProvider theme={overrides}>
      <MainView />
    </ChakraProvider>
  );
};
