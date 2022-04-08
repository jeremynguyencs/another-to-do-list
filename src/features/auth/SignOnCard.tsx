import React from "react";
import { Stack, Heading, Text, Link } from "@chakra-ui/react";

import { Card } from "components/Card";
import { SignUpForm } from "features/auth";

const SignOnCard = () => {
  return (
    <Card display="flex" flexDirection="column" gap={8} maxW="md">
      <Stack gap={2}>
        <Heading as="h4" size="md">
          Sign up with your email
        </Heading>
        <Text>
          Already have an account? <Link href="/sign-in">Sign In</Link>
        </Text>
      </Stack>
      <SignUpForm />
    </Card>
  );
};

export default SignOnCard;
