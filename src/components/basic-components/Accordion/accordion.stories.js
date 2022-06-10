import { ExpandMoreOutlined } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from ".";
import { Box } from "../base-component/Box";
import { Body, Small } from "../typography/typography";

export default {
  title: "Accordion",
  component: Accordion,
};

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
export const Default = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box width="100%" m="auto" padding="50px" bgcolor="grey.100">
      <Box
        width="700px"
        m="auto"
        padding="50px"
        bgcolor="grey.200"
        borderRadius={4}
        boxShadow="z24"
      >
        <FormControlLabel
          sx={{ mb: 5 }}
          control={<Switch checked={checked} onChange={handleChange} />}
          label={<Body color="grey.900">Disable Gutters</Body>}
        />

        {data.map((data) => (
          <Accordion disableGutters={checked} bgcolor="grey.200">
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Body m={0} fontWeight={500}>
                {data.q}
              </Body>
            </AccordionSummary>
            <AccordionDetails>
              <Body>{data.a}</Body>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
