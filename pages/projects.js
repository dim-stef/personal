const contentful = require("contentful");
import Head from 'next/head'
import { Box, Flex } from "@chakra-ui/layout";
import Project from "../src/features/Project";

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="A small list of a few of my projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexFlow="column" w="100%">
        {data.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
      </Flex>
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
    content_type: "project",
  });
  let items = response_about.items;

  return {
    props: {
      data: items,
    },
  };
}
