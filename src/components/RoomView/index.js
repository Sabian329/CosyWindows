import React, { createRef, useMemo } from "react";
import { WindowBox } from "components/WindowBox";
import { Room } from "svg/Room";
import { RoomWindowWrapper, ScreenShotBtn, Wrapper } from "./styled";
import { DownloadIcon } from "@chakra-ui/icons";
import html2canvas from "html2canvas";

export const RoomView = ({ color, sliderRangeH, sliderRangeW }) => {
  const ref = createRef();
  const getImage = () => {
    html2canvas(ref.current, {
      logging: true,
      proxy: "proxy.js",
      useCORS: true,
      allowTaint: true,
      imageTimeout: 0,
    }).then(function (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpg");
      downloadLink.download = `cosyWindow-${sliderRangeW}cm-x-${sliderRangeH}cm.jpg`;
      downloadLink.click();
    });
  };

  return (
    <Wrapper>
      <RoomWindowWrapper ref={ref}>
        {/* use memo prevents unnesesery refreshing room svg  */}
        {useMemo(
          () => (
            <Room color={color} />
          ),
          [color]
        )}
        <WindowBox sliderRangeH={sliderRangeH} sliderRangeW={sliderRangeW} />
      </RoomWindowWrapper>
      <ScreenShotBtn title="pobierz" onClick={() => getImage()}>
        <DownloadIcon />
      </ScreenShotBtn>
    </Wrapper>
  );
};
