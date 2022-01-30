import React from "react";
import { Text } from "@chakra-ui/react";
import { InputSlider } from "components/InputSlider";
import { SliderProps } from "constans/sliderProps";

export const SlidersGroup = ({
  setSliderRangeW,
  setSliderRangeH,
  sliderRangeH,
  sliderRangeW,
}) => {
  return (
    <>
      <Text>Szerokość okna {sliderRangeW}cm</Text>
      <InputSlider
        setSliderRange={setSliderRangeW}
        sliderProps={SliderProps.width}
        init={sliderRangeW / SliderProps.width.mod}
      />
      <Text>Wysokość okna {sliderRangeH}cm</Text>
      <InputSlider
        setSliderRange={setSliderRangeH}
        sliderProps={SliderProps.height}
        init={sliderRangeH / SliderProps.height.mod}
      />
    </>
  );
};
