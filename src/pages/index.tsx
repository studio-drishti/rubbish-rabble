import { AspectRatio, Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rubbish Rabble</title>
      </Head>
      <Layout>
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/0iCuT7HkbJA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Layout>
    </>
  );
};

export default Home;
