import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/layout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Rubbish Rabble</title>
      </Head>
      <Layout>
        <Heading marginBottom="4">Rubbish What Now!?</Heading>
        <Box display="flex" flexDirection="column" gap="4">
          <Text>
            What would humans learn from their trash if it could speak? We
            imagined a colorful cast of waste-based characters full of
            sustainability wizdom. They believe in building a world that not
            only survives but thrives. This tumultuous mob of common detritus
            share their stories in hopes of inspiring a new generation of
            environmentalists.
          </Text>
          <Text>
            As climate change ravages on, we felt compelled to send a message:
            every individual's habits and community engagement must adapt to a
            changing world. Combining our love of the planet with craft,
            up-cycled art, we seek to produce an age independent program that is
            approachable and educational for all humans. We hope that you enjoy
            it.
          </Text>
          <Text>Sincerely, Emma &amp; Jay</Text>
          <Box
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
            paddingBottom="65%"
          >
            <Image
              src={require("../img/humble-beginning.jpg")}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default About;
