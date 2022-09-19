import { Box, Container, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { ContentContainer } from "./content-container";
import { Logo } from "./logo";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <ContentContainer as="main">
        <Box
          as="header"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingTop="4"
        >
          <Heading size="lg" fontWeight={800} fontFamily="'Sniglet', cursive">
            <NextLink href="/">
              <a>
                <Logo />
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
      </ContentContainer>
      <ContentContainer marginY={[8, 8, 16, 32]}>{children}</ContentContainer>
      <Box
        as="footer"
        paddingY={[16]}
        backgroundColor="gray.100"
        borderTopStyle="solid"
        borderTopWidth="thin"
        borderTopColor="gray.200"
        marginTop="auto"
      >
        <ContentContainer
          display="flex"
          justifyContent="space-between"
          flexDirection={["column", null, null, "row"]}
          gap={[4, 4, 4, 0]}
          alignItems="center"
        >
          <Box textAlign="center">
            Surreal sustainability stories and green inspiration for all ages.
            Brought to you by{" "}
            <Link
              href="https://studiodrishti.co"
              target="_blank"
              rel="nofollow"
            >
              Studio Drishti
            </Link>
            .
          </Box>
          <Box>
            <Link
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="nofollow noopener"
            >
              <img src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" />
            </Link>
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  );
};
