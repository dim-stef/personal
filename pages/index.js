const contentful = require("contentful");
import Head from 'next/head'
import { Heading, Flex, Stack } from '@chakra-ui/layout'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Skull from '../src/flat/Icons/Skull'
import Status from '../src/flat/Status'
import Interests from '../src/flat/Interests'
import Skills from '../src/flat/Skills';
import Learning from '../src/flat/Learning';
import KnowMore from '../src/flat/KnowMore';

const breakpoints = createBreakpoints({
  sm: "480px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })

export default function Home({interests, skills, learning}) {
  return (
    <>
      <Head>
        <title>Dimitris Stefanakis</title>
        <meta name="description" content="Welcome to my personal website! Some brief info about me and my work."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" fontWeight="400">Hi, my name is Jim. I am a Web Developer living in Athens, GR.</Heading>
      <Flex flexDirection="column" mt="20" mb="20" w="100%">
        {/* <Skull height="40" width="40"/> */}
        <Status/>
        <Flex flexDirection={{base: 'column', sm: 'row'}} flexWrap="wrap" w="100%" justifyContent="space-between" alignItems={{base: 'center', sm: 'start'}}>
          <Interests interests={interests}/>
          <Skills skills={skills}/>
          <Learning learning={learning}/>
        </Flex>
        <KnowMore />
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
  
  // get my interests
  let response_interest = await client.getEntries({
    content_type: 'interest'
  })
  let items = response_interest.items;
  let interests = items[0].fields.name;

  // get my skills
  let response_skills = await client.getEntries({
    content_type: 'skill'
  })
  let skill_items = response_skills.items;
  let skills = skill_items[0].fields.name;

  // get skills i plan to learn
  let response_learning = await client.getEntries({
    content_type: 'learning'
  })
  let learning_items = response_learning.items;
  let learning = learning_items[0].fields.name;

  // TODO
  // add soft skills section

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      interests,
      skills,
      learning,
    },
  };
}
