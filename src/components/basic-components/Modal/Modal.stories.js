import React from "react";
import { Box } from "../base-component/Box";
import { Body } from "../typography/typography";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

export const UIModal = ({ boxShadow = "z24", ...p }) => {
  return (
    <Box padding={100} bgcolor="grey.200">
      <Modal padding={3} boxShadow={boxShadow} {...p}>
        <Body color="grey.900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          odio iusto laboriosam eum quo quaerat minus nam blanditiis minima
          recusandae. Repudiandae exercitationem vero culpa quibusdam. Cumque ut
          recusandae possimus quis ea molestias consequatur nihil commodi et
          eligendi doloremque, magnam cum incidunt fugiat esse qui voluptatibus
          quasi itaque necessitatibus sed praesentium.
        </Body>
      </Modal>
    </Box>
  );
};
