import React from "react";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { Wrapper } from "./styled";

export const PriceChanger = ({ meterPrice, setMeterPrice }) => {
  const handleChange = (value) => setMeterPrice(value);
  return (
    <Wrapper>
      <Text>{`Cena okna za 1m² (zł)`}</Text>
      <NumberInput maxW="100px" value={meterPrice} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Wrapper>
  );
};
