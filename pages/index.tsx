import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Details from "../component/Details";
import Cart from "../component/Cart";

export default function Home() {
  return (
    <Container maxW={"container.xl"} p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
