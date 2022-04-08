import React, { useState } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack as="form" gap={4}>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" placeholder="Email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button mt={4} variant="brand" type="submit">
        Sign Up
      </Button>
    </Stack>
  );
};

export default SignUpForm;
