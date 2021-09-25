import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import ContentfulRenderer from "../ContentfulRenderer";
import ProjectImageGallery from "../../flat/ProjectImageGallery";

function Project({ project }) {
  const { title, status, content, images, startDate, endDate } = project.fields;
  
  console.log("images", images)
  return (
    <Flex w="100%" flexDirection="column">
      <Heading as="h2" mb={5}>{title}</Heading>
      <ProjectImageGallery images={images}/>
      <Box display="contents">
        <ContentfulRenderer node={content} />
      </Box>

      <Box mt={5} mb={10} fontSize={26}>
        <Text as="b" display="inline">
          Status:{" "}
        </Text>
        <Text display="inline">{status}</Text>
      </Box>
    </Flex>
  );
}

export default Project;
