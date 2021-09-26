import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";
import Link from "next/link";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { Flex, Box, Text } from "@chakra-ui/layout";

function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function onMenuClick() {
    setMobileMenuOpen(true);
  }

  function handleResize(){
    setIsMobile(window.matchMedia("(max-width: 480px)").matches);
  }

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(()=>{
    if(window){
      window.addEventListener('resize', handleResize)
    }
    return () =>{
      if(window){
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 480px)").matches);
  }, []);

  return (
    <Flex w="100%" placeItems="center" h="80px" mb="10">
      <HomeHeaderLink href="/" />
      {isMobile ? (
        <AiOutlineMenu size={24} onClick={onMenuClick} />
      ) : (
        <>
          <HeaderLink href="/about" title="about" />
          <HeaderLink href="/projects" title="projects" />
        </>
      )}
      {mounted &&
        ReactDOM.createPortal(
          <MobileMenuOverlay
            isOpen={isMobileMenuOpen}
            setOpen={setMobileMenuOpen}
          />,
          document.getElementById("modal")
        )}
    </Flex>
  );
}

function MobileMenuOverlay({ isOpen, setOpen }) {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
  });

  function handleMenuClose(){
    setOpen(false);
  }

  return transitions((styles, item) => {
    return item && (
      <animated.div style={styles}>
        <Box
          w="100vw"
          h="100vh"
          style={{ position: "absolute", backgroundColor: "white" }}
        >
          <Box position="absolute" top="0" left="0" padding="20px" onClick={handleMenuClose}>
            <AiFillCloseCircle size={36} />
          </Box>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={24}>
            <HeaderLink href="/about" title="about" style={{marginLeft: 20, fontSize: 30}}/>
            <HeaderLink href="/projects" title="projects" style={{marginLeft: 20, fontSize: 30}}/>
          </Flex>
        </Box>
      </animated.div>
    );
  });
}

function HeaderLink({ href, title, style={} }) {
  return (
    <Flex placeItems="center" h="100%">
      <Link href={href}>
        <a
          style={{
            height: "100%",
            cursor: "pointer",
            display: "flex",
            placeItems: "center",
            marginLeft: 30,
            ...style
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
