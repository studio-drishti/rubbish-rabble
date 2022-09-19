import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { EpisodeType } from "../../types";

interface FeaturedEpisodesProps {
  episodes: EpisodeType[];
}

export const FeaturedEpisodes = ({
  episodes,
}: FeaturedEpisodesProps): JSX.Element => {
  return (
    <Box marginBottom={[8, 16, 32]}>
      <SimpleGrid columns={[1, 1, 3]} spacing={["8", "8", "16"]}>
        {episodes.map((episode) => (
          <LinkBox opacity={episode.unreleased ? 0.6 : 1}>
            <Box
              position="relative"
              height="30rem"
              borderRadius="3xl"
              overflow="hidden"
              marginBottom="5"
            >
              <Image
                src={require(`../../img/${episode.image}`)}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Heading size="md" textAlign="center">
              {episode.unreleased ? (
                <Box>
                  {episode.title}{" "}
                  <Box marginTop="1">
                    <Badge colorScheme="green">Coming Soon</Badge>
                  </Box>
                </Box>
              ) : (
                <Link href={`/episodes/${episode.slug}`} passHref>
                  <LinkOverlay>{episode.title}</LinkOverlay>
                </Link>
              )}
            </Heading>
          </LinkBox>
        ))}
      </SimpleGrid>
      <Box textAlign="center" marginTop={[8, 8, 16]}>
        <Link href="/episodes" passHref>
          <Button as="a">See All Episodes</Button>
        </Link>
      </Box>
    </Box>
  );
};
