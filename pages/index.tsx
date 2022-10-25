import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"container.xl"} p={0}>
      <Flex h={"100vh"} py={20} direction={["column-reverse", "row"]}>
        <VStack
          w={"full"}
          h={"full"}
          p={10}
          spacing={10}
          alignItems={"flex-start"}
        >
          <VStack spacing={3} alignItems={"flex-start"}>
            <Heading size={"2xl"}>Your details</Heading>
            <Text>If you already have a account, click here to login.</Text>
          </VStack>
        </VStack>
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
        </VStack>
      </Flex>
    </Container>
  );
}
