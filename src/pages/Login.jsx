import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {
  VStack,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitBtnHandler = (e) => {
    e.preventDefault();
  };
  const { email, password } = formData;
  return (
    <VStack w="full">
      <HStack>
        <FaSignInAlt fontSize="34px"></FaSignInAlt>
        <Heading as="h1" marginLeft="0.5">
          Login
        </Heading>
      </HStack>
      <Heading as="p" size="lg" color="gray.600">
        Login to start setting some goals
      </Heading>
      <VStack w="container.sm" gap="4">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            name="name"
            onChange={onChangeHandler}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={onChangeHandler}
            placeholder="Enter your password"
            value={password}
          ></Input>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          w="container.sm"
          onClick={submitBtnHandler}
        >
          Login
        </Button>
      </VStack>
    </VStack>
  );
};

export default Login;
