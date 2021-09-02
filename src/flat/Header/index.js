import Link from "next/link";
import { Flex, Text } from "@chakra-ui/layout";

function Header() {
  return(
    <Flex w="100%" placeItems="center" h="80px">
      <Link href="/">
        <Text>../../index.js</Text>
      </Link>
    </Flex>
  )
}

function HeaderLink({href}){
  return(
    <Flex placeItems="center" h="100%">

    </Flex>
  )
}

export default Header;
