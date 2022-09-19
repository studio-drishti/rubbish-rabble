import { AspectRatio, Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FeaturedEpisodes } from "../components/featured-episodes";
import { FollowUs } from "../components/follow-us/follow-us";
import { Layout } from "../components/layout/layout";
import { getAllPosts } from "../lib/api";
import { EpisodeType } from "../types";

interface HomeProps {
  episodes: EpisodeType[];
}

const Home: NextPage<HomeProps> = ({ episodes }) => {
  return (
    <>
      <Head>
        <title>Rubbish Rabble</title>
      </Head>
      <Layout>
        <FeaturedEpisodes episodes={episodes} />
        <FollowUs />
        {/* <AspectRatio ratio={16 / 9}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/0iCuT7HkbJA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const episodes = getAllPosts(["slug", "title", "image", "unreleased"]);
  return {
    props: { episodes },
  };
};
