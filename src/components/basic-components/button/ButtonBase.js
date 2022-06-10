import { Button, IconButton, styled, Box } from "@mui/material";
import React, { forwardRef } from "react";
import { borderColor } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { Large, Small, Body } from "../typography/typography";

/**
 * Support common button props and add common styles for buttons
 * @param {Object} props
 * @param {React.Component} props.icon used when there's only an icon inside Button
 * @param {boolean} props.large by default a button is small unless large is true
 * @param {Object} props.rest additional Mui Button props
 */

export const Btn = styled(
  forwardRef(
    (
      {
        icon,
        color,
        bgcolor,
        hoverStyles,
        activeStyles,
        restStyles,
        loading,
        small,
        large,
        border,
        children,
        disabled,
        ...rest
      },
      ref
    ) => {
      // eslint-disable-next-line no-nested-ternary
      const Label = large ? Large : small ? Small : Body;
      return (
        <Box
          // eslint-disable-next-line no-nested-ternary
          component={loading ? LoadingButton : icon ? IconButton : Button}
          ref={ref}
          disabled={disabled}
          loading={loading}
          variant={loading && (border ? "outlined" : "contained")}
          border={border}
          borderColor={borderColor}
          sx={{
            backgroundColor: !loading && bgcolor,
            color: !loading && color, // mui doesn't override the color while loading if a custom color is given to it
            boxSizing: "border-box",
            overflow: "hidden",

            "&:hover": {
              ...hoverStyles, //hover styles provided through props
            },
            "&:active": {
              boxShadow: "z8",
              ...activeStyles, //active styles provided through props
            },
            ...restStyles, //rest styles provided through props
          }}
          {...rest}
        >
          {icon || <Label m={0}>{children}</Label>}
        </Box>
      );
    }
  )
)(
  ({
    theme,
    borderRadius,
    iconSize,
    pd,
    iconColor,
    large,
    loading,
    icon,
    fontSize,
    disabled,
  }) => {
    //styles for button-base
    const base = {
      backgroundColor: disabled && `${theme.palette.grey[400]} !important`,
      transition: "0.1s",
      boxShadow: disabled && `${theme.shadows.z16}`,
      lineHeight: borderColor && 1.54,
      "& .MuiButton-startIcon": {
        marginRight: 4,
      },
      "& .MuiButton-endIcon": {
        marginLeft: 4,
      },
    };

    //styles for loading button
    const loadingStyles = {
      "& .MuiLoadingButton-root.Mui-disabled": {
        borderWidth: "1.5px",
      },
      "&.MuiLoadingButton-loading": {
        boxShadow: "none",
      },
    };

    //common styles for loading and base buttons
    const common = {
      borderRadius: borderRadius || (large ? 20 : theme.shape.button),
      padding: pd || (large ? theme.spacing(1.3, 2.7) : theme.spacing(1, 2)),
      fontSize: fontSize || (large ? 18 : 14),
    };

    //styles for icon button
    const iconStyles = {
      padding: pd || theme.spacing(1.5, 1.5),
      color: theme.palette[iconColor]?.main || iconColor,
      "& .MuiSvgIcon-root": {
        fontSize: iconSize || (large ? 32 : 24),
      },
      "&.MuiLoadingButton-loading": {
        backgroundColor: "transparent",
        fontSize: iconSize || (large ? 32 : 24),
      },
    };

    if (icon) {
      return { ...iconStyles };
    } else if (loading) {
      return { ...common, ...loadingStyles };
    } else {
      return { ...common, ...base };
    }
  }
);
