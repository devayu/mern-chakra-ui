import React from "react";
import {
  HStack,
  Box,
  Heading,
  Link as ReachLink,
  Button,
} from "@chakra-ui/react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack justify="space-between" w="full" py="2.5">
      <Box>
        <Link as={ReachLink} to="/">
          <Heading as="h1" variant="logo">
            GoalSetter
          </Heading>
        </Link>
      </Box>
      <HStack spacing="5">
        <Link as={ReachLink} to="/login">
          <Button
            leftIcon={<FaSignInAlt></FaSignInAlt>}
            variant="link"
            color="blue.900"
            _focus="none"
          >
            Login
          </Button>
        </Link>

        <Link as={ReachLink} to="/">
          <Button
            leftIcon={<FaUser></FaUser>}
            variant="link"
            color="blue.900"
            _focus="none"
          >
            Register
          </Button>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
