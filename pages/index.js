const contentful = require("contentful");
import Head from 'next/head'
import { Heading, Flex } from '@chakra-ui/layout'
import Skull from '../src/flat/Icons/Skull'
import Status from '../src/flat/Status'
import Interests from '../src/flat/Interests'

export default function Home({interests}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" fontWeight="400">Hi, my name is Jim. I am a Web Developer living in Athens, GR.</Heading>
      <Flex mt="20" mb="20" placeItems="center" w="100%">
        {/* <Skull height="40" width="40"/> */}
        <Status/>
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  
  
  let response = await client.getEntries({
    content_type: 'interest'
  })
  let items = response.items;
  let interests = items[0].fields.name;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      interests,
    },
  };
}
