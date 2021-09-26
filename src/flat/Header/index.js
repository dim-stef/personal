import Link from "next/link";
import { Flex, Text } from "@chakra-ui/layout";

function Header() {
  return (
    <Flex w="100%" placeItems="center" h="80px" mb="10">
      <HomeHeaderLink href="/" />
      <HeaderLink href='/about' title='about'/>
      <HeaderLink href='/projects' title='projects'/>
      {/* <HeaderLink href='/contact' title='contact'/> */}
    </Flex>
  );
}

function HeaderLink({ href, title }) {
  return (
    <Flex placeItems="center" h="100%">
      <Link href={href}>
        <a
          style={{
            height: "100%",
            cursor: "pointer",
            display: "flex",
            placeItems: "center",
            marginLeft: 30
          }}
        >
          {title}
        </a>
      </Link>
    </Flex>
  );
}

function HomeHeaderLink({ href }) {
  return (
    <Flex placeItems="center" h="100%" flex="1">
      <Link href={href}>
        <a
          style={{
            height: "100%",
            cursor: "pointer",
            display: "flex",
            placeItems: "center",
            fontSize: "1.4rem",
          }}
        >
          ../../index.js
        </a>
      </Link>
    </Flex>
  );
}

export default Header;
