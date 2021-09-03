import { ChakraProvider } from "@chakra-ui/react";
import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/layout";
import Layout from "../src/flat/Layout";
import '../styles/global.css';


// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  body: `'Roboto Mono', monospace`,
  heading: `'Roboto Mono', monospace`
}

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme({
  fonts: {
    heading: "'Roboto Mono', monospace",
    body: "'Roboto Mono', monospace",
  },

  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: "'Roboto Mono', monospace",
        // bg: "gray.400",
        // color: "white",
      },
      heading:{
        fontFamily: "'Roboto Mono', monospace",
      },
      mono:{
        fontFamily: "'Roboto Mono', monospace",
      },
      // styles for the `a`
      a: {
        // color: "teal.500",
        _hover: {
          // textDecoration: "underline",
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
