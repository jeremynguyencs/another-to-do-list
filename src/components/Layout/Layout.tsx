import React from "react";
import { Stack, Flex, Container } from "@chakra-ui/react";

import { Navbar, Footer } from "components/Layout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack h="full">
      <Flex flex="1 0 auto" direction="column">
        <Navbar />
        <Container maxW="container.lg" as="main" flex="1 0 auto">
          {children}
        </Container>
      </Flex>
      <Footer />
    </Stack>
  );
};

export default Layout;
