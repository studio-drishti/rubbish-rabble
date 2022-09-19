import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";

export const FollowUs = (): JSX.Element => {
  return (
    <Box
      position="relative"
      borderRadius="3xl"
      overflow="hidden"
      background="blue.800"
    >
      <Box opacity={0.25}>
        <Image
          src={require("../../img/rubbish-rabble.jpg")}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        position="relative"
        zIndex={1}
        paddingY={[12, 16, 20, 32]}
        paddingX={[10, 16, 20, 72]}
        textAlign="center"
      >
        <Heading color="white">Connect with us!</Heading>
        <Text fontSize="xl" color="white" marginBottom={12}>
          Subscribe to our YouTube channel to stay up to date on the latest
          Rubbish Rabble episodes.
        </Text>
        <Button
          colorScheme="red"
          variant="solid"
          as="a"
          href="https://www.youtube.com/playlist?list=PL3MjqahPp6uQZRb2hVSz2iyuuWqkmip26"
          target="_blank"
          rel="nofollow noopener"
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
