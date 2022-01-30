import React from "react";
import { Text } from "@chakra-ui/react";
import { Wrapper } from "./styled";

export const CalculateResults = ({
  sliderRangeH,
  sliderRangeW,
  meterPrice,
}) => {
  const area = Math.round((sliderRangeH * sliderRangeW) / 100) / 100;
  const price = Math.round(area * meterPrice * 100) / 100;

  return (
    <Wrapper>
      <Text>
        Powierzchnia okna
        <br /> <strong>{area}m²</strong>
      </Text>
      <Text>
        Cena okna
        <br />{" "}
        <strong>
          {new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(price)}
        </strong>
      </Text>
    </Wrapper>
  );
};
