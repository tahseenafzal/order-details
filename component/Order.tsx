import React from "react";
import { VStack, Heading, Text, Icon } from "@chakra-ui/react";
import PennyBoard from "./Icons";

const Order = () => {
  return (
    <VStack
      w={"full"}
      h={"full"}
      p={10}
      spacing={10}
      alignItems={"flex-start"}
      bg={"gray.50"}
    >
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your order</Heading>
        <Text>
          If price is too hard on your eyes, <b>try changing the theme</b>
        </Text>
      </VStack>
      <Icon as={PennyBoard} />
    </VStack>
  );
};

export default Order;
