import React, { useState, useEffect } from "react";
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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, reset } from "../store/slices/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password, confirmPassword } = formData;
  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, toast]);
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
      const userData = {
        name,
        email,
        password,
      };
      dispatch(registerUser(userData));
      setIsPasswordSame(true);
    }
  };

  if (isLoading) {
    return <Spinner size="xl"></Spinner>;
  }
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
