import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";
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
      <Layout>
        <AspectRatio
          borderRadius="3xl"
          overflow="hidden"
          marginBottom="4"
          ratio={16 / 9}
        >
          <iframe
            width="560"
            height="315"
            src={episode.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Heading marginBottom={2}>{episode.title}</Heading>
        {/* TODO: Replace description with post content. */}
        <Text>{episode.description}</Text>
        {/* <Box dangerouslySetInnerHTML={{ __html: episode.content || "" }} /> */}
      </Layout>
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
  const episode = getPostBySlug(params.slug, [
    "title",
    "slug",
    "url",
    "content",
    "description",
  ]);
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
