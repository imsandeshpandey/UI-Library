import React from "react";
import { useIsMobile } from "../Utils/useIsMobile";
import { Box } from "../base-component/Box";
import { text } from "./text";

export const Display = (props) => (
  <Box
    component="div"
    {...text[useIsMobile() ? "title1" : "display"]}
    {...props}
  />
);

/**
 * Title1 font, a wrapper of Mui Box
 * @param props Mui Box props
 */
export const Title1 = (props) => (
  <Box
    component="h1"
    {...text[useIsMobile() ? "title2" : "title1"]}
    {...props}
  />
);

/**
 * Title2 font, a wrapper of Mui Box
 * @param props Mui Box props
 */
export const Title2 = (props) => (
  <Box
    component="h2"
    {...text[useIsMobile() ? "title3" : "title2"]}
    {...props}
  />
);

/**
 * Title3 font, a wrapper of Mui Box
 * @param props Mui Box props
 */
export const Title3 = (props) => (
  <Box
    component="h3"
    {...text[useIsMobile() ? "large" : "title3"]}
    fontWeight={props.bold ? 700 : 600}
    {...props}
  />
);

/**
 * Large font, a wrapper of Mui Box
 * @param props Mui Box props
 * @param props.bold
 */
export const Large = ({ bold, ...props }) => (
  <Box component="p" {...text.large} fontWeight={bold ? 600 : 400} {...props} />
);

/**
 * Body font, a wrapper of Mui Box
 * @param props Mui Box props
 * @param props.bold
 */
export const Body = ({ bold, ...props }) => (
  <Box component="p" {...text.body} fontWeight={bold ? 600 : 400} {...props} />
);

/**
 * Small font, a wrapper of Mui Box
 * @param props Mui Box props
 * @param props.bold
 */
export const Small = ({ bold, ...props }) => (
  <Box component="p" {...text.small} fontWeight={bold ? 500 : 400} {...props} />
);
