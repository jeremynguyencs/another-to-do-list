import React from "react";
import { Center } from "@chakra-ui/react";

import { Layout } from "components/Layout";
import { SignOnCard } from "features/auth";

const SignOn = () => {
  return (
    <Layout>
      <Center h="full">
        <SignOnCard />
      </Center>
    </Layout>
  );
};

export default SignOn;
