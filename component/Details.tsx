import React from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Select,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpanValue = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"}>
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your details</Heading>
        <Text>If you already have a account, click here to login.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Fisrt Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="pak">Islamic Republic of Pakistan</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button variant={"primary"} size={"lg"} w={"full"}>
              Place Order
            </Button>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
