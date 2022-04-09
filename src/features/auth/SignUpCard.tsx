import React from "react";
import { Stack, Heading, Text, Link, Divider } from "@chakra-ui/react";

import { Card } from "components/Card";
import { SignUpForm, GoogleLoginButton } from "features/auth";

const SignUpCard = () => {
  return (
    <Card display="flex" flexDirection="column" gap={8} maxW="md">
      <Stack gap={2}>
        <Heading as="h4" size="md">
          Sign up
        </Heading>
        <Text>
          Already have an account? <Link href="/sign-in">Sign In</Link>
        </Text>
      </Stack>
      <GoogleLoginButton />
      <Divider />
      <SignUpForm />
    </Card>
  );
};

export default SignUpCard;
