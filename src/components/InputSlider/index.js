import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { colors } from "theme/colors";

export const InputSlider = ({ setSliderRange, sliderProps, init }) => {
  return (
    // seting height/width state and converting from dynamic units to static units
    <Slider
      min={sliderProps.min}
      max={sliderProps.max}
      aria-label="slider-ex-1"
      marginBottom="2rem"
      defaultValue={init}
      onChange={(val) => setSliderRange(Math.round(val * sliderProps.mod))}
      value={init}
      init={init}
    >
      <SliderTrack>
        <SliderFilledTrack bg={colors.theme} />
      </SliderTrack>
      <SliderThumb bg={colors.theme} />
    </Slider>
  );
};
