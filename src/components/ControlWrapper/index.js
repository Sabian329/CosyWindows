import React, { useEffect, useState } from "react";
import {
  ButtonGroupStyled,
  HeadingEdit,
  InputSection,
  SlidersWrapper,
  Wrapper,
} from "./styled";
import { CalculateResults } from "components/CalculateResults";
import { PriceChanger } from "components/PriceChanger";
import { ColorPicker } from "components/ColorPicker";
import { RoomView } from "components/RoomView";
import { SlidersGroup } from "components/SlidersGroup";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { configState } from "constans/configObjects";

export const ControlWrapper = () => {
  //create local state /check if something is in LS / true:set state by LS / false:get values from state const /
  const [data, setData] = useState(
    Object.fromEntries(
      configState
        .keys()
        .map((key) => [
          [key],
          JSON.parse(localStorage.getItem(key)) || configState.initial[key],
        ])
    )
  );
  // change data in LS when data changes localy
  useEffect(() => {
    configState.keys().forEach((key) => {
      localStorage.setItem(key, JSON.stringify(data[key]));
    });
  }, [data]);

  // clear LS / set initial values in local state
  const resetState = () => {
    localStorage.clear();
    setData(
      Object.fromEntries(
        configState.keys().map((key) => [[key], configState.initial[key]])
      )
    );
  };

  const { color, sliderRangeH, sliderRangeW, meterPrice } = data;

  return (
    <Wrapper>
      <RoomView
        color={color}
        sliderRangeH={sliderRangeH}
        sliderRangeW={sliderRangeW}
      />
      <InputSection>
        <SlidersWrapper>
          <HeadingEdit>Edytuj</HeadingEdit>
          <hr />
          <SlidersGroup
            sliderRangeH={sliderRangeH}
            sliderRangeW={sliderRangeW}
            setSliderRangeH={(h) =>
              setData((prev) => ({ ...prev, sliderRangeH: h }))
            }
            setSliderRangeW={(w) =>
              setData((prev) => ({ ...prev, sliderRangeW: w }))
            }
          />
          <PriceChanger
            meterPrice={meterPrice}
            setMeterPrice={(p) =>
              setData((prev) => ({ ...prev, meterPrice: p }))
            }
          />
          <ButtonGroupStyled>
            <ColorPicker
              setColor={(c) => setData((prev) => ({ ...prev, color: c }))}
              color={data.color}
            />
            <Button w="6rem" onClick={() => resetState()}>
              <DeleteIcon />
            </Button>
          </ButtonGroupStyled>
        </SlidersWrapper>
        <CalculateResults
          meterPrice={meterPrice}
          sliderRangeW={sliderRangeW}
          sliderRangeH={sliderRangeH}
          resetState={resetState}
        />
      </InputSection>
    </Wrapper>
  );
};
