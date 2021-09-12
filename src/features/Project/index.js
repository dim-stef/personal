import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

function Project({ project }) {
  const { title, status, startDate, endDate } = project.fields;
  return (
    <Flex w="100%" flexDirection="column">
      <Heading as="h2">{title}</Heading>
      <Box>
        <Text as="b" display="inline">
          Status:{" "}
        </Text>
        <Text display="inline">{status}</Text>
      </Box>
    </Flex>
  );
}

export default Project;
