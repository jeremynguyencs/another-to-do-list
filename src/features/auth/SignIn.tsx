import React from "react";
import { Center } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { SignUpCard } from "features/auth";

const SignIn = () => {
  return (
    <Layout>
      <Center h="full">
        <SignUpCard />
      </Center>
    </Layout>
  );
};

export default SignIn;
