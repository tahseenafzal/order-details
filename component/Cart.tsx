import React from "react";
import {
  VStack,
  Heading,
  Text,
  Icon,
  Button,
  AspectRatio,
  HStack,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PennyBoard from "./Icons";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600");

  return (
    <VStack
      w={"full"}
      h={"full"}
      p={10}
      spacing={10}
      alignItems={"flex-start"}
      bg={bgColor}
    >
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant={"link"}>
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} w={"full"}>
        <AspectRatio ratio={1} w={24}>
          <Icon as={PennyBoard} />
        </AspectRatio>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
          spacing={0}
        >
          <VStack spacing={0} alignItems={"flex-start"}>
            <Heading size={"md"}>Penny board</Heading>
            <Text color={textColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size={"sm"}>$119.00</Heading>
        </Stack>
      </HStack>
      <VStack w={"full"} alignItems={"stretch"} spacing={4}>
        <HStack justifyContent={"space-between"}>
          <Text color={textColor}>Subtotal</Text>
          <Heading size={"sm"}>$119.00</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={textColor}>Shipping</Text>
          <Heading size={"sm"}>$19.99</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={textColor}>Taxes (estimated)</Text>
          <Heading size={"sm"}>$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent={"space-between"}>
          <Text color={textColor}>Total</Text>
          <Heading size={"lg"}>$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
