import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  bg?: string;
  title: string;
};

const Section = ({ children, bg, title }: SectionProps) => {
  return (
    <Box bg={bg || "white"} py={8}>
      <Container>
        <Heading>{title}</Heading>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
