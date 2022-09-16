import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout/layout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rubbish Rabble</title>
      </Head>
      <Layout>
        <Text>
          As climate change continues to shape our lives, we felt compelled to
          create something that could inspire a new generation of
          environmentalists. Rubbish Rabble is a surrealist, educational, comedy
          series that combines our love of the planet with craft, up-cycled art.
          We believe in preserving a world that not only survives but also
          thrives. The lifestyle of every individual regardless of age or
          background will change as a result of climate change. As such, we seek
          to produce an age independent program that is appropriate and
          relatable for all humans.
        </Text>
      </Layout>
    </>
  );
};

export default About;
