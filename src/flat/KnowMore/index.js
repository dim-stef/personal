import { AiFillGithub, AiFillMediumCircle, AiFillMail } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { Box, Stack, Flex, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

function KnowMore() {
  return (
    <Flex
      mt="20"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h5" size="md">
        you probably want to learn more about me <sup>please</sup>
      </Heading>
      <Stack spacing={4} isInline direction="row" mt="5">
        <Link href="https://github.com/dim-stef" passHref>
          <a style={{ cursor: "pointer" }} target="_blank">
            <AiFillGithub size={36} color="gray" />
          </a>
        </Link>
        <Link href="https://dimitrisstefanakis.medium.com/" passHref>
          <a style={{ cursor: "pointer" }} target="_blank">
            <AiFillMediumCircle size={36} color="gray" />
          </a>
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~0123e62f4f7087cb16?viewMode=1"
          passHref
        >
          <a style={{ cursor: "pointer" }} target="_blank">
            <SiUpwork size={36} color="gray" />
          </a>
        </Link>
        <Link
          href="mailto:jimstef@outlook.com"
          passHref
        >
          <a style={{ cursor: "pointer" }} target="_blank">
            <AiFillMail size={36} color="gray" />
          </a>
        </Link>
      </Stack>
    </Flex>
  );
}

export default KnowMore;
