import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../components/layout/layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdown-to-html";
import { EpisodeType } from "../../types";

interface EpisodeProps {
  episode: EpisodeType;
}

const Episode: NextPage<EpisodeProps> = ({ episode }) => {
  return (
    <>
      <Head>
        <title>Rubbish Rabble</title>
      </Head>
      <Layout>{episode.title}</Layout>
    </>
  );
};

export default Episode;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const episode = getPostBySlug(params.slug, ["title", "slug", "content"]);
  const content = await markdownToHtml(episode.content || "");

  return {
    props: {
      episode: {
        ...episode,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
