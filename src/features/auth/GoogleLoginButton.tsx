import React from "react";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  return (
    <Button variant="outline" leftIcon={<FaGoogle />}>
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
