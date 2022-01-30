import React from "react";
import { Collapse, useDisclosure } from "@chakra-ui/react";
import { buttonsColors } from "constans/buttonsColors";
import {
  ButtonsWrapper,
  CollapseWrapper,
  ColorButton,
  ColorInput,
  ColorLabel,
  OtherWrapper,
  Trigger,
} from "./styled";

export const ColorPicker = ({ setColor }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <CollapseWrapper>
      <Trigger onClick={onToggle}>Zmień kolor ścian</Trigger>
      <Collapse in={isOpen} animateOpacity>
        <ButtonsWrapper>
          {buttonsColors.map(({ name, color }) => (
            <ColorButton onClick={() => setColor(color)} key={name}>
              {name}
            </ColorButton>
          ))}
          <OtherWrapper>
            <ColorLabel>inne</ColorLabel>
            <ColorInput
              name="color"
              type="color"
              onChangeCapture={(val) => setColor(val.target.value)}
            />
          </OtherWrapper>
        </ButtonsWrapper>
      </Collapse>
    </CollapseWrapper>
  );
};
