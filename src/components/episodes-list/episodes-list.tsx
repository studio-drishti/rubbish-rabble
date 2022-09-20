import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { EpisodeType } from "../../types";

interface EpisodesListProps {
  episodes: EpisodeType[];
}

export const EpisodesList = ({ episodes }: EpisodesListProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap="8">
      {episodes.map((episode) => (
        <Box
          display="grid"
          gridTemplateColumns={[null, null, null, "1fr 2fr"]}
          gridColumnGap="16"
          gridRowGap="4"
        >
          <Box order={["2", null, null, "1"]}>
            <Heading size="lg" marginBottom="2">
              {episode.title}
            </Heading>
            <Text marginBottom={4}>{episode.description}</Text>
            <Link href={`/episodes/${episode.slug}`} passHref>
              <Button as="a">watch episode</Button>
            </Link>
          </Box>
          <Box
            order={[1, null, null, 2]}
            position="relative"
            minHeight={[72, 72, 80]}
            borderRadius="3xl"
            overflow="hidden"
          >
            <Image
              src={require(`../../img/${episode.image}`)}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
