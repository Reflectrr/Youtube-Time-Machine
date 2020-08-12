import React from "react";
import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

const ContainerBox = ({ className, children }) => {
  const classes = useSelector((state) => state.classes);
  return (
    <Box className={classes[className]}>
      <Container>{children}</Container>
    </Box>
  );
};

export default ContainerBox;
