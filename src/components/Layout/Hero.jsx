import React from "react";
import { Stack, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <Stack h="100vh" spacing={0}>
      <Navbar />
      <Stack direction={{ base: "column", md: "row" }} flex={1}>
        <Flex flex={1} bg="gray.50" h="full" align="center" justify="center">
          <Stack maxW="40ch" gap={8}>
            <Heading as="h2" size="2xl" lineHeight={"120%"}>
              A{" "}
              <Text as={"span"} color="brand.400">
                new{" "}
              </Text>
              way to do to-do lists
            </Heading>
            <Stack direction="row" gap={4}>
              <Button as={Link} variant="brand" size="lg" to="/sign-up">
                Sign up
              </Button>
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} bg="purple.100" h="full">
          hi
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Hero;
