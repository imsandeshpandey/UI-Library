import "./App.css";
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
} from "./components/basic-components/button/ButtonVariants";
import { DeleteOutlineRounded, ExpandMoreOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./components/basic-components/Accordion";
import { Body } from "./components/basic-components/typography/typography";
import { Box } from "./components/basic-components/base-component/Box";
import TextField from "./components/basic-components/InputField/Input";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingClick = () => setIsLoading(!isLoading);

  const data = [
    {
      q: "Accordion 1",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam obcaecati tempore ducimus suscipit animi inventore dolorem cupiditate earum aliquid dolore porro mollitia, possimus ullam. Sit nulla quaerat veritatis similique?",
    },
    {
      q: "Accordion 2",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam obcaecati tempore ducimus suscipit animi inventore dolorem cupiditate earum aliquid dolore porro mollitia, possimus ullam. Sit nulla quaerat veritatis similique?",
    },
    {
      q: "Accordion 3",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam obcaecati tempore ducimus suscipit animi inventore dolorem cupiditate earum aliquid dolore porro mollitia, possimus ullam. Sit nulla quaerat veritatis similique?",
    },
  ];

  return (
    <Box
      bgcolor="grey.100"
      display="flex"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <PrimaryBtn
        loading={isLoading}
        loadingPosition="start"
        startIcon={<DeleteOutlineRounded />}
      >
        Button
      </PrimaryBtn>
      <SecondaryBtn loading={isLoading}>Button</SecondaryBtn>
      <TertiaryBtn onClick={handleLoadingClick}>Button</TertiaryBtn>
      <SuccessBtn>Button</SuccessBtn>
      <ErrorBtn>Button</ErrorBtn>
      <WarningBtn>Button</WarningBtn>
      <IconBtn loading={isLoading} icon={<DeleteOutlineRounded />} />
      <TextBtn loading={isLoading} text="">
        Button
      </TextBtn>
      <Box
        width="700px"
        m="auto"
        padding="50px"
        bgcolor="grey.200"
        borderRadius={4}
        boxShadow="z24"
      >
        <ThemeBtn mb={5} />
        <TextField
          search
          placeholder="Username"
          subLabel="Username"
          maxLength={20}
        />
        {data.map((data) => (
          <Accordion disableGutters bgcolor="grey.200">
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Body m={0} fontWeight={500}>
                {data.q}
              </Body>
            </AccordionSummary>
            <AccordionDetails>{data.a}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default App;
