import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  VStack,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password, confirmPassword } = formData;
  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const submitBtnHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordSame(!isPasswordSame);
    } else {
      setIsPasswordSame(true);
    }
  };
  return (
    <VStack w="full">
      <HStack>
        <FaUser fontSize="34px"></FaUser>
        <Heading as="h1" marginLeft="0.5">
          Register
        </Heading>
      </HStack>
      <Heading as="p" size="lg" color="gray.600">
        Please create an account
      </Heading>
      <VStack w="container.sm" gap="4">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={onChangeHandler}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            name="email"
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
        <FormControl isRequired>
          <FormLabel htmlFor="repassword">Confirm Password</FormLabel>
          <InputGroup>
            <Input
              id="repassword"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={onChangeHandler}
              placeholder="Confirm your password"
              value={confirmPassword}
            ></Input>
            <InputRightElement>
              <Button
                size="xs"
                marginRight="2"
                onClick={showPasswordHandler}
                fontSize="xs"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </Button>
            </InputRightElement>
          </InputGroup>

          {isPasswordSame ? (
            <></>
          ) : (
            <FormHelperText color="red.600">Password not same</FormHelperText>
          )}
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          w="container.sm"
          onClick={submitBtnHandler}
        >
          Submit
        </Button>
      </VStack>
    </VStack>
  );
};

export default Register;
