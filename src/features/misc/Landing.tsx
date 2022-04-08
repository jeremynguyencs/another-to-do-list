import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { Head } from "components/Head";
import { Hero, Footer, Section } from "components/Layout";

const Landing = () => {
  return (
    <>
      <Head title="Home" description="Homepage" />
      <Hero />
      <Section bg="gray.100" title="Features">
        Hi
      </Section>
      <Footer />
    </>
  );
};

export default Landing;
