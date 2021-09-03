import { Flex, Heading } from "@chakra-ui/layout";

function Status() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="20"
      bg="black"
      w="100%"
    >
      <Heading as="h2" color="white">
        status: open to offers
      </Heading>
    </Flex>
  );
}

export default Status;
