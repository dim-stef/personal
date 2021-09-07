const contentful = require("contentful");
import Head from "next/head";
import { Heading, Flex, Stack, Box } from "@chakra-ui/layout";
import ContentfulRenderer from "../src/features/ContentfulRenderer";

export default function About({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Heading as="h1" fontWeight="400">
        Hi, my name is Jim. I am a Web Developer living in Athens, GR.
      </Heading>
      <Box display="contents">
        <ContentfulRenderer node={data} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // get my interests
  let response_about = await client.getEntries({
    content_type: "about",
  });
  let items = response_about.items;
  let body = items[0].fields.body;

  return {
    props: {
      data: body,
    },
  };
}