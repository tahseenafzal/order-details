import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Details from "../component/Details";
import Order from "../component/Order";

export default function Home() {
  return (
    <Container maxW={"container.xl"} p={0}>
      <Flex h={"100vh"} py={20} direction={["column-reverse", "row"]}>
        <Details />
        <Order />
      </Flex>
    </Container>
  );
}
