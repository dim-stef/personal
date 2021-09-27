const contentful = require("contentful");
import Head from "next/head";
import { Heading, Flex, Stack, Box } from "@chakra-ui/layout";
import ContentfulRenderer from "../src/features/ContentfulRenderer";

export default function About({ data }) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me page."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading w="100%" as="h1" fontWeight="400">
        Some stuff about me
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
