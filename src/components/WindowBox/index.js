import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Landscape, SizeText, Wrapper } from "./styled";
import { SliderProps } from "constans/sliderProps";
import { pexelsApi } from "../../constans/apiLinks";

export const WindowBox = ({ sliderRangeW, sliderRangeH }) => {
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    axios
      .get(pexelsApi.url, {
        headers: {
          Authorization: `${pexelsApi.access_token}`,
        },
      })
      .then((data) => {
        setPhoto(data);
      });
  }, []);

  return (
    // converting from static units to dynamic units // use memo prevents unnesesery refreshing landscape
    <Wrapper
      sliderRangeW={sliderRangeW / SliderProps.width.mod}
      sliderRangeH={sliderRangeH / SliderProps.height.mod}
    >
      {useMemo(
        () => (
          <Landscape
            backround={
              photo.data?.photos[Math.floor(Math.random() * 80)].src.landscape
            }
          />
        ),
        [photo]
      )}

      <SizeText pos="top">
        {sliderRangeH}cm X {sliderRangeW}cm
      </SizeText>
    </Wrapper>
  );
};
