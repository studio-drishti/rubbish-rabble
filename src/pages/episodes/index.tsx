import type { NextPage } from "next";
import Head from "next/head";
import { EpisodesList } from "../../components/episodes-list";
import { Layout } from "../../components/layout/layout";
import { getAllPosts } from "../../lib/api";
import { EpisodeType } from "../../types";

interface EpisodesProps {
  episodes: EpisodeType[];
}

const Episodes: NextPage<EpisodesProps> = ({ episodes }) => {
  return (
    <>
      <Head>
        <title>Rubbish Rabble Episodes</title>
      </Head>
      <Layout>
        <EpisodesList episodes={episodes} />
      </Layout>
    </>
  );
};

export default Episodes;

export const getStaticProps = async () => {
  const episodes = getAllPosts([
    "slug",
    "title",
    "description",
    "image",
    "unreleased",
  ]).filter((post) => !post.unreleased);
  return {
    props: { episodes },
  };
};
