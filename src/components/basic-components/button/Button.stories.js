import { HomeOutlined } from "@mui/icons-material";
import React from "react";
import { Box } from "../base-component/Box";
import { Body } from "../typography/typography";

import { Btn } from "./ButtonBase";
import {
  ErrorBtn,
  IconBtn,
  PrimaryBtn,
  SecondaryBtn,
  SuccessBtn,
  TertiaryBtn,
  TextBtn,
  InfoBtn,
  WarningBtn,
  ThemeBtn,
} from "./ButtonVariants";

export default {
  title: "Button",
  component: Btn,
};

export const Default = (p) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      gap={2}
      padding={10}
      bgcolor="grey.200"
      width="100%"
    >
      <Btn>Default</Btn>
      <PrimaryBtn {...p}>Primary</PrimaryBtn>
      <SecondaryBtn {...p}>Secondary</SecondaryBtn>
      <TertiaryBtn {...p}>Tertiary</TertiaryBtn>
      <SuccessBtn {...p}>Success</SuccessBtn>
      <WarningBtn {...p}>Warning</WarningBtn>
      <ErrorBtn {...p}>Error</ErrorBtn>
      <InfoBtn {...p}>Info</InfoBtn>
      <TextBtn {...p}>Text</TextBtn>
      <IconBtn {...p} icon={<HomeOutlined />}>
        Icon
      </IconBtn>
      <ThemeBtn />
    </Box>
  );
};
export const Large = () => <Default large />;
