import { Box, Container, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container as="main" maxW="1200px" padding="4">
      <Box
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="4"
      >
        <Heading size="lg" fontWeight={800} fontFamily="'Sniglet', cursive">
          <NextLink href="/">
            <a>
              <Box as="span" color="red.400">
                R
              </Box>
              <Box as="span" color="orange.400">
                u
              </Box>
              <Box as="span" color="yellow.400">
                b
              </Box>
              <Box as="span" color="green.400">
                b
              </Box>
              <Box as="span" color="teal.400">
                i
              </Box>
              <Box as="span" color="cyan.400">
                s
              </Box>
              <Box as="span" color="pink.400">
                h
              </Box>{" "}
              <Box as="span" color="purple.400">
                R
              </Box>
              <Box as="span" color="red.400">
                a
              </Box>
              <Box as="span" color="orange.400">
                b
              </Box>
              <Box as="span" color="yellow.400">
                b
              </Box>
              <Box as="span" color="green.400">
                l
              </Box>
              <Box as="span" color="blue.400">
                e
              </Box>
            </a>
          </NextLink>
        </Heading>
        <Box as="nav" display="flex" gap="4">
          <NextLink href="/episodes">
            <Link>Episodes</Link>
          </NextLink>
          <NextLink href="/about">
            <Link>About</Link>
          </NextLink>
        </Box>
      </Box>
      {children}
    </Container>
  );
};
