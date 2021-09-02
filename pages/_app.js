import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import Layout from "../src/flat/Layout";
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
