import React from "react";

import { forwardRef, Box, BoxProps } from "@chakra-ui/react";

const Card = forwardRef<BoxProps, "div">((props, ref) => {
  return (
    <Box p={8} boxShadow="base" rounded="md" bg="white" ref={ref} {...props}>
      {props.children}
    </Box>
  );
});

export default Card;
