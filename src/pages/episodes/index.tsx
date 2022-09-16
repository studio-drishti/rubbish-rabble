import type { NextPage } from "next";
import Head from "next/head";
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
        <title>Rubbish Rabble</title>
      </Head>
      <Layout>
        {episodes.map((episode) => (
          <div>{episode.title}</div>
        ))}
      </Layout>
    </>
  );
};

export default Episodes;

export const getStaticProps = async () => {
  const episodes = getAllPosts([
    "slug",
    "title",
    "image",
    "content",
    "unreleased",
  ]).filter((post) => !post.unreleased);
  return {
    props: { episodes },
  };
};
